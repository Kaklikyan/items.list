const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  devServer: {
    inline: true
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.module.svg$/,
        use: [
          'babel-loader',
          'react-svg-loader'
        ]
      },
      {
        test: (path) => path.endsWith('.svg') && !path.endsWith('.module.svg'),
        loader:
          'svg-sprite-loader?' +
          JSON.stringify({
            name: '[name]_[hash]',
            prefixize: true
          }),
        include: __dirname
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico'
    })
  ]
};