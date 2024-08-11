/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all files in src directory with these extensions
    "./public/index.html",         // If you use classes in your index.html
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


