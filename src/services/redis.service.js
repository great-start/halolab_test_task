import { RedisClient } from '../app.js';
import { config } from '../config/config.js';

class RedisService {
    async saveFilm(film) {
        await RedisClient.set(film.title, JSON.stringify(film), {
            EX: config.REDIS_EX,
            NX: true,
        });
    }

    async getFilm(title) {
        const string = await RedisClient.get(title);
        return JSON.parse(string);
    }
}

export const redisService = new RedisService();
