import axios from 'axios';

// Ollama API endpoint (runs locally) - PRIMARY
const OLLAMA_API = 'http://localhost:11434/api/generate';

// Cloud API fallback (Cerebras) - SECONDARY
const CLOUD_API = 'https://api.cerebras.ai/v1/chat/completions';
const CLOUD_MODEL = 'qwen-3-235b-a22b-instruct-2507';

/**
 * Helper: Call the cloud-based Cerebras API as a fallback.
 * Accepts a user prompt and an optional system prompt.
 * Returns the assistant's response text.
 */
async function callCloudAPI(userPrompt, systemPrompt = '') {
  const CLOUD_API_KEY = process.env.CEREBRAS_API_KEY;
  const messages = [];
  if (systemPrompt) {
    messages.push({ role: 'system', content: systemPrompt });
  }
  messages.push({ role: 'user', content: userPrompt });

  const response = await axios.post(CLOUD_API, {
    model: CLOUD_MODEL,
    messages: messages,
    temperature: 0.7,
    max_tokens: 4096
  }, {
    headers: {
      'Authorization': `Bearer ${CLOUD_API_KEY}`,
      'Content-Type': 'application/json'
    },
    timeout: 60000 // 60 second timeout for cloud
  });

  return response.data.choices[0].message.content || '';
}

export class GeminiService {
  async generateSummary(text, type = 'brief') {
    const prompts = {
      brief: `Summarize this in 2-3 sentences:\n\n${text}`,
      detailed: `Provide a detailed summary (5-7 sentences):\n\n${text}`,
      comprehensive: `Provide a comprehensive summary with key points:\n\n${text}`
    };

    // 1st preference: Local Ollama
    try {
      const response = await axios.post(OLLAMA_API, {
        model: 'mistral',
        prompt: prompts[type],
        stream: false
      }, {
        timeout: 30000
      });

      return response.data.response;
    } catch (error) {
      console.error('❌ Ollama API error:', error.message);
      console.warn('⚠️ Ollama not available, falling back to Cloud API...');
    }

    // 2nd preference: Cloud API fallback
    try {
      console.log('☁️ Calling Cloud API (Cerebras) as fallback...');
      const cloudResponse = await callCloudAPI(prompts[type]);
      console.log('✅ Cloud API response received');
      return cloudResponse;
    } catch (cloudError) {
      console.error('❌ Cloud API error:', cloudError.message);
      throw new Error('Both local Ollama and Cloud API are unavailable. Please check your connection.');
    }
  }

  async generateQuiz(text, difficulty = 'medium', count = 5) {
    const prompt = `Generate exactly 5 multiple choice questions about this text. For each question, provide:
1. question (string)
2. options (array of exactly 4 strings - just the answer text, no letters)
3. correctAnswer (must be EXACTLY one of the 4 options as a string, not an array)
4. explanation (string)

Return ONLY valid JSON array, no other text. Example format:
[{"question":"What is X?","options":["Answer1","Answer2","Answer3","Answer4"],"correctAnswer":"Answer1","explanation":"Because..."}]

Text: ${text}`;

    let responseText = '';

    // 1st preference: Local Ollama
    try {
      const response = await axios.post(OLLAMA_API, {
        model: 'mistral',
        prompt: prompt,
        stream: false
      });
      responseText = response.data.response || '';
    } catch (error) {
      console.error('❌ Ollama API error:', error.message);
      console.warn('⚠️ Ollama not available, falling back to Cloud API...');

      // 2nd preference: Cloud API fallback
      try {
        console.log('☁️ Calling Cloud API (Cerebras) as fallback...');
        responseText = await callCloudAPI(prompt, 'You are a quiz generator. Return ONLY valid JSON arrays.');
        console.log('✅ Cloud API response received');
      } catch (cloudError) {
        console.error('❌ Cloud API error:', cloudError.message);
        throw new Error('Both local Ollama and Cloud API are unavailable. Please check your connection.');
      }
    }

    // Parse the response from whichever source succeeded
    try {
      let jsonStr = responseText.trim();

      // Remove markdown code blocks if present
      jsonStr = jsonStr.replace(/```json\n?/g, '').replace(/```\n?/g, '');

      // Find the JSON array
      const startIdx = jsonStr.indexOf('[');
      const endIdx = jsonStr.lastIndexOf(']');

      if (startIdx !== -1 && endIdx !== -1) {
        jsonStr = jsonStr.substring(startIdx, endIdx + 1);

        // Clean up common JSON issues
        jsonStr = jsonStr.replace(/[\n\r\t]/g, ' ');
        jsonStr = jsonStr.replace(/,\s*]/g, ']');
        jsonStr = jsonStr.replace(/,\s*}/g, '}');
        jsonStr = jsonStr.replace(/:\s*\[/g, ':[');

        const parsed = JSON.parse(jsonStr);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Validate and fix each question
          return parsed.map(q => {
            let options = Array.isArray(q.options) ? q.options : [q.options || ''];
            options = options.map(opt => String(opt).trim());

            let correctAnswer = String(q.correctAnswer || '').trim();
            if (!options.includes(correctAnswer)) {
              correctAnswer = options[0];
            }

            return {
              question: String(q.question || '').trim(),
              options: options,
              correctAnswer: correctAnswer,
              explanation: String(q.explanation || '').trim()
            };
          });
        }
      }
    } catch (parseError) {
      console.error('Error parsing quiz JSON:', parseError.message);
    }

    throw new Error('Failed to parse quiz response from LLM. Please try again.');
  }

  async generateRecommendations(weakTopics, performanceData) {
    const prompt = `Based on weak topics: ${weakTopics.join(', ')} and performance data: ${JSON.stringify(performanceData)}, provide 3 personalized learning recommendations in JSON format: [{"topic": "...", "action": "...", "reason": "..."}]`;

    let responseText = '';

    // 1st preference: Local Ollama
    try {
      const response = await axios.post(OLLAMA_API, {
        model: 'mistral',
        prompt: prompt,
        stream: false
      });
      responseText = response.data.response || '';
    } catch (error) {
      console.error('❌ Ollama API error:', error.message);
      console.warn('⚠️ Ollama not available, falling back to Cloud API...');

      // 2nd preference: Cloud API fallback
      try {
        console.log('☁️ Calling Cloud API (Cerebras) as fallback...');
        responseText = await callCloudAPI(prompt, 'You are a learning advisor. Return ONLY valid JSON arrays.');
        console.log('✅ Cloud API response received');
      } catch (cloudError) {
        console.error('❌ Cloud API error:', cloudError.message);
        throw new Error('Both local Ollama and Cloud API are unavailable. Please check your connection.');
      }
    }

    // Parse the response
    try {
      let jsonStr = responseText.trim().replace(/```json\n?/g, '').replace(/```\n?/g, '');

      const startIdx = jsonStr.indexOf('[');
      const endIdx = jsonStr.lastIndexOf(']');

      if (startIdx !== -1 && endIdx !== -1) {
        jsonStr = jsonStr.substring(startIdx, endIdx + 1);
        jsonStr = jsonStr.replace(/[\n\r\t]/g, ' ');
        jsonStr = jsonStr.replace(/,\s*]/g, ']');
        jsonStr = jsonStr.replace(/,\s*}/g, '}');

        const parsed = JSON.parse(jsonStr);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map(r => ({
            topic: String(r.topic || '').trim(),
            action: String(r.action || '').trim(),
            reason: String(r.reason || '').trim()
          }));
        }
      }
    } catch (parseError) {
      console.error('Error parsing recommendations:', parseError.message);
    }

    throw new Error('Failed to parse recommendations from LLM. Please try again.');
  }

  async extractTopics(text) {
    const prompt = `Extract 5-10 main topics from this text. Return ONLY a JSON array of topic strings, no other text.
Example: ["Topic1","Topic2","Topic3"]

Text: ${text}`;

    let responseText = '';

    // 1st preference: Local Ollama
    try {
      const response = await axios.post(OLLAMA_API, {
        model: 'mistral',
        prompt: prompt,
        stream: false
      });
      responseText = response.data.response || '';
    } catch (error) {
      console.error('❌ Ollama API error:', error.message);
      console.warn('⚠️ Ollama not available, falling back to Cloud API...');

      // 2nd preference: Cloud API fallback
      try {
        console.log('☁️ Calling Cloud API (Cerebras) as fallback...');
        responseText = await callCloudAPI(prompt, 'You are a topic extractor. Return ONLY valid JSON arrays of strings.');
        console.log('✅ Cloud API response received');
      } catch (cloudError) {
        console.error('❌ Cloud API error:', cloudError.message);
        throw new Error('Both local Ollama and Cloud API are unavailable. Please check your connection.');
      }
    }

    // Parse the response
    try {
      let jsonStr = responseText.trim().replace(/```json\n?/g, '').replace(/```\n?/g, '');

      const startIdx = jsonStr.indexOf('[');
      const endIdx = jsonStr.lastIndexOf(']');

      if (startIdx !== -1 && endIdx !== -1) {
        jsonStr = jsonStr.substring(startIdx, endIdx + 1);
        jsonStr = jsonStr.replace(/[\n\r\t]/g, ' ');
        jsonStr = jsonStr.replace(/,\s*]/g, ']');
        jsonStr = jsonStr.replace(/,\s*}/g, '}');

        const parsed = JSON.parse(jsonStr);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map(t => String(t).trim());
        }
      }
    } catch (parseError) {
      console.error('Error parsing topics:', parseError.message);
    }

    throw new Error('Failed to parse topics from LLM. Please try again.');
  }

  async generateContent(userPrompt, systemPrompt = '') {
    const fullPrompt = systemPrompt ? `${systemPrompt}\n\n${userPrompt}` : userPrompt;

    // 1st preference: Local Ollama
    try {
      console.log('🔄 Calling Ollama API at', OLLAMA_API);
      const response = await axios.post(OLLAMA_API, {
        model: 'mistral',
        prompt: fullPrompt,
        stream: false
      });

      console.log('✅ Ollama API response received');
      return response.data.response || '';
    } catch (error) {
      console.error('❌ Ollama API error:', error.message);
      console.warn('⚠️ Ollama not available, falling back to Cloud API...');
    }

    // 2nd preference: Cloud API fallback
    try {
      console.log('☁️ Calling Cloud API (Cerebras) as fallback...');
      const cloudResponse = await callCloudAPI(userPrompt, systemPrompt);
      console.log('✅ Cloud API response received');
      return cloudResponse;
    } catch (cloudError) {
      console.error('❌ Cloud API error:', cloudError.message);
      throw new Error('Both local Ollama and Cloud API are unavailable. Please check your connection.');
    }
  }
}

export default new GeminiService();
