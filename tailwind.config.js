/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mega: ["mega"],
        space: ["space-regular"],
      },
      colors: {
        "primary-sky": "rgb(49, 197, 255)",
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(to top right, #0081a7, #00afb9)',
        'gradient-2': 'linear-gradient(to bottom right, #00afb9, #fed9b7)',
        'gradient-3': 'linear-gradient(to bottom left, #fed9b7, #f07167)',
        'gradient-4': `linear-gradient(
  to bottom right,
  #0081a7,
  #00afb9,
  #7fd3cc,
  #fed9b7,
  #f89a8c,
  #f07167
);`,
'gradient-5': 'linear-gradient(to bottom right, #00afb9, #f07167)',


      },
      animationDelay: {
        '0': '0s',
        "300": "300ms",
        "600": "600ms",
        "900": "900ms",
        "1200": "1200ms",
        "1500": "1500ms",

      }

    },
  },
  plugins: [],
};
