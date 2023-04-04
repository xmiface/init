import type { NextApiRequest, NextApiResponse } from "next";
import { parsedFile, saveFile } from "./tools/file";
import { IDbUserDto } from "../../types/dto";
import { randomiseToken } from "../../helpers/token";
const users = parsedFile("./db/users.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const userWithLogin = users.find((user: IDbUserDto) => user.login === req.body.login);
  if (!userWithLogin) {
    res.send("user not found");
    return undefined;
  }

  const correctPass = userWithLogin?.password === req.body.password;
  if (!correctPass) {
    res.send("wrong password");
    return undefined;
  }

  const refreshToken = randomiseToken();
  const sessionToken = randomiseToken();

  const tokens = parsedFile("./db/tokens.json");
  tokens.push({ id: userWithLogin.id, refreshToken: refreshToken, sessionToken: sessionToken });
  const stringToSave = JSON.stringify(tokens);
  saveFile("./db/tokens.json", stringToSave);

  res.send({
    status: 200,
    refreshToken,
    sessionToken,
  });
}
