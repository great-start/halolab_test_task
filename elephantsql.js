import { client } from "./app.js";

export const requestToDB = async () => {
  const newVar = await client.query("SELECT * FROM accounts");
  return newVar.rows;
};
