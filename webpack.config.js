// const webpack = require('webpack');

// module.exports = {
//   entry: {
//     filename: './src/app.js',
//   },
//   output: {
//     filename: './build.js',
//   },
//   module: {
//     loaders: [{
//       test: /\.js$/,
//       exclude: /node_modules/,
//       loader: 'babel-loader',
//       query: {
//         presets: [['env', { modules: false }]],
//       },
//     }],
//   },
// };

const nodeEnv = process.env.NODE_ENV || 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const TerserPlugin = require('terser-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // devtool: 'source-map',
  // mode: 'development',
  entry: './src/app.js',
  output: {
    filename: './bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/ },
    ],
  },
  optimization: {
    // minimize: true,
    // minimizer: [new TerserPlugin()],
    // minimizer: [
    //   new TerserPlugin({
    //     minify: (file, sourceMap) => {
    //       const extractedComments = [];

    //       // Custom logic for extract comments

    //       const { error, map, code, warnings } = require('uglify-module') // Or require('./path/to/uglify-module')
    //         .minify(file, {
    //           /* Your options for minification */
    //         });

    //       return { error, map, code, warnings, extractedComments };
    //     },
    //   }),
    // ],
    // minimizer: [new UglifyJsPlugin({
    //   test: /\.js(\?.*)?$/i,
    // })],
    minimizer: [new UglifyWebpackPlugin({ sourceMap: true })],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new webpack.DefinePuglin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
  ],
};
