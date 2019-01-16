const path = require('path')

const baseConfig = {
    entry: {
      main: './src/app.js'
    },
    output: {
        path: path.join(__dirname, 'public/scripts'),
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
      ],
  },
  mode: "development",
  devtool: 'cheap-module-eval-source-map'
}

  module.exports = baseConfig