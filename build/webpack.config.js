/**
 * webpack 配置文件
 */

'use strict';

import path from 'path';
import webpack from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

/**
  开发路径、线上路径
 **/

const rootPath = path.join(__dirname);
const devPath = path.join(rootPath, '..', 'src');
const distPath = path.join(rootPath, '..', 'dist');

/**
  别名
 **/
const alias = Object.assign({}, {
	// 组件
	'components': path.join(devPath, 'components'),

  // action
  'action': path.join(devPath, 'action'),

  // reducers
  'reducers': path.join(devPath, 'reducers'),

	// store
	'store': path.join(devPath, 'store'),

	// styles
	'styles': path.join(devPath, 'statics/styles'),

	// scripts
	'scripts': path.join(devPath, 'statics/scripts')
});

export default {
  // 入口文件目录
  context: devPath,

  // 入口文件信息
  entry: {
    'app': ['./app.js']
  },

  // 输出文件信息
  output: {
    'path': distPath,
    'chunkFilename': '[id].[chunkhash].js'
  },

  resolve: {
    // 别名
    'alias': alias,
		// 默认文件扩展名
    'extensions': ['', '.js', '.sass', '.css', '.jpg', '.png']
  },

  module: {
		preLoaders: [],
    loaders: [
			{
				'test': /\.jsx?$/i,
				'exclude': /node_modules/i,
				'include': devPath,
				'loader': 'babel'
			}, {
				'test': /\.(png|jpe?g|gif|svg)$/i,
				'loader': 'url',
				'include': devPath,
				'query': {
					'limit': 10000,
					'name': 'images/[name].[ext]'
				}
			}, {
				'test': /\.css/i,
				'loader': 'style!css',
				'include': devPath
			}
    ]
  },

	plugins: [
	  new ExtractTextPlugin('bundle.css'),
		new HtmlPlugin({
			filename: 'index.html',
			inject: true,
			template: path.join(devPath, 'pages', 'index.html'),
			files: {
				css: ['bundle.css']
			}
		})
	]
};
