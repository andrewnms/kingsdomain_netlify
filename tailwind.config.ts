import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        cyber: {
          black: "#000000",
          red: "#FF3366",
          green: "#00FF9F",
          blue: "#0EA5E9",
          purple: "#8B5CF6",
          pink: "#D946EF",
          accent: "#FF3366",
          secondary: "#00FF9F",
          tertiary: "#0EA5E9",
        },
      },
      keyframes: {
        "glitch-1": {
          "0%, 100%": { transform: "none" },
          "41.99%": { transform: "none" },
          "42%": { transform: "skew(-2deg)" },
          "43%": { transform: "skew(3deg)" },
          "43.5%": { transform: "none" }
        },
        "section-reveal": {
          "0%": { 
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0, 255, 159, 0.2)"
          },
          "50%": {
            boxShadow: "0 0 40px rgba(0, 255, 159, 0.4)"
          }
        },
        "neon-pulse": {
          "0%, 100%": {
            textShadow: "0 0 10px rgba(255, 51, 102, 0.8)"
          },
          "50%": {
            textShadow: "0 0 20px rgba(255, 51, 102, 1)"
          }
        }
      },
      animation: {
        "glitch": "glitch-1 2.5s infinite",
        "reveal": "section-reveal 0.5s ease-out forwards",
        "glow": "pulse-glow 2s infinite",
        "neon": "neon-pulse 2s infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;