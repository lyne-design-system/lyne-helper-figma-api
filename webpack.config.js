const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  mode: 'production',
  output: {
    filename: 'index.js',
    // globalObject: 'this',
    library: 'lyneFigmaApi',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist')
    // umdNamedDefine: true
  },
  plugins: [new CleanWebpackPlugin()],
  target: 'web'
};
