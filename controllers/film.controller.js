import { nodeCacheService } from '../services/node.cache.service.js';
import { dataBaseService } from '../services/postgres.service.js';

class FilmController {
    async getOneByParam(req, res) {
        try {
            const { title } = req.params;

            let film = nodeCacheService.getFilmFromCache(title);

            if (film) {
                res.json({
                    message: 'from cache',
                    film,
                });
                return;
            }

            film = await dataBaseService.getOneFilmByTitle(title);

            if (!film) {
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
                message: 'from DB',
                film,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Wrong film title',
                error: 'Server Error',
                statusCode: 500,
            });
        }
    }
}

export const filmController = new FilmController();
