/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx,md,mdx}',
      './docs/**/*.{md,mdx}',
      './blog/**/*.{md,mdx}',
      './docusaurus.config.js',  // Make sure this is included for Docusaurus content
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  