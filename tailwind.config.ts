import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOut: { "0%": { opacity: "1" }, "100%": { opacity: "0" } },
        scaleIn: {
          "0%": { transform: "scale(0.96)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-out": "fadeOut 600ms ease-out forwards",
        "scale-in": "scaleIn 500ms ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;