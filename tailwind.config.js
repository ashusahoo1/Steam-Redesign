/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customMotiveBold: ['MotivaSansBold', 'sans'], 
        customMotiveThin: ['MotivaSansThin', 'sans'], 
        customMotiveMedium: ['MotivaSansMedium', 'sans'], 
        customBatmanAlternate: ['BatmanAlternate','sans']
      },
      objectPosition: {
        'custom-EldenRing': '69% 10%',
      }
    },
  },
  plugins: [],
}

