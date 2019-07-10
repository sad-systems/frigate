const path               = require('path');
const UglifyJsPlugin     = require('uglifyjs-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin'); // Clears (removes) the given folders
// const CopyWebpackPlugin  = require('copy-webpack-plugin');  // Copy files to output folder
// const HtmlWebpackPlugin  = require('html-webpack-plugin');  // Creates default page (index.html)

/**
 * Function to return webpack.config
 *
 * @param {Object} props An object of {
 *                          contentBase: "./dist", // <--- The build dir
 *                       }
 *
 * @return {Object} webpack.config
 */
module.exports = (props) => {
  const {
    contentBase = './dist',
  } = props || {};

  // const plugins = indexPage ? [new CopyWebpackPlugin([{ from: indexPage, to: '' }])] : [];

  return {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    optimization: process.env.NODE_ENV === 'production'
      ? { minimizer: [new UglifyJsPlugin({ /* extractComments: true, */ uglifyOptions: { output: { comments: /^$/ } } })] }
      : {},

    devtool: 'inline-source-map',

    devServer: {
      contentBase,
      port: 5000,
    },

    output: {
      filename: '[name].js',   // myapp1.bundle.js | 'main.js' | ...
      path:     path.resolve(__dirname, contentBase),
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader',   // translates CSS into CommonJS
            'sass-loader',  // compiles Sass to CSS, using Node Sass by default
          ],
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            'less-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },

    resolve: {
      extensions: ['.jsx', '.tsx', '.ts', '.js'],
    },
  };
};
