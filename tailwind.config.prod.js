module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.scss'],
    options: {
      whitelist: ['-translate-x-full']
    }
  },
  theme: {
    extend: {
      colors: {
        mmp_primary: '#334506',
        mmp_secondary: '#751380',
        pmlo_primary: '#8F8364',
        pmlo_secondary: '#353535'
      }
    },
    customForms: () => ({
      default: {
        checkbox: {
          borderColor: 'black',
          borderWidth: '1px',
          '&:checked': {
            borderColor: 'black',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          },
          'checkbox[checked="true"]': {
            borderColor: 'black',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }
        }
      }
    })

  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus']
  },
  plugins: [require('@tailwindcss/forms')({
    strategy: 'class'
  })]
}
