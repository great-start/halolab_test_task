import { dataBaseService, nodeCacheService, redisService } from '../services/index.js';

class FilmController {
    async getOneByParams(req, res) {
        try {
            const { title } = req.params;

            let film = await nodeCacheService.getFilm(title.trim());

            if (film) {
                res.json({
                    source: 'Node cache',
                    film,
                });
                return;
            }

            film = await redisService.getFilm(title.trim());

            if (film) {
                res.json({
                    source: 'Local Redis Store',
                    film,
                });
                return;
            }

            film = await dataBaseService.getOneByTitle(title.trim());

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
                await nodeCacheService.saveFilm(film);
                await redisService.saveFilm(film);
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
