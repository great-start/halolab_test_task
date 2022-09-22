import { Router } from "express";

const router = Router();

import { requestToDB } from "../elephantsql.js";
import { filmRouter } from "./filmRouter.js";

router.get("/", async (req, res) => {
  const dbRequest = await requestToDB();
  res.send(dbRequest);
});

router.use("/film", filmRouter);

// @ts-ignore
router.use("*", (err, req, res, next) => {
  // custom errorHandler
  res.status(err.status || 500).json({
    message: err.message,
    // data: err.data  // доп. поля в error
  });
});

export const apiRouter = router;
