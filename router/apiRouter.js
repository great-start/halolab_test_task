import { Router } from "express";

const router = Router();

import { requestToDB } from "../elephantsql.js";

router.get("/", async (req, res) => {
  const dbRequest = await requestToDB();
  res.send(dbRequest);
});

// router.use('/users', userRouter);
// router.use('/auth', authRouter);

// @ts-ignore
router.use('*', (err, req, res, next) => { // custom errorHandler
  res
      .status(err.status || 500)
      .json({
        message: err.message,
        // data: err.data  // доп. поля в error
      });
});

export const apiRouter = router;
