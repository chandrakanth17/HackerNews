const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  target: 'node',
  entry: './src/client.js',
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, '../build/public'),
    publicPath: '../build/public'
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
            'babel-preset-es2015'[
              ('env',
              {
                target: {
                  browsers: ['last 2 versions']
                }
              })
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 8192,
      minRatio: 0.8
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};
