// webpack.config.dev.js
const a = require('postcss-import');
const b = require('tailwindcss')('./tailwind.config.js');

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
          },
          sourceMap: false
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
