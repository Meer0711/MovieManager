/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Make sure to include html files or other templates if relevant
    "./public/index.html",              // Include other paths if necessary
  ],
  theme: {
    extend: {}, // You can add custom configurations here if you extend the default theme
  },
  plugins: [
    require('@tailwindcss/forms'),      // Example plugin, remove or add based on your needs
    require('@tailwindcss/typography'), // Example plugin for better typography support
  ],
};


