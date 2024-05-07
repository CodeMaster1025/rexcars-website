import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue-primary": "#1dbfe9",
        "blue-secondary": "#446DF6",
      },
      animation: {
        fadeIn: 'fadeIn 500ms ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
    // colors: {
    //   "primary": "#1dbfe9",
    //   "secondary": "#36A8E9",
    //   "action": "#638EDD",
    //   "active": "#4986f6"
    // }
  },
  plugins: [],
};
export default config;
