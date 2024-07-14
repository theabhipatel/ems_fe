/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        // Light Mode Colors
        light: {
          background: "#FFFFFF",
          textPrimary: "#2D2D2D",
          textSecondary: "#5C5C5C",
          border: "#E4E4E4",
          accentPrimary: "#4169E1",
          accentSecondary: "#20C997",
          error: "#E57373",
          success: "#81C784",
          warning: "#FFB74D",
          info: "#64B5F6",
        },
        // Dark Mode Colors
        dark: {
          background: "#121212", // "#1D2225"
          textPrimary: "#E0E0E0",
          textSecondary: "#A0A0A0",
          border: "#333333",
          accentPrimary: "#4169E1",
          accentSecondary: "#03DAC6",
          error: "#E57373",
          success: "#81C784",
          warning: "#FFB74D",
          info: "#64B5F6",
        },
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};
