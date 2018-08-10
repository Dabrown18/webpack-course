const path              = require("path");
const webpack           = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		main: [
			"babel-runtime/regenerator",
			"react-hot-loader/patch",
			"./src/main.js"
		]
	},
	mode: "development",
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/"
	},
	devServer: {
		contentBase: "dist",
		overlay: true,  // Displays errors in browser
		hot: true,      // Express live server
		stats: {
			colors: true //
		}
	},
	devtool: "source -map", // Tracks debugger
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader"
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			},
			{
				test: /\.sass$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			},
			{
				test: /\.styl$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						query: {
							modules: true
						}
					},
					{
						loader: "stylus-loader"
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "less-loader"
					}
				]
			},
			{
				test:/\.html$/,
				use: [
					{
						loader: "html-loader",
						options: {
							attrs: ["img:src"]
						}
					}
				]
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "images/[name]-[hash:8].[ext]"
						}
					}
				]
			}
		]
	},
	plugins: [
		//new webpack.HotModuleReplacementPlugin(),
		new HTMLWebpackPlugin({
			template: "./src/index.html"
		})
	]
};
