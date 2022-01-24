const WebpackMerge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = WebpackMerge.merge(common, {
  mode: "development",
  
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true,
  },
});

