/** @type { import('webpack').Configuration } */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // bundeling mode
  mode: 'development',

  entry: './src/index.ts',

  devtool: 'source-map',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build')
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(svg|jpg|png)$/,
        use: ['url-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'List Box plugin',
      template: './public/index.html'
    })
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'build')
    },
    compress: false,
    port: 9000
  }
}