var common = require('./webpack.common');

module.exports = common.extend({}, common.config, {
  mode: 'development',
  devtool: 'inline-source-map'
});