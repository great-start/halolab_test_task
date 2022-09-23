import { RedisClients } from '../app.js';

class RedisService {
    async setFilmToRedisStore(film) {
        await RedisClients.set(film.title, JSON.stringify(film), {
            EX: 30,
            NX: true,
        });
    }

    async getFilmFromRedisStore(title) {
        const string = await RedisClients.get(title);
        return JSON.parse(string);
    }
}

export const redisService = new RedisService();
