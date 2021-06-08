module.exports = {
  purge: {
    enable: true,
    content: ['./src/**/*.{js,jsx}']
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
