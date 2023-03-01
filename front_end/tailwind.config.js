/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: "'Rampart One', 'sans-serif'",
        body: "'Varela Round', 'sans-serif'",
        nomnom: "'Bambino', 'sans-serif'"
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
