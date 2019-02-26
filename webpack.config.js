const path = require('path');
const pkg = require('./package.json');
const name = path.basename(pkg.main, path.extname(pkg.main));

module.exports = [{
  mode: process.env.NODE_ENV || 'development',
  context: path.resolve(__dirname),
  entry:  [
    `./${name}.js`,
    //`./${name}.css`
  ],
  output: {
    filename: path.basename(pkg.main),
    auxiliaryComment: pkg.name
  },
  module: {
    rules: [{
      test: /\.js$/,
      // exclude: /(node_modules|bower_components)\/jquery/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env', {}
            ]
          ],
          plugins: [
            "@babel/plugin-transform-spread"
          ]
        }
      }
    }, {
      test: /\.css$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "[name].css",
          emitFile: true
        }
      }, {
        loader: 'extract-loader'
      }, {
        loader: 'css-loader'
      }]
    }]
  }
}];
