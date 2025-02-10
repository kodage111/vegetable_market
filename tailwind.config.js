const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#FFF",
        primary: "#431407",
        secondary: {
          100: "#f59e0b",
          200: "#92400e",
        },
      },
    },
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1024px",
    },
    keyframes: {
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      scale: {
        "0%": { transform: "scale(0.8)" },
        "50%": { transform: "scale(1.2)" },
        "100%": { transform: "scale(0.8)" },
      },
      moveUp: {
        "50%": { transform: "translateY(-1rem)" },
      },
      "move-around": {
        '0%': { transform: 'translate(0, 0) scale(0.2)' },
        '25%': { transform: 'translate(-100%, -50%) scale(1.2)' },
        '50%': { transform: 'translate(-10%, 30%) scale(0.8)' },
        '75%': { transform: 'translate(10%, 80%) scale(1.1)' },
        '100%': { transform: 'translate(0, 0) scale(0.4)' },
      },
      "animate-in": {
        '0%': { opacity: 0.2, transform: 'scale(0.6) translate(0, -10%)' },
        '100%': { opacity: 1, transform: 'scale(1) translate(0, 0)' },
      },
      appear: {
        '0%': { opacity: 0, transform: "rotate(220deg) translate(-20%, 0)" },
        '100%': { opacity: 0.3, transform: "rotate(220deg) translate(0, 0)" },
      },
      "pop-up": {
        '0%': { opacity: 0, transform: 'translate(0, -20%)' },
        '100%': { opacity: 1, transform: 'translate(0, 0)' },
      },
      "pop-up": {
        '0%': { opacity: 0, transform: 'translate(0, 20%)' },
        '100%': { opacity: 1, transform: 'translate(0, 0)' },
      },
    },
    animation: {
      rotation: "rotate 15s linear infinite",
      scaleUp: "scale 3s linear infinite",
      "move-around": "move-around 20s infinite ease-in-out",
      "move-around": "move-around 25s infinite alternate ease-in-out",
      moveOnY: "moveUp 3s linear infinite",
      reveal: 'animate-in 1s ease-out both',
      appear: 'appear 0.5s ease-out both',
      'pop-up-popular-cards': 'pop-up 0.3s ease-in both',
      "fade-down": "fadeDown 0.5s ease-out both",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "32px",
      }
    },
    fontFamily: {
      Kalam: ["Kalam", "serif"],
      Saira: ["Saira Semi Condensed", 'serif'],
    }
  },
  plugins: [],
}

