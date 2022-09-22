import { Router } from "express";

import { filmRouter } from "./filmRouter.js";

const router = Router();

router.use("/film", filmRouter);

router.use("*", (err, req, res, next) => {

  // custom errorHandler
  res.status(err.status || 500).json({
    message: err.message,
  });
});

export const apiRouter = router;
