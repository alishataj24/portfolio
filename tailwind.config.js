/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        bg: "#FAFAFC",
        primary: "#2563EB",
        secondary: "#4F46E5",
        accent: "#06B6D4",
        ink: "#111827",
        border: "#E5E7EB",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        blob: "blob 10s infinite",
        "blob-delay": "blob 10s 3s infinite",
        "blob-delay2": "blob 10s 6s infinite",
        shimmer: "shimmer 2s linear infinite",
        pulse2: "pulse2 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse2: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        soft: "0 2px 20px rgba(0,0,0,0.06)",
        card: "0 4px 30px rgba(0,0,0,0.08)",
        glow: "0 0 40px rgba(37,99,235,0.15)",
        "glow-accent": "0 0 40px rgba(6,182,212,0.2)",
      },
    },
  },
  plugins: [],
};
