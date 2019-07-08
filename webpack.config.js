const createWebpackConfig = require('./webpack.common');

module.exports = createWebpackConfig({
  entryName: 'mylib',
});
