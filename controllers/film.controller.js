import { nodeCacheService } from '../services/node.cache.service.js';
import { dataBaseService } from '../services/postgres.service.js';

class FilmController {
    async getOneByParam(req, res) {
        try {
            const { title } = req.params;

            let filmFromCache = nodeCacheService.getFilmFromCache(title);

            let film;
            if (!filmFromCache) {
                film = await dataBaseService.getOneFilmByTitle(title);
            }

            if (!film && !filmFromCache) {
                res.status(400).json({
                    message: 'Wrong film title',
                    error: 'Bad request',
                    statusCode: 400,
                });
                return;
            }

            if (film) {
                nodeCacheService.storeFilmInCache(film);
            }

            res.json({
                message: filmFromCache ? 'from cache' : 'from DB',
                film: film || filmFromCache,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Wrong film title',
                error: 'Server Error',
                statusCode: 400,
            });
        }
    }
}

export const filmController = new FilmController();