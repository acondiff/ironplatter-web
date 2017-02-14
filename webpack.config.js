const webpack = require('webpack'),
      path = require('path'),
      distDir = path.resolve(__dirname, 'dist'),
      srcDir = path.resolve(__dirname, 'src'),
      prod = process.argv.indexOf('-p') !== -1;

const config = {
  entry: srcDir + '/index.js',
  context: path.join(__dirname),
  output: {
    path: distDir,
    filename: 'iron-platter.min.js',
    library: ['IRON_PLATTER']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: prod ? '"production"' : '"development"'
      }
    })
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['es2015', 'stage-2', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
        exclude: /node_modules/
      }
    ],
  },
  postcss: [ require('autoprefixer') ],
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    root: [
      path.resolve('./src')
    ],
  },
};
module.exports = config;
