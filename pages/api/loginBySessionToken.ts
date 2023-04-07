import type { NextApiRequest, NextApiResponse } from "next";
import { IDbTokenDto } from "../../types/dto";
import { parsedFile } from "./tools/file";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const tokens = parsedFile("./db/tokens.json");
  if (!tokens) {
    //no tokens
    res.send(500);
    return;
  }
  const sessionTokenValid = tokens.some((t: IDbTokenDto) => t.sessionToken === req.body.sessionToken);
  if (!sessionTokenValid) {
    //"wrong token"
    res.send(500);
    return;
  }

  res.send({ status: 200 });
}
