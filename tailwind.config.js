// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  fontFamily: {
    sans: ["Poetsen One", "sans-serif"],
  },
  extend: {
    colors: {
      // Aseguramos que están definidos explícitamente los colores
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },
    },
    keyframes: {
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(30px, -50px) scale(1.1)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
        },
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      scaleIn: {
        from: { transform: "scale(0.95)", opacity: 0 },
        to: { transform: "scale(1)", opacity: 1 },
      },
    },
    animation: {
      blob: "blob 7s infinite",
      fadeIn: "fadeIn 0.5s ease-in-out",
      scaleIn: "scaleIn 0.3s ease-in-out",
    },
  },

  plugins: [],
};
