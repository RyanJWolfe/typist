const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
    './app/components/**/*'
  ],
  theme: {
    extend: {
      colors: {
        'cultured': '#eef0f2',
        'silver': '#c6c7c4',
        'spanish-gray': '#a2999e',
        'deep-taupe': '#846a6a',
        'onyx': '#353b3c',
        'davys-gray': '#474d4e',
        'primary': {
          50: '#fbfaf9',
          100: '#F4F3F3',
          200: '#F4F3F3',
          300: '#c7c7c7',
          500: '#3f3f3f',
          900: '#2e2e2e'
        },
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'inner-even': 'inset 0 0 10px rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
