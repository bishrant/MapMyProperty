module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.scss']
  },
  theme: {
    extend: {
      colors: {
        mmp_primary: '#334506',
        mmp_secondary: '#751380',
        pmlo_primary: '#8F8364',
        pmlo_secondary: '#353535'
      },
      borderWidth: {
        '1':'1px'
      },

    },
    customForms: theme => ({
      default: {
        checkbox: {
          borderColor: 'black',
          '&:checked': {
            borderColor: 'black',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          },
          'checkbox[checked="true"]': {
            borderColor: 'black',
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
