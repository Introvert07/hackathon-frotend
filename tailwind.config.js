// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 0.6},
          '50%': { opacity: 0.7},
        },
        flicker: {
          '0%, 100%': { opacity: 0.15 },
          '45%': { opacity: 0.25 },
          '55%': { opacity: 0.35 },
        },
      },
      animation: {
        glow: 'glow 4s ease-in-out infinite',
        flicker: 'flicker 2s infinite',
      },
      backgroundImage: {
        'hacker-grid': `linear-gradient(to right, rgba(0,255,255,0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,255,255,0.2) 1px, transparent 1px)`,
      },
      
    },
  },
  plugins: [],
}
