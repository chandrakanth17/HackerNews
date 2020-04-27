const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '../build'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node-modules/',
        options: {
          presets: [
            'react',
            'stage-0',
            'babel-preset-es2015',
            [
              'env',
              {
                target: {
                  browsers: ['last 2 versions']
                }
              }
            ]
          ]
        }
      }
    ]
  },
  externals: [webpackNodeExternals()]
};
