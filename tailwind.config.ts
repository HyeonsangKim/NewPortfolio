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
        customBack:
          "linear-gradient(#1a1a1a, #1a1a1a), radial-gradient(circle at top left, #51a2e9, #ff4d5a)",
      },
      colors: {
        backCol: "#1a1a1a",
        customRed: "#ff4d5a",
        headerCol: "#282828F2",
      },
      screens: {
        "custom-lg": "1300px",
      },
      keyframes: {
        zoomInFade: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideUpFade: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        underlineGrow: {
          "0%": { width: "0", opacity: "0" },
          "100%": { width: "calc(100%)", opacity: "1" },
        },
      },

      animation: {
        zoomInFade: "zoomInFade 0.8s ease-out forwards",
        slideUpFade: "slideUpFade 0.8s ease-out forwards 0.4s",
        "underline-grow": "underlineGrow 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
