import express, { Express } from 'express'
import { createServer } from 'http';

const port = process.env.PORT || 3000

const app: Express = express();

const server = createServer(app);

server.listen(port, () => {
    console.log(`[SERVER]: Running http://localhost:${port}`);
})