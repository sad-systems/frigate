const CopyWebpackPlugin   = require('copy-webpack-plugin');  // Copy files to output folder
const webpackMerge        = require('webpack-merge');
const createWebpackConfig = require('./webpack.common');

module.exports = webpackMerge(createWebpackConfig(), {

  entry: {
    core:  './src/core/index.js',
    react: './src/react/index.js',
  },

  externals: [
    'prop-types',
    'react',
    'react-dom',
  ],

  output: {
    filename: '[name]/bundle.js', // myapp1.bundle.js | 'main.js' | ...
    library: ['Frigate', '[name]'],
    libraryTarget: 'umd',
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: './src/react/index.d.ts', to: 'react/bundle.d.ts' },
      { from: './src/react/index.d.ts', to: 'react/' },
      { from: './src/react/package.json', to: 'react/' },
      { from: './src/core/package.json', to: 'core/' },
      { from: 'README.md', to: 'core/' },
      { from: 'README.md', to: 'react/' },
      { from: 'LICENSE', to: 'core/' },
      { from: 'LICENSE', to: 'react/' },
    ]),
  ],

});
