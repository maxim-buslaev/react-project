const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const LodashWebpackOptimize = require('lodash-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const root = path.resolve(__dirname, '../')
const distPath = `${root}/server/dist`

module.exports = merge(common, {
	entry: {
		// index: `${root}/src/js/index.js`
		index: `${root}/src/js/index.tsx`
	},
	//devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new LodashWebpackOptimize({
			chaining: false,
			//для работы с react-css-modules
			shorthands: true,
			collections: true,
			paths: true
		}),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
		new CleanWebpackPlugin([distPath], {
			allowExternal: true
		}),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: module => {
				return module.context && module.context.includes('node_modules')
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			minChunks: Infinity
		}),
		new UglifyJSPlugin({
			// sourceMap: true,
			cache: true,
			parallel: true,
			uglifyOptions: {
				mangle: true
				// compress: false
			}
		})
		// new BundleAnalyzerPlugin()
	],

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'awesome-typescript-loader',
					options: {
						configFileName: `${root}/configs/tsconfig.json`,
						reportFiles: [`${root}/src/js/**/*.{ts,tsx}`],
						useCache: true,
						forceIsolatedModules: true,
						useBabel: true,
						babelCore: '@babel/core',
						babelOptions: {
							// babelrc: false,
							presets: [
								[
									'@babel/preset-env',
									{
										targets: {
											browsers: ['last 1 versions']
										},
										useBuiltIns: 'usage',
										modules: false,
										loose: true,
										spec: true,
										useBuiltIns: 'usage',
										forceAllTransforms: true
									}
								],
								'@babel/preset-react',
								'@babel/preset-stage-0'
							],
							plugins: [
								[
									'module-resolver',
									{
										root: [path.resolve(__dirname, '../')],
										alias: {
											'~css': '../src/css'
										}
									}
								],
								'babel-plugin-dual-import',
								'@babel/plugin-proposal-object-rest-spread',
								'@babel/plugin-syntax-dynamic-import',
								'@babel/plugin-proposal-class-properties',
								[
									'react-css-modules',
									{
										webpackHotModuleReloading: true,
										handleMissingStyleName: 'warn',
										generateScopedName: '[local]-[hash:base64:4]',
										filetypes: {
											'.scss': { syntax: 'postcss-scss' }
										},
										exclude: 'node_modules'
									}
								],
								'closure-elimination',
								'@babel/plugin-transform-react-constant-elements',
								'@babel/plugin-transform-react-inline-elements',
								'transform-react-remove-prop-types'
							]
						}
					}
				}
			},
			{
				test: /\.(svg)$/,
				include: `${root}/src/img`,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'img',
							publicPath: '../img/'
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				include: `${root}/src/img`,
				use: [
					{
						loader: 'image-trace-loader'
					},
					{
						loader: 'file-loader',
						options: {
							outputPath: 'img',
							publicPath: '../img/'
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							svgo: {
								plugins: [{ removeTitle: true }, { convertPathData: false }],
								enabled: false
							},
							mozjpeg: {
								enabled: false, //пока не заработает с loadable-components
								progressive: true,
								quality: 65
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							optipng: {
								enabled: false
							},
							gifsicle: {
								enabled: false
							},
							webp: {
								enabled: false
							}
						}
					}
				]
			}
		]
	},
	output: {
		filename: 'js/[name].[chunkhash].bundle.js',
		chunkFilename: 'js/[name].[chunkhash].bundle.js',
		path: distPath
	}
})
