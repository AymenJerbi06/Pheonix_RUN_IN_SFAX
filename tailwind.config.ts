import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-bg-dark": "#0F1115",
        "brand-bg-light": "#F7F5F2",
        "brand-orange": "#F26A2E",
        "brand-gold": "#D9A441",
        "brand-text-dark": "#F3F4F6",
        "brand-text-light": "#16181D",
        "brand-muted": "#6B7280",
        "brand-footer": "#0A0C10",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        flicker: "flicker 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      maxWidth: {
        "8xl": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
