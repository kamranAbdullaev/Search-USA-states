const path = require('path');
const HTMLplugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'K[chunkhash].js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    port: 1234
  },
  plugins: [
    new HTMLplugin(
      {
        template: './src/index.html'
      }
    ),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
};