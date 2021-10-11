// webpack.config.prod.js
const a = require('postcss-import');
const b = require('tailwindcss')('./tailwind.config.prod.js');
// const c = require('autoprefixer');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            syntax: 'postcss-scss',
            plugins: [a, b]
          }
        }
      }
    ]
  },
  node: {
    process: false,
    global: false,
    fs: 'empty'
  }
};
