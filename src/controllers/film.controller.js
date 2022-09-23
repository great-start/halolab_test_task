import { dataBaseService, nodeCacheService, redisService } from '../services/index.js';

class FilmController {
    async getOneByParams(req, res) {
        try {
            const { title } = req.params;

            let film = await nodeCacheService.getFilmFromCache(title.trim());

            if (film) {
                res.json({
                    source: 'Node cache',
                    film,
                });
                return;
            }

            film = await redisService.getFilmFromRedisStore(title.trim());

            if (film) {
                res.json({
                    source: 'Local Redis Store',
                    film,
                });
                return;
            }

            film = await dataBaseService.getOneFilmByTitle(title.trim());

            if (!film) {
                res.status(400).json({
                    message: 'Wrong film title',
                    error: 'Bad request',
                    statusCode: 400,
                });
                return;
            }

            res.json({
                source: 'Cloud Postgres DataBase',
                film,
            });

            if (film) {
                await nodeCacheService.storeFilmInCache(film);
                await redisService.setFilmToRedisStore(film);
            }
        } catch (e) {
            res.status(500).json({
                message: 'Server error',
                error: 'Internal Server Error',
                statusCode: 500,
            });
        }
    }
}

export const filmController = new FilmController();
