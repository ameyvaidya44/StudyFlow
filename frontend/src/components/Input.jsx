export const Input = ({ label, error, className = '', ...props }) => (
  <div className="mb-4">
    {label && <label className="block text-sm font-medium text-text-primary mb-2">{label}</label>}
    <input 
      className={`w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 placeholder-gray-400 text-text-primary outline-none ${error ? 'border-danger focus:border-danger focus:ring-danger/10' : ''} ${className}`}
      {...props} 
    />
    {error && (
      <p className="text-danger text-sm mt-2 flex items-center gap-1.5">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
        {error}
      </p>
    )}
  </div>
);
