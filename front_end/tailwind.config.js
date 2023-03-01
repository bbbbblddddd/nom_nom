/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nomnom: "'Bambino', 'sans-serif'",
        nomnombold: "'BambinoBold', 'sans-serif'",
        body: "'Varela Round', 'sans-serif'"
      },
      animatedSettings: {
        animatedSpeed: 1200,
        animationDelaySpeed: 500
      },
      backgroundImage: {
        food_background: "url('../src/assets/food_background.jpg')"
      }
    }
  },
  plugins: [require('tailwindcss-animatecss')]
};
