var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: [
    './app/app.jsx'
  ],
  // plugins: [
  //   new ExtractTextPlugin('styles.css'),
  //   new CompressionPlugin({
  //     asset: "[path].gz[query]",
  //     algorithm: "gzip",
  //     test: /\.js$|\.css$|\.html$/,
  //     threshold: 10240,
  //     minRatio: 0.8
  //   })
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname,'app/components/Main'),
      applicationStyles: path.resolve(__dirname, 'app/styles/app.scss'),
      reactMdlCss: 'material-design-lite/dist/material.min.css',
      Drawer: path.resolve(__dirname, 'app/components/MenuComponents/Drawer'),
      Header: path.resolve(__dirname, 'app/components/MenuComponents/Header'),
      HeaderLink: path.resolve(__dirname, 'app/components/MenuComponents/HeaderLink'),
      HeaderRowTitle: path.resolve(__dirname, 'app/components/MenuComponents/HeaderRowTitle'),
      Coyan: path.resolve(__dirname, 'app/components/Coyan'),
      StopWatch: path.resolve(__dirname, 'app/components/StopWatch'),
      CountDown: path.resolve(__dirname, 'app/components/CountDown'),
      Clock: path.resolve(__dirname, 'app/components/ClockComponents/clock'),
      jQuery: 'jQuery/tmp/jquery',
      Form: path.resolve(__dirname, 'app/components/FormComponents/Form'),
      FormInput: path.resolve(__dirname, 'app/components/FormComponents/FormInput'),



    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        loader: ExtractTextPlugin.extract({loader: ['css-loader', 'sass-loader']}),
        test:/\.s?css$/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
