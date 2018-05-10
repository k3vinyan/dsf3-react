const path = require('path');

const config = {
  mode: 'development',
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, "src")
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
    ]
  }
}

module.exports = config;
