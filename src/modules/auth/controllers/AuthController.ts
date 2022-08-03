import { Request, Response } from "express";
import AuthUseCase from "../useCase/AuthUseCase";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ENV from "../../../infra/config/env";

type BodyLogin = {
  email: string;
  password: string;
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
        const token = jwt.sign(
          {
            id: login.id,
            email: login.email,
            name: login.name,
          },
          ENV.SECRET,
          { expiresIn: "20s" }
        );

        return res.json({ token });
      } catch (error) {
        console.log(error);
        return res.status(400);
      }
    };
  }
}
