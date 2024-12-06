/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ['./src/**/*.{html,js,jsx,ts,tsx}'],
  ],
  theme: {

    colors:{
      "green-900": "#b9ff66",
      "green-800": "#7ee600",
      "green-700": "#2a4d00 ",
      "dark-900": "#191a23",
    },
   

    extend: {},
  },
  plugins: [],
}

