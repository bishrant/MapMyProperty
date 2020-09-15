module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        mmp_primary: '#334506',
        mmp_secondary: '#751380'
      }
    },

  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms'),],
}
