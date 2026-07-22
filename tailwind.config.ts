import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Azul cerúleo real de Triple A del Norte (botones, enlaces, CTA primario)
        brand: {
          50: "#eef7fc",
          100: "#d7edf8",
          200: "#b0dbf1",
          300: "#7cc3e6",
          400: "#46a8d6",
          500: "#0986c7",
          600: "#0a7ab0",
          700: "#0f6390",
          800: "#145073",
          900: "#14415e",
          950: "#0c283c",
        },
        // Verde menta/vivo real del isotipo (acentos, iconos, estados de éxito)
        leaf: {
          50: "#f1f8ec",
          100: "#e0f0d4",
          200: "#c3e2ab",
          300: "#a0d17d",
          400: "#8fc280",
          500: "#6bb84e",
          600: "#3ca200",
          700: "#2f8200",
          800: "#276b00",
          900: "#1f5400",
        },
        // Gris azulado (tono navy del wordmark) para texto y superficies oscuras
        ink: {
          50: "#f4f5f9",
          100: "#e6e8f0",
          200: "#ccd0e0",
          300: "#a8adc7",
          400: "#7d82a3",
          500: "#5c6086",
          600: "#474b6d",
          700: "#363a56",
          800: "#262940",
          900: "#1a1c2e",
          950: "#101120",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(15, 64, 48, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
