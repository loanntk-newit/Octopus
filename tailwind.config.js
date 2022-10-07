/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: {
          500: "#0055A4",
          600: "#002B6B",
        },
        title: "#23EFE0",
        bg: "#071737",
      },
      backgroundImage: {
        "gradient-header":
          "radial-gradient(50% 50% at 50% 50%, #55697b 0%, #071737 100%)",
        "gradient-btn":
          "linear-gradient(180deg, #0587FF 0%, #0587FF 0.01%, #16C0EE 54.63%, #23EFE0 100%)",
        "gradient-btn-hover":
          "linear-gradient(0deg, #0587FF 0%, #0587FF 0.01%, #16C0EE 54.63%, #23EFE0 100%)",
        "gradient-img":
          "radial-gradient(50% 50% at 50% 50%, #062D50 0%, #071737 100%)",
        "gradient-roadmap":
          "linear-gradient(180deg, #0587FF 32.39%, #23EFE0 100%)",
      },
      animation: {
        "to-bottom": "toBottom 1s linear",
      },
      keyframes: {
        toBottom: {
          "0%": { transform: "translateY(-25%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
