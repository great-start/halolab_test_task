import { client } from "../app.js";

class DataBaseService {
  async getOneFilmByTitle(title) {
    const newVar = await client.query(`SELECT * FROM film WHERE title = '${title}'`);

    return newVar.rows[0];
  };
}

export const dataBaseService = new DataBaseService();
