/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // For member dynamic theme colors (text, border, selection background)
    // Ruka
    'text-red-500', 'border-red-500', 'selection:bg-red-500', 'bg-red-500',
    // Chiquita
    'text-blue-400', 'border-blue-400', 'selection:bg-blue-400', 'bg-blue-400',
    // Asa
    'text-pink-300', 'border-pink-300', 'selection:bg-pink-300', 'bg-pink-300',
    // Rami
    'text-purple-500', 'border-purple-500', 'selection:bg-purple-500', 'bg-purple-500',
    // Ahyeon
    'text-yellow-400', 'border-yellow-400', 'selection:bg-yellow-400', 'bg-yellow-400',
    // Pharita
    'text-teal-400', 'border-teal-400', 'selection:bg-teal-400', 'bg-teal-400',
    // Rora
    'text-green-400', 'border-green-400', 'selection:bg-green-400', 'bg-green-400',
    // Fallback/General
    'text-pink-400', 'border-pink-400', 'selection:bg-pink-400', 'bg-pink-400',
    // Hover states for links (example: hover:text-red-500)
    'hover:text-red-500',
    'hover:text-blue-400',
    'hover:text-pink-300',
    'hover:text-purple-500',
    'hover:text-yellow-400',
    'hover:text-teal-400',
    'hover:text-green-400',
    'hover:text-pink-400',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'portal-pulse': 'portal-pulse 2s infinite ease-in-out',
        'portal-rotate': 'portal-rotate 20s infinite linear',
        'portal-inner-spin': 'portal-inner-spin 5s infinite linear',
        'flicker': 'flicker 10s infinite alternate',
        'stars-pulse': 'stars-pulse 15s infinite ease-in-out',
      },
      keyframes: {
        'portal-pulse': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 20px var(--tw-shadow-color, #ff6600), 0 0 30px var(--tw-shadow-color, #ffcc00), inset 0 0 15px var(--tw-shadow-color, #ff3300)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 30px var(--tw-shadow-color, #ff9933), 0 0 45px var(--tw-shadow-color, #ffff66), inset 0 0 20px var(--tw-shadow-color, #ff6633)' },
        },
        'portal-rotate': {
          '0%': { transform: 'rotateY(0deg) rotateX(5deg)' },
          '50%': { transform: 'rotateY(10deg) rotateX(-5deg)' },
          '100%': { transform: 'rotateY(0deg) rotateX(5deg)' },
        },
        'portal-inner-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'flicker': {
          '0%, 100%': { backgroundPosition: '0% 0%, -10% -10%, 10% -10%', opacity: '0.9' },
          '50%': { backgroundPosition: '0% 0%, 10% 10%, -10% 10%', opacity: '1'},
        },
        'stars-pulse': {
          '0%, 100%': { backgroundSize: '100% 100%, 100% 100%, 100% 100%', opacity: '0.9' },
          '50%': { backgroundSize: '110% 110%, 110% 110%, 105% 105%', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
