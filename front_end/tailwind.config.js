/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: "'Rampart One', 'sans-serif'",
        body: "'Varela Round', 'sans-serif'"
      },
      animatedSettings: {
        animatedSpeed: 1200,
        animationDelaySpeed: 500
      },
      backgroundImage: {
        chefHat: "url('./src/assets/chef-hat-svgrepo-com.png')"
      }
    }
  },
  plugins: [require('tailwindcss-animatecss')]
};
