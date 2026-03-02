import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, Upload, Sparkles, Brain, BarChart3, Lightbulb, Target, Rocket, TrendingUp, Check
} from 'lucide-react';
import { Button } from '../components/Button';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-text-primary">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-sm">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-base font-bold text-text-primary">StudyFlow</div>
              <div className="text-xs text-text-secondary">Learn Better</div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button onClick={() => navigate('/register')}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Learning Platform</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
                Study smarter with <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI-powered</span> learning
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Upload your materials, generate quizzes, and track progress with intelligent analytics. A focused learning tool for serious students.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => navigate('/register')} className="text-base px-6 py-3">
                  Get Started Free
                </Button>
                <Button variant="secondary" onClick={() => navigate('/login')} className="text-base px-6 py-3">
                  Sign In
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Core Features</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">Everything you need to accelerate your learning journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Upload,
                title: 'Upload Materials',
                desc: 'PDF, Word, Text, or URLs. Supports all common formats.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Sparkles,
                title: 'AI-Generated Quizzes',
                desc: 'Automatically create quizzes from your materials.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Brain,
                title: 'Adaptive Learning',
                desc: 'Focus on weak areas with intelligent question selection.',
                color: 'from-amber-500 to-orange-500'
              },
              {
                icon: BarChart3,
                title: 'Track Progress',
                desc: 'Detailed analytics and performance insights.',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-border rounded-2xl p-8 hover:shadow-card hover:border-gray-300 transition-all duration-200 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">How It Works</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">Get started in four simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Upload', desc: 'Share your study materials', icon: Upload, color: 'from-blue-500 to-cyan-500' },
              { step: '2', title: 'Analyze', desc: 'AI extracts key topics', icon: Brain, color: 'from-purple-500 to-pink-500' },
              { step: '3', title: 'Quiz', desc: 'Answer AI questions', icon: Sparkles, color: 'from-amber-500 to-orange-500' },
              { step: '4', title: 'Improve', desc: 'View analytics & progress', icon: TrendingUp, color: 'from-green-500 to-emerald-500' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white border border-border rounded-2xl p-6 text-center hover:shadow-card transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-primary mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Why StudyFlow?</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">Built for students who want to learn efficiently</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Lightbulb, title: 'Smart Analysis', desc: 'AI automatically extracts key topics and concepts', color: 'from-amber-500 to-yellow-500' },
              { icon: Target, title: 'Personalized Path', desc: 'Adaptive quizzes focus on your weak areas', color: 'from-red-500 to-pink-500' },
              { icon: Rocket, title: 'Fast Generation', desc: 'Get AI-generated quizzes in seconds', color: 'from-blue-500 to-indigo-500' },
              { icon: TrendingUp, title: 'Detailed Analytics', desc: 'Track progress and measure improvement', color: 'from-green-500 to-teal-500' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white border border-border rounded-2xl p-8 hover:shadow-card hover:border-gray-300 transition-all duration-200 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Join students mastering their subjects with StudyFlow's AI-powered learning
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={() => navigate('/register')} className="bg-white text-primary hover:bg-gray-100 text-base px-8 py-3 shadow-lg">
                Get Started Free
              </Button>
              <Button variant="ghost" onClick={() => navigate('/login')} className="border-2 border-white text-white hover:bg-white/10 text-base px-8 py-3">
                Sign In
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">Product</h3>
              <ul className="space-y-3 text-text-secondary">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-text-secondary">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">Resources</h3>
              <ul className="space-y-3 text-text-secondary">
                <li><a href="#" className="hover:text-primary transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-text-primary mb-4 text-lg">Legal</h3>
              <ul className="space-y-3 text-text-secondary">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-text-primary">StudyFlow</span>
            </div>
            <p className="text-text-secondary text-sm">&copy; 2026 StudyFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
