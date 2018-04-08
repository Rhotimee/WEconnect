const path = require('path');

module.exports = {
  entry: './client/container/index.js',
  output: {
    path: path.join(__dirname, '/client/build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],

      },
      {
        test: /\.svg|.png|.jpg$/,
        loader: 'url-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
};
