/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#589BFF',
          accent: '#D8EE53',
          dark: '#131313',
          bg: '#F4F6FB',
          subtext: '#4B5563',
          'ink-soft': '#1F2937',
          surface: '#FBFCFF',
          'surface-strong': '#F0F4FA',
        },
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Urbanist', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up-sm': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'modal-in': {
          '0%': { opacity: '0', transform: 'translateY(24px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'hero-in': {
          '0%': { opacity: '0', transform: 'translateY(24px) scale(0.97) rotate(-1.5deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1) rotate(0deg)' },
        },
        'soft-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.45)', opacity: '0.6' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-up-sm': 'fade-up-sm 0.45s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.3s ease-out both',
        'modal-in': 'modal-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
        'hero-in': 'hero-in 0.65s cubic-bezier(0.22, 1, 0.36, 1) both',
        'soft-pulse': 'soft-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
