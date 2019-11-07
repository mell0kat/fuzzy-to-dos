const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: path.join(__dirname, 'src', 'index.tsx'),

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  devServer: {
    //publicPath: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    writeToDisk: true
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'index.html')
    })
  ]
}
