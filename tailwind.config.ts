import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171018",
        ruby: "#C4143A",
        royal: "#1E5BFF",
        blush: "#FF4F9A",
        gold: "#D7A83F",
        porcelain: "#FFF9F8"
      },
      boxShadow: {
        glow: "0 24px 70px rgba(196, 20, 58, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
