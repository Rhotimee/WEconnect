const path = require('path');

module.exports = {
  entry: './client/container/index.js',
  output: {
    path: path.resolve(__dirname, 'client/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /build/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],

      },
      {
        test: /\.svg|.png|.jpg$/,
        loader: 'url-loader',
        exclude: /node_modules/
      },
    ],
  },
  devServer: {
    contentBase: `${__dirname}/client`,
    historyApiFallback: true
  }
};