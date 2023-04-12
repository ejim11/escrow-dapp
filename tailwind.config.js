/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      "color-dark-blue": "#06283D",
      "color-dark-blue-2": "#144272",
      "color-light-blue": "#1363DF",
      "color-bg-transparent": "rgba(20, 66, 114, 0.11)",
      "color-border": "#BDBDBD",
      "color-red": "rgb(220 38 38)",
      "color-white": "#fff",
      "color-btn": "#2F80ED",
      "color-black": "#222",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }
      md: { max: "850px" },
      // => @media (max-width: 850px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        app: "url('./assets/Colored Shapes.svg')",
      },
    },
  },
  plugins: [],
};
