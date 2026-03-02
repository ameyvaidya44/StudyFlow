import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Flame, BookOpen, TrendingUp } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import client from '../api/client';
import { useAuthStore } from '../store/authStore';

export const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  const [performance, setPerformance] = useState(null);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [perfRes, contentsRes] = await Promise.all([
          client.get('/analytics/performance'),
          client.get('/content')
        ]);
        setPerformance(perfRes.data.data);
        setContents(contentsRes.data.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8 shadow-card">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}! 👋</h1>
        <p className="text-indigo-100">Keep learning and growing every day</p>
      </div>

      {/* Stats Grid - Modern Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'XP Points', value: performance?.user?.xp || 0, icon: Zap, color: 'from-amber-500 to-orange-500' },
          { label: 'Study Streak', value: performance?.user?.streak || 0, icon: Flame, color: 'from-red-500 to-pink-500' },
          { label: 'Quizzes Taken', value: performance?.user?.totalQuizzesTaken || 0, icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
          { label: 'Avg Accuracy', value: `${Math.round(performance?.user?.averageAccuracy || 0)}%`, icon: TrendingUp, color: 'from-green-500 to-emerald-500' }
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            className="bg-white border border-border rounded-2xl p-6 hover:shadow-card transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-sm`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-text-primary">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Materials */}
      <div>
        <h2 className="text-xl font-bold text-text-primary mb-4">Recent Materials</h2>
        {contents.length > 0 ? (
          <div className="space-y-3">
            {contents.slice(0, 6).map((content, idx) => (
              <motion.div 
                key={content._id} 
                className="bg-white border border-border rounded-2xl p-5 hover:shadow-card hover:border-gray-300 transition-all duration-200 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors">{content.title}</h3>
                    <p className="text-sm text-text-secondary mt-1">
                      {content.topics?.slice(0, 3).join(', ') || 'Processing...'}
                    </p>
                  </div>
                  <Button variant="secondary" className="text-sm">
                    Start Quiz
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-text-primary font-medium mb-1">No materials yet</p>
            <p className="text-sm text-text-secondary">Upload content to get started with your learning journey</p>
          </div>
        )}
      </div>
    </div>
  );
};
