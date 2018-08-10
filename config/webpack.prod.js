const path                    = require("path");
const webpack                 = require("webpack");
const HTMLWebpackPlugin       = require("html-webpack-plugin");
const MiniCSSExtractPlugin    = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin            = require("babel-minify-webpack-plugin");
const UglifyJSPlugin          = require("uglifyjs-webpack-plugin");
const CompressionPlugin       = require("compression-webpack-plugin");

module.exports = (env) => {
	return {
		entry: {
			main: [
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
							loader: "css-loader",
							options: {
								minimize: true
							}
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
			new OptimizeCssAssetsPlugin(),
			new MiniCSSExtractPlugin({
				filename: "[name]-[contenthash].css"
			}),
			new HTMLWebpackPlugin({
				template: "./src/index.html"
			}),
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify(env.NODE_ENV)
				}
			}),
			//new MinifyPlugin()
			new UglifyJSPlugin(),
			new CompressionPlugin({
				algorithm: "gzip"
			})
		]
	}
};
