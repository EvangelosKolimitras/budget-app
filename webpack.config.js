const path = require( 'path' )
const HTMLWebpackPlugin = require('html-webpack-plugin')

const p2p = path.join(__dirname,"public")
const port = process.env.PORT || 9999
module.exports = {
	entry  : './src/js/app.js' ,
	output : {
		path     : p2p ,
		filename : './src/bundle.js'
	} ,

	module : {
		rules : [
			{
				loader  : 'babel-loader' ,
				test    : /\.js$/ ,
				exclude : /node_modules/
			},
			{
				test: /\.(c|sc|sa)ss$/,
				use : [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	},

	plugins: [
		new HTMLWebpackPlugin({
			title: "Title",
			template: "src/index.ejs",
			filename:"index.html"
		}),
	],

	devServer: {
		contentBase: p2p,
		hot: true,
		port,
		historyApiFallback: true
	},

	mode : 'development',
	devtool: "cheap-module-eval-source-map"
}
