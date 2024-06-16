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
        "custom-lg": "1300px", // 1300px 이상일 때 적용될 스타일
      },
    },
  },
  plugins: [],
};
export default config;
