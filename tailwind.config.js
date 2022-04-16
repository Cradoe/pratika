function withOpacityValue ( variable ) {
  return ( { opacityValue } ) => {
    if ( opacityValue === undefined ) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFaimy: {
      sans: [ "montserrat" ],
    },
    extend: {
      colors: {
        primary: withOpacityValue( '--color-primary' ),
        secondary: withOpacityValue( '--color-secondary' )
      },
      screens: {
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
}
