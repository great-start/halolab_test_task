import { Router } from 'express';

import { filmRouter } from './filmRouter.js';

const router = Router();

router.use('/film', filmRouter);

export const apiRouter = router;
