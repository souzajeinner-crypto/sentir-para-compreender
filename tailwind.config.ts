import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#050919", 900: "#0B0E24", 800: "#111428",
          700: "#1a1d3a", 600: "#252850", 500: "#3d3566",
          400: "#564d80", 300: "#7a71a3", 200: "#a59ec7",
          100: "#d4d0e8", 50: "#edeaf5",
        },
        violet: {
          950: "#1e0a3e", 900: "#2e1065", 800: "#3b0f85",
          700: "#5b21b6", 600: "#6D39FF", 500: "#8B5CFF",
          400: "#a78bfa", 300: "#c4b5fd", 200: "#ddd6fe",
          100: "#ede9fe", 50: "#f5f3ff",
        },
        amber: { 600: "#d97706", 500: "#F5B84E", 400: "#fbbf24", 300: "#fcd34d" },
        rose: { 500: "#E35CC7", 400: "#f0a0d8" },
        cyan: { 500: "#06b6d4", 400: "#73B8FF", 300: "#67e8f9" },
        emerald: { 500: "#10b981", 400: "#34d399" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.75rem", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-lg": ["2rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["1.125rem", { lineHeight: "1.25" }],
        "body-lg": ["1rem", { lineHeight: "1.75" }],
        body: ["0.875rem", { lineHeight: "1.7" }],
        ui: ["0.9375rem", { lineHeight: "1.2" }],
        caption: ["0.8125rem", { lineHeight: "1.3" }],
        "hero": ["3rem", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "heading-xl": ["2.5rem", { lineHeight: "1.1" }],
        "heading-lg": ["2rem", { lineHeight: "1.15" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.3" }],
      },
      spacing: {
        section: "5rem",
        "section-sm": "3rem",
      },
      maxWidth: {
        content: "880px",
        wide: "1200px",
      },
      borderRadius: {
        card: "16px",
        banner: "20px",
      },
      boxShadow: {
        glow: "0 8px 24px rgba(82,38,209,0.35)",
        "glow-lg": "0 12px 32px rgba(82,38,209,0.45)",
        card: "0 10px 30px rgba(5,8,25,0.30)",
        "card-hover": "0 16px 40px rgba(21,12,70,0.32)",
      },
      backdropBlur: {
        glass: "16px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-card": "linear-gradient(180deg, rgba(17,20,43,0.72) 0%, rgba(9,11,31,0.58) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        fadeInUp: { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        pulseGlow: { "0%, 100%": { opacity: "0.4" }, "50%": { opacity: "0.7" } },
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
      },
    },
  },
  plugins: [],
};

export default config;
