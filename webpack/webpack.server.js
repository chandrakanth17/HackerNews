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
        exclude: '/(node_modules|bower_components)/',
        options: {
          presets: [
            'react',
            'stage-0',
            [
              'env',
              {
                target: {
                  browsers: ['last 5 versions']
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
