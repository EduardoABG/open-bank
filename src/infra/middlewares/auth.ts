import { Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Token not specified" });
  }

  ("JWT token");
  const partsToken = authorization.split(" ");

  if (partsToken.length !== 2) {
    return res.status(401).json({ message: "Bad formated token" });
  }

  const [key, token] = partsToken;

  if (key.indexOf("Bearer") < 0) {
    return res.status(401).json({ message: "Bad formated token" });
  }

  try {
    const data = JWT.verify(token, "OPENBANK");
    //req.user = data as User;
    return next();
  } catch (e) {
    return res.status(401).json({ message: "Invalid token! Sing in again!" });
  }
};
