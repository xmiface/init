import type { NextApiRequest, NextApiResponse } from "next";
import { IDbTokenDto, IDbUserDto } from "../../types/dto";
import { getRoutes } from "../../utils/getRoutes";
import { parsedFile } from "../tools/file";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let body = {} as Record<string, unknown>;

  const tokens = parsedFile("./db/tokens.json");
  const sessionToken = req.cookies.sessionToken;

  if (!sessionToken) {
    res.status(401);
  }

  const sessionTokenValid = tokens.find((t: IDbTokenDto) => t.sessionToken === req.cookies.sessionToken);
  if (!sessionTokenValid) {
    res.send("wrong token");
    return;
  }

  body.status = 200;

  const users = parsedFile("./db/users.json");
  const user = users.find((el: IDbUserDto) => el.id === sessionTokenValid.id);

  res.send({
    links: getRoutes(user.role)
  });
}
