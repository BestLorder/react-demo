const path = require('path')
// const webpack = require('webpack')
// const nodeExternals = require('webpack-node-externals')
const webpackConfigBase = require('./webpack.base.config')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
process.env.BABEL_ENV = 'production'
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

const webpackConfigProd = {
  mode: 'production',

  entry: {
    app: [resolve('../src/packages/index.js')],
  },

  output: {
    filename: 'change-button.js',
    path: resolve('../lib'),
    libraryTarget: 'umd',
  },

  devtool: 'source-map', //或使用'cheap-module-source-map'、'none'
  optimization: {
    minimizer: [
      // 压缩js代码
      new TerserJSPlugin({
        // 多进程压缩
        parallel: 4, // 开启多进程压缩
        terserOptions: {
          compress: {
            drop_console: true, // 删除所有的 `console` 语句
          },
        },
      }),
      //压缩css代码
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  // externals: {
  //   react: {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     amd: 'react',
  //     root: 'React',
  //   },
  //   'react-dom': {
  //     commonjs: 'react-dom',
  //     commonjs2: 'react-dom',
  //     amd: 'react-dom',
  //     root: 'ReactDOM',
  //   },
  // },
  //   externals: [nodeExternals()],

  //   plugins: [
  //     new CleanWebpackPlugin(), //每次执行都将清空一下./dist目录
  //   ],
}
module.exports = merge(webpackConfigBase, webpackConfigProd)
