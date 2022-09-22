import { Router } from "express";

import { dataBaseService } from "../services/postgres.servise.js";
import {nodeCacheService} from "../services/node.cache.service.js";

const router = Router();

router.get("/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const film = await dataBaseService.getOneFilmByTitle(title);

    if (!film) {
      res.status(400).json({
        message: "Wrong film title",
        error: "Bad request",
        statusCode: 400,
      });
      return;
    }

    if (film) {
      nodeCacheService.storeFilmInCache(film);
    }

    res.json({ message: "data from DB", film });
  } catch (e) {
    res.status(500).json({
      message: "Wrong film title",
      error: "Server Error",
      statusCode: 400,
    });
  }
});

export const filmRouter = router;
