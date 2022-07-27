import { Request, Response } from "express";
import UserUseCase from "../useCases/UserUseCase";
import User from "../../../models/User";

type BodyUserCreate = {
  name: string;
  email: string;
  password: string;
};
type BodyUserUpdate = {
  extract: { accountNumber: string; credit: string; debit: string };
  balance: string;
};

export default class UserController {
  private useCase: UserUseCase;
  constructor(useCase: UserUseCase) {
    this.useCase = useCase;
  }
  create() {
    return async (req: Request, res: Response) => {
      try {
        const { email } = req.body;
        const savedUser = await User.count({
          email,
        });
        if (savedUser) {
          return res.status(400).json("Este e-mail já está cadastrado.");
        }

        const newUser = await this.useCase.createUser(
          req.body as BodyUserCreate
        );
        return res.status(201).json(newUser);
      } catch (error) {
        console.log(error);
        return res.status(400);
      }
    };
  }

  update() {
    return async (req: Request, res: Response) => {
      try {
        const { _id } = req.params;

        const updateUser = await this.useCase.updateUser(
          _id,
          req.body as BodyUserUpdate
        );
        return res.status(201).json(updateUser);
      } catch (error) {
        console.log(error);
        return res.status(400);
      }
    };
  }

  userExtract() {
    return async (req: Request, res: Response) => {
      try {
        const { id } = req.params;
        const userExtract = await this.useCase.extract(id);
        return res.json(userExtract);
      } catch (error) {
        console.log(error);
        return res.status(500);
      }
    };
  }

  userBalance() {
    return async (req: Request, res: Response) => {
      try {
        const { id } = req.params;

        const userBalance = await this.useCase.balance(id);

        if (!userBalance) {
          return res.status(404).json({ message: "Usuario não encontrado" });
        }

        return res.json(userBalance);
      } catch (error) {
        console.log(error);
        return res.status(400);
      }
    };
  }

  delete() {
    return async (req: Request, res: Response) => {
      try {
        const { id } = req.params;
        await this.useCase.delete(id);
        return res.status(204).json("");
      } catch (error) {
        return res.status(500).json("");
      }
    };
  }
}
