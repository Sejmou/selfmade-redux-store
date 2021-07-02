module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'app.js',
    path: __dirname + '/dist/',
  },
  devServer: {
    port: 5500,
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
};
