/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { sm: "600px", md: "728px", lg: "984px", xl: "1240px" },
    },
    extend: {
      /* ========= Colors bound to CSS variables (alpha-aware) ========= */
      colors: {
        brand: {
          50: "rgb(var(--brand-50) / <alpha-value>)",
          100: "rgb(var(--brand-100) / <alpha-value>)",
          200: "rgb(var(--brand-200) / <alpha-value>)",
          300: "rgb(var(--brand-300) / <alpha-value>)",
          400: "rgb(var(--brand-400) / <alpha-value>)",
          500: "rgb(var(--brand-500) / <alpha-value>)",
          600: "rgb(var(--brand-600) / <alpha-value>)",
          700: "rgb(var(--brand-700) / <alpha-value>)",
          800: "rgb(var(--brand-800) / <alpha-value>)",
          900: "rgb(var(--brand-900) / <alpha-value>)",
        },
        surface: {
          app: "rgb(var(--bg-app) / <alpha-value>)",
          elevated: "rgb(var(--bg-elevated) / <alpha-value>)",
          card: "rgb(var(--bg-card) / <alpha-value>)",
        },
        ink: {
          1: "rgb(var(--ink-1) / <alpha-value>)",
          2: "rgb(var(--ink-2) / <alpha-value>)",
          3: "rgb(var(--ink-3) / <alpha-value>)",
        },
      },

      /* ========= Shadows (optional helpers for your red glow) ========= */
      boxShadow: {
        "brand-weak": "0 0 12px rgba(255,0,0,0.25)",
        "brand-strong": "0 0 20px rgba(255,0,0,0.45)",
        "brand-duo": "0 0 15px rgba(255,0,0,0.35), 0 0 30px rgba(255,0,0,0.25)",
      },

      /* ========= Your keyframes (kept) ========= */
      keyframes: {
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pop: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "zoom-slow": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "fade-down": "fade-down 1s ease-out forwards",
        "fade-up": "fade-up 1s ease-out forwards",
        pop: "pop 0.8s ease-out forwards",
        "zoom-slow": "zoom-slow 20s ease-in-out infinite alternate",
      },
    },
  },

  plugins: [
    // Utilities like: animation-delay-150, -200, -300, -500, -700, -1000, -1200
    function ({ addUtilities, e }) {
      const delays = [150, 200, 300, 500, 700, 1000, 1200];
      addUtilities(
        Object.fromEntries(
          delays.map((d) => [
            `.${e(`animation-delay-${d}`)}`,
            { "animation-delay": `${d}ms` },
          ])
        ),
        ["responsive"]
      );
    },
  ],
};
