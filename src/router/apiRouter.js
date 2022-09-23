import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';

import { filmRouter } from './filmRouter.js';
import swaggerJson from '../docs/swagger.json' assert { type: "json" };

const router = Router();

router.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJson))
router.use('/film', filmRouter);

export const apiRouter = router;
