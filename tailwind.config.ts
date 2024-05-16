import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
    darkMode: "class",
    content: [
        './src/**/*.vue',
        './index.html',
    ],
    extend: {
      fontFamily: {
          sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        orange: {
          100: "#fde1d7",
          200: "#fac3b0",
          300: "#f8a688",
          400: "#f58861",
          500: "#f36a39", // основной цвет энергосбыта
          600: "#c2552e",
          700: "#924022",
          800: "#612a17",
          900: "#31150b"
        },
      },
    },
    plugins: [],
};
