import { Router } from 'express';

import { filmController } from '../controllers/film.controller.js';

const router = Router();

router.get('/:title', filmController.getOneByParams);

export const filmRouter = router;
