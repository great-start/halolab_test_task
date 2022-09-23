import express from 'express';
import pg from 'pg';
import { createClient } from 'redis';

import { config } from './config/index.js';
import { apiRouter } from './router/index.js';

const app = express();

const { PORT, HOST, PROTOCOL, POSTGRES_URL, REDIS_URL } = config;

export const PostgresClient = new pg.Client(POSTGRES_URL);
export const RedisClient = createClient({ url: REDIS_URL });

RedisClient.on('error', (err) => console.log('Redis Client Error', err));

app.use('/', apiRouter);

app.listen(PORT, async () => {
    await RedisClient.connect()
        .then(() => {
            console.log('Local Redis Store connected!');
        })
        .catch((err) => console.log('Error during Redis Store initialization!!!', err));
    await PostgresClient.connect()
        .then(() => {
            console.log('Cloud Database connected!');
        })
        .catch((err) => console.log('Error during Cloud Database initialization!!!', err));
    console.log(`Server started at ${PROTOCOL}://${HOST}:${PORT}`);
});
