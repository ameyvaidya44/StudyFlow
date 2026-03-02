import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  loading = false,
  ...props 
}) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-indigo-600 shadow-sm hover:shadow-md active:scale-[0.98]',
    secondary: 'bg-white text-text-primary border border-border hover:bg-gray-50 shadow-sm hover:shadow-md active:scale-[0.98]',
    tertiary: 'bg-transparent text-text-primary hover:bg-gray-100 active:scale-[0.98]',
    ghost: 'bg-transparent text-text-primary hover:bg-gray-100 active:scale-[0.98]'
  };

  return (
    <motion.button
      className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${variants[variant]} ${className} ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
      whileHover={{ scale: loading ? 1 : 1.02 }}
      whileTap={{ scale: loading ? 1 : 0.98 }}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </span>
      ) : children}
    </motion.button>
  );
};
