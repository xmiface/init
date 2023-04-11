import type { NextApiRequest, NextApiResponse } from "next";
import { parsedFile } from "../tools/file";
import { IDbTokenDto } from "../../types/dto";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const tokens = parsedFile("./db/tokens.json");
  const sessionTokenValid = tokens.some((t: IDbTokenDto) => t.sessionToken === req.body.sessionToken);
  if (!sessionTokenValid) {
    res.send("wrong token");
    return;
  }
  res.send({ status: 200 });
}
