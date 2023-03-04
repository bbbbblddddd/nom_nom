/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nomnom: "'Bambino', 'sans-serif'",
        nomnombold: "'BambinoBold', 'sans-serif'",
        nunito: "'Nunito', 'sans-serif'",
        nexaregular: "'NexaSlabRegular', 'sans-serif'",
        nexalight: "'NexaSlabLight', 'sans-serif'",
        nexabook: "'NexaSlabBook', 'sans-serif'",
        nexabold: "'NexaSlabBold', 'sans-serif'",
        nexaxbold: "'NexaSlabXBold', 'sans-serif'"
      },
      animatedSettings: {
        animatedSpeed: 1200,
        animationDelaySpeed: 500,
        DelaySpeed: 3000,
        classes: ['bounceIn', 'speedInLeft']
      },
      backgroundImage: {
        food_background: "url('../src/assets/food_background2.png')",
        food_background2: "url('../src/assets/food_background3.png')"
      }
    }
  },
  plugins: [require('tailwindcss-animatecss')]
};
