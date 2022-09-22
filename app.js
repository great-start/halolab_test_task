import express from 'express';
import pg from 'pg';

import { apiRouter } from './router/apiRouter.js';
import { config } from './config/config.js';

const { PORT, HOST, PROTOCOL, POSTGRES_URL } = config;

export const client = new pg.Client(POSTGRES_URL);
const app = express();

app.use('/', apiRouter);

app.listen(PORT, async () => {
    await client
        .connect()
        .then(() => {
            console.log('Database connected!!');
            console.log(`Server started at ${PROTOCOL}://${HOST}:${PORT}`);
        })
        .catch((error) => console.log('Error during Data Source initialization!!!', error));
});
