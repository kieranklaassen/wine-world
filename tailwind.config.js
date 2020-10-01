module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['src/**/*.js'],
  theme: {
    extend: {
      colors: {
        vine: {
          50: '#F6F8F9',
          100: '#ECF1F3',
          200: '#D0DBE1',
          300: '#B4C5CF',
          400: '#7C9AAC',
          500: '#446E88',
          600: '#3D637A',
          700: '#294252',
          800: '#1F323D',
          900: '#142129'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
