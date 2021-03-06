const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BomPlugin = require('webpack-utf8-bom');
const { checkMODE, checkCONFIG } = require('./utils');

const mode = process.env.MODE;
const config = process.env.CONFIG;
checkMODE(mode);
checkCONFIG(config);

const devtool = mode === 'development' ? 'eval-source-map': undefined;

module.exports = {
  mode,
  devtool,
  devServer: {
    contentBase: './build',
    compress: true,
    port: 9000,
  },
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new BomPlugin(true),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      // Here it creates webpack.env.CONFIG from the env var CONFIG 
      "webpack.env.CONFIG": JSON.stringify(process.env.CONFIG)
  }),
  ],
};