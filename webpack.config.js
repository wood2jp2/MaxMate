const path = require('path')
const resolve = path.resolve

const baseConfig = {
    entry: {
      main: './src/app.js'
    },
    output: {
        path: resolve('public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                query:
                {
                  presets:['react']
                }
            },
            {
                test: /\.s?css$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            }
      ],
  },
  mode: "development",
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
}

  module.exports = baseConfig