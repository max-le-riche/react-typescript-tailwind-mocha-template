const WebpackMerge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = WebpackMerge.merge(common, {
  mode: "production",
});

