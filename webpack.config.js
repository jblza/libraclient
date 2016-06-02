var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './client/public');
var APP_DIR = path.resolve(__dirname, './client/components');

var config = {
  entry: ['./client/components/App.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        query:
        {
          presets:['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = config;