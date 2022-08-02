import { Request, Response } from "express";
import AuthUseCase from "../useCase/AuthUseCase";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ENV from "../../../infra/config/env";

type BodyLogin = {
  email: string;
  password: string;
};
type BodyRefreshToken = {
  token: string;
};
export default class AuthController {
  private useCase: AuthUseCase;
  constructor(useCase: AuthUseCase) {
    this.useCase = useCase;
  }
  login() {
    return async (req: Request, res: Response) => {
      try {
        const login = await this.useCase.login(req.body as BodyLogin);

        if (!login) {
          return res.status(400).json("Email not registred!");
        }
        if (!bcrypt.compare(req.body.password, login.password)) {
          return res.status(401).json("Invalid password!");
        }
        const accessToken = jwt.sign(
          {
            id: login.id,
            email: login.email,
            name: login.name,
          },
          ENV.SECRET,
          { expiresIn: "20s" }
        );
        const token = jwt.sign(
          { email: login.email, name: login.name },
          ENV.SECRET,
          { expiresIn: "1d" }
        );
        login.token = token;
        const result = await login.save();
        res.cookie("jwt", token, {
          httpOnly: true,
          sameSite: "none",
          secure: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        return res.json({ accessToken });
      } catch (error) {
        console.log(error);
        return res.status(400);
      }
    };
  }
  generateNewToken() {
    return async (req: Request, res: Response) => {
      try {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);
        const refreshToken = cookies.jwt;
        const foundUser = await this.useCase.refreshToken(
          req.body as BodyRefreshToken
        );
        if (!foundUser) return res.sendStatus(403);
        jwt.verify(refreshToken, ENV.SECRET, (err: any, decoded: any) => {
          if (err || foundUser.email !== decoded.email)
            return res.sendStatus(403);
          const name = Object.values(foundUser.name);
          const token = jwt.sign(
            {
              email: decoded.email,
              name: name,
            },
            ENV.SECRET,
            { expiresIn: "10s" }
          );
          return res.json({ token });
        });
      } catch (error) {
        console.log(error);
        return res.status(400);
      }
    };
  }
}
