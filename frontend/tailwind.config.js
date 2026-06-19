/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        void: '#030303',
        orbit: '#0c0a09',
        ion: '#f5d38a',
        plasma: '#a78bfa',
        signal: '#34d399',
        solar: '#f59e0b'
      },
      boxShadow: {
        glow: '0 0 32px rgba(245, 211, 138, 0.12)',
        panel: '0 12px 40px rgba(0, 0, 0, 0.2)'
      },
      animation: {
        stars: 'stars 90s linear infinite',
        grid: 'gridShift 18s linear infinite',
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.2s ease-in-out infinite'
      },
      keyframes: {
        stars: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-220px, 180px, 0)' }
        },
        gridShift: {
          '0%': { backgroundPosition: '0 0, 0 0' },
          '100%': { backgroundPosition: '120px 120px, -120px -120px' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(245, 211, 138, 0.16)' },
          '50%': { boxShadow: '0 0 44px rgba(168, 85, 247, 0.26)' }
        }
      }
    }
  },
  plugins: []
}
