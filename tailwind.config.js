import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'bg-mood-happy',
    'bg-mood-neutral',
    'bg-mood-sad',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          DEFAULT: '#6366F1',
        },
        mood: {
          happy: '#FACC15',
          neutral: '#60A5FA',
          sad: '#9CA3AF',
        }
      }
    },
  },
  plugins: [],
};
