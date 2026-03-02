import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader } from 'lucide-react';

export const ChatInput = ({ onSendMessage, loading, disabled }) => {
  const [message, setMessage] = useState('');
  const [rows, setRows] = useState(1);
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const newRows = Math.min(Math.ceil(textareaRef.current.scrollHeight / 24), 5);
      setRows(newRows);
      textareaRef.current.style.height = `${newRows * 24}px`;
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !loading && !disabled) {
      onSendMessage(message);
      setMessage('');
      setRows(1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="border-t border-border bg-white p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex gap-3 items-end">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about your study materials..."
            disabled={loading || disabled}
            rows={rows}
            className="w-full px-4 py-3 border border-border rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none disabled:bg-gray-50 disabled:text-text-secondary text-text-primary placeholder-gray-400"
          />
          <div className="absolute bottom-3 right-3 text-xs text-gray-400">
            {message.length}/1000
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={loading || disabled || !message.trim()}
          whileHover={{ scale: loading || disabled || !message.trim() ? 1 : 1.05 }}
          whileTap={{ scale: loading || disabled || !message.trim() ? 1 : 0.95 }}
          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-sm"
        >
          {loading ? (
            <Loader className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      {disabled && (
        <motion.div
          className="mt-4 px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xl">📁</span>
          <p className="text-sm text-amber-800">Please upload some study materials first to start chatting</p>
        </motion.div>
      )}

      <p className="mt-3 text-xs text-gray-500 flex items-center gap-1.5">
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        Press Shift+Enter for new line • Ask questions about your uploaded materials
      </p>
    </motion.form>
  );
};
