import type { Config } from "tailwindcss";

// Brand colours — keep in sync with lib/site.ts `colors`
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: { DEFAULT: "#1F4D47", deep: "#163833", ink: "#10292560" },
        amber: { DEFAULT: "#F2A33A", deep: "#D98A1F", soft: "#FCE7C6" },
        cream: { DEFAULT: "#FAF6EF", dark: "#F1EADD" },
        slate: { DEFAULT: "#4B5563" },
        ink: "#14211F",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: { card: "12px" },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(20,33,31,0.25)",
        lift: "0 18px 40px -14px rgba(20,33,31,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
