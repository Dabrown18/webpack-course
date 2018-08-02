import express from 'express';
import path from 'path';

const server = express();

const webpack   = require("webpack");
const config    = require("../../config/webpack.dev");
const compiler  = webpack(config);

/*
	Express Middleware
 */
const webpackDevMiddleware =
require("webpack-dev-middleware")(
	compiler,
	config.devServer
);

server.use(webpackDevMiddleware);

/*
	Connects Express server to the root directory.
 */
const staticMiddleware = express.static("dist");

server.use(staticMiddleware);

server.listen(8080, () => {
	console.log("Server is listening")
});