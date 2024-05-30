const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    globalObject: 'this',
    library: {
      name: 'jhuwds',
      type: 'umd',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  }
};
