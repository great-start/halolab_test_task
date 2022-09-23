import express from 'express';
import pg from 'pg';
import { createClient } from 'redis';

import { apiRouter } from './router/apiRouter.js';
import { config } from './config/config.js';

const app = express();

const { PORT, HOST, PROTOCOL, POSTGRES_URL, REDIS_URL } = config;

export const PostgresClient = new pg.Client(POSTGRES_URL);

const RedisClient = createClient({ url: REDIS_URL });

( async () => {
    await RedisClient.connect()
        .then(() => {
            console.log('Local Redis Store connected!');
        })
        .catch((err) => console.log('Error during Redis Store initialization!!!', err));
})();

RedisClient.on('error', (err) => console.log('Redis Client Error', err));

export const RedisClients = RedisClient;
app.use('/', apiRouter);

// app.get('/films', async (req, res) => {
//     const film = await PostgresClient.query(`SELECT * FROM film WHERE title = 'Ace Goldfinger'`);
//     const newVar = film.rows[0];
//     await RedisClient.set('user', JSON.stringify(newVar));
//     //
//     // const filmFromStorage = await RedisClient.get(`${film.title}`);
//     res.json(newVar);
// })

app.listen(PORT, async () => {
    await PostgresClient.connect()
        .then(() => {
            console.log('Cloud Database connected!');
        })
        .catch((err) => console.log('Error during Cloud Database initialization!!!', err));
    console.log(`Server started at ${PROTOCOL}://${HOST}:${PORT}`);
});
