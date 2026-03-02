export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Modern SaaS palette - Indigo/Violet based
        primary: '#6366f1',      // Indigo-500 (primary actions)
        secondary: '#8b5cf6',    // Violet-500 (secondary accents)
        success: '#10b981',      // Emerald-500
        warning: '#f59e0b',      // Amber-500
        danger: '#ef4444',       // Red-500
        muted: '#6b7280',        // Gray-500
        // Backgrounds
        bg: {
          primary: '#f9fafb',    // Gray-50
          secondary: '#ffffff'   // Pure white
        },
        text: {
          primary: '#111827',    // Gray-900
          secondary: '#6b7280'   // Gray-500
        },
        border: '#e5e7eb'        // Gray-200
      },
      backgroundColor: {
        'paper': '#f9fafb',
        'surface': '#ffffff'
      },
      borderColor: {
        'line': '#e5e7eb'
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 0 3px rgba(99, 102, 241, 0.1)',
        'glow-lg': '0 0 0 4px rgba(99, 102, 241, 0.15)'
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 250ms ease-out',
        'slide-down': 'slideDown 250ms ease-out',
        'scale-in': 'scaleIn 200ms ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem'
      }
    }
  },
  plugins: []
};
