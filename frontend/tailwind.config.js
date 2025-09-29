/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
        // Based on the provided logo
        'primary-green': '#21613c', // A primary green from the logo
        'secondary-green': '#b0d38a', // A lighter, accent green
        'earthy-brown': '#915b2c', // The warm brown from the logo
        'primary-brown': '#69301aff',
        'secondary-brown': '#b48a66ff',
        'light-green': '#e6f0e8', // A very light, calm green for backgrounds
        'dark-charcoal': '#333333', // For text and headings
        'primary-skin':'#eeead0',
        'primary-white':'#fcfef8',
      },
      },
    },
    plugins: [],
  };
  