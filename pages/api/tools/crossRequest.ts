import axios from "axios";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const value = await axios.get("http://localhost:3000/api/cat/info").catch((err) => console.log(err));
  console.log(value.data);
  res.send(JSON.stringify(value.data));
}
