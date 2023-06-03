/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'noto': ['Noto Sans', 'sans-serif'],
      },
    },
    colors: {
      'dark-blue': '#2F80ED',
      'light-blue': '#2D9CDB',
      'dark-gray-blue': '#333333',
      'dark-gray': '#4F4F4F',
      'medium-gray': '#828282',
      'light-gray': '#F2F2F2',
      'light-green': '#27AE60',
      'dark-green': '#219653',
      'light-red': '#EB5757',
      'white': '#FFFFFF',
    }
  },
  plugins: [],
}
