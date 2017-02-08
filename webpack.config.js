var path = require('path');
var webpack = require('webpack');
var dirPath = path.resolve( __dirname , './' );
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	module: {
		rules: [
            {
    			test: /\.vue$/,
    			loader: 'vue-loader',
    			options: {
    				loaders: {
    					'scss': 'vue-style-loader!css-loader!sass-loader',
    					'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
    				}
    			}
    		},
			{
				test: /\.(sass|scss)$/,
				use: [
					{
		                loader: "style-loader"
		            },
					{
		                loader: "css-loader"
		            },
					{
		                loader: "sass-loader",
		                options: {
							rules: [
								{
									test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
									loader: 'file-loader',
								}
							]
					    }
	            	}
				]
			},
			{
				test: /\.css$/,
				loaders: 'style-loader!css-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader',
				options: {
				  name: 'assets/images/[name].[ext]?[hash]',
				  limit: 81920
				}
			},
			{
				test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: 'assets/images/[name].[ext]?[hash]'
				}
			}
        ]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	}), new webpack.optimize.UglifyJsPlugin({
		sourceMap: true,
		compress: {
			warnings: false
		}
	}), new webpack.LoaderOptionsPlugin({
		minimize: true
	})])
}
