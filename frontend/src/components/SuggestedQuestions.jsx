import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight } from 'lucide-react';

export const SuggestedQuestions = ({ questions, onQuestionClick, loading }) => {
  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <motion.div
      className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 mb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-amber-500 rounded-xl flex items-center justify-center">
          <Lightbulb className="w-4 h-4 text-white" />
        </div>
        <h3 className="font-semibold text-text-primary">Suggested Questions</h3>
      </div>

      <div className="space-y-2">
        {questions.map((question, idx) => (
          <motion.button
            key={idx}
            onClick={() => onQuestionClick(question)}
            disabled={loading}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="w-full text-left px-4 py-3 bg-white border border-amber-200 rounded-xl hover:border-amber-400 hover:shadow-soft transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-primary group-hover:text-amber-700 transition-colors pr-2">
                {question}
              </p>
              <ArrowRight className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
