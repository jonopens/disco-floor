const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
  })
]

module.exports = {
  plugins,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                { "useBuiltIns": "entry" },
              ],
                "@babel/react"
            ],
          },
        },
      },
      {
        test: /\.html$/,
        use: "html-loader"
      }, 
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  }
};