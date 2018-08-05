import express from 'express';
import path from 'path';

const server = express();

// Heroku
const isProd    = process.env.NODE_ENV === production
if(isProd) {

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

/*
	Live reloading
 */
const webpackHotMiddleware =
require("webpack-hot-middleware")(compiler);

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);

}

/*
	Connects Express server to the root directory.
 */
const staticMiddleware = express.static("dist");

server.use(staticMiddleware);

/*
	Heroku Server
 */
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
	console.log("Server is listening")
});