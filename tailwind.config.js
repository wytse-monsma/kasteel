/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#a30303',
        'secondary': '#212d40',
        'red1': '#bf0d0d'
      }
    }
  },
  plugins: []
};