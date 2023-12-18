import "reflect-metadata";
import app from "./app"
import { Server, createServer } from "http";
import bootstrap from "./bootstrap";
import { serverConfig } from "./config/general";
import logger from "./libs/logger.lib";

const server: Server = createServer(app)
const { port } = serverConfig

bootstrap(server, () => {
	server.listen(port, async () => {
		logger.info(`🚀  Server running at port ${port}`)
	})
}).catch((error) => {
	console.error({ error })
})
