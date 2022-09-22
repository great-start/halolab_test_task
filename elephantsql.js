import { client } from "./app.js";

export const requestToDB = async () => {
  const newVar = await client.query("SELECT * FROM film");
  return newVar.rows;
};
