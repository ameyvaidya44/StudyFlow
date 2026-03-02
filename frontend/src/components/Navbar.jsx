import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Button } from './Button';

export const Navbar = ({ showAuth = true }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-base font-bold text-text-primary">StudyFlow</div>
            <div className="text-xs text-text-secondary">Learn Better</div>
          </div>
        </div>

        {/* Auth Buttons */}
        {showAuth && (
          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button onClick={() => navigate('/register')}>
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
