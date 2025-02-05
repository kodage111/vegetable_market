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
      sm: "640px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
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
      }
    },
    animation: {
      rotation: "rotate 15s linear infinite",
      scaleUp: "scale 3s linear infinite",
      "move-around": "move-around 20s infinite ease-in-out",
      "move-around": "move-around 25s infinite alternate ease-in-out",
      moveOnY: "moveUp 3s linear infinite"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "32px",
      }
    },
    fontFamily: {
      Condiment: ["Kalam", "serif"],
      Saira: ["Saira Semi Condensed", 'serif'],
    }
  },
  plugins: [],
}

