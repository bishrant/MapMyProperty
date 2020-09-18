module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.scss']
  },
  theme: {
    extend: {
      colors: {
        mmp_primary: '#334506',
        mmp_secondary: '#751380'
      },
      borderWidth: {
        '1':'1px'
      },

    },
    customForms: theme => ({
      default: {
        checkbox: {

          '&:checked': {
            borderColor: 'orange',
            backgroundColor: 'red',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          },
          'checkbox[checked="true"]': {
            borderColor: 'orange',
            backgroundColor: 'red',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }
        }
      }
    })

  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [require('@tailwindcss/custom-forms'),],
}
