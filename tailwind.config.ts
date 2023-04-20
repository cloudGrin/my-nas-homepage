import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shake_bounce: 'shake_bounce .5s alternate',
      },
      keyframes: {
        shake_bounce: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(-15deg)' },
          '75%': { transform: 'rotate(5deg)' },
          '85%': { transform: 'rotate(-5deg)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
