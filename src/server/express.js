import express from 'express';
import path from 'path';

const server = express();

const staticMiddleware = express.static("dist"); // The root of the web server

server.use(staticMiddleware);

server.listen(8080, () => {
	console.log("Server is listening")
});