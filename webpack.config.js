const path = require('path');
const env = process.env.NODE_ENV
const entry = require('webpack-glob-entry');

module.exports = {
  mode: env || 'development',
  entry: entry("./src/js/*.js"),
  output: {
    path: path.resolve(__dirname,  './public/js/'),
    filename: '[name].js',
  },
  // 拡張子が.jsのファイルはbabel-loaderを通してビルド(node_modulesは除外)
  module: {
    rules: [
      // babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}

