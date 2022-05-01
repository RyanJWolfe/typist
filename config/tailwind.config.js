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
        'light-goldenrod-yellow': '#faf8d4',
        'almond': '#ebdccb',
        'bone': '#d7cbbb',
        'pale-silver': '#c3baaa',
        'rocket-metallic': '#91818a',
        'heliotrope-gray': '#b2a3b5',
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
