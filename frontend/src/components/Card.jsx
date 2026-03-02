import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hover = true, ...props }) => (
  <motion.div
    className={`bg-white rounded-2xl border border-border p-6 transition-all duration-200 ${hover ? 'hover:shadow-card hover:border-gray-300' : 'shadow-soft'} ${className}`}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}
    {...props}
  >
    {children}
  </motion.div>
);
