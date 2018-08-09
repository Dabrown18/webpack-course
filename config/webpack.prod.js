const path             = require("path");
const webpack          = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
	entry: {
		main: [
			"babel-polyfill",
			"./src/main.js"
		]
	},
	mode: "production",
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/"
	},
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
						loader: MiniCSSExtractPlugin.loader
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
		new MiniCSSExtractPlugin(),
		new HTMLWebpackPlugin({
			template: "./src/index.html"
		})
	]
};
