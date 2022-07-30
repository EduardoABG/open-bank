import IRepository from "../../../repositories/IRepository";
import bcrypt from "bcryptjs";
const ObjectId = require("mongoose").Types.ObjectId;
import { Increment } from "mongoose-auto-increment-ts";

type PayloadUserCreate = {
  name: string;
  email: string;
  password: string;
  balance: number;
  accountNumber: number;
  credit: number;
  debit: number;
};
type PayloadUserUpdate = {
  balance: number;

  accountNumber: number;
  credit: number;
  debit: number;
};
export default class UserUseCase {
  private repository: IRepository;

  constructor(userRepository: IRepository) {
    this.repository = userRepository;
  }

  async registerUser(payload: PayloadUserCreate) {
    const hashedPassword = bcrypt.hashSync(payload.password, 10);
    const accountNumber = await Increment("User");
    const userData = {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      balance: payload.balance,
      accountNumber: accountNumber,
      credit: payload.credit,
      debit: payload.debit,
    };
    const newUser = await this.repository.create(userData);
    return newUser;
  }
  updateUser(_id: any, payload: PayloadUserUpdate) {
    const userData = {
      balance: payload.balance,
      accountNumber: payload.accountNumber,
      credit: payload.credit,
      debit: payload.debit,
    };
    const updateUser = this.repository.update(_id, userData);
    return updateUser;
  }

  async balance(_id: any) {
    const isValidId = ObjectId.isValid(_id);
    if (!isValidId) {
      return null;
    }
    const extract = await this.repository.find(_id);
    return extract;
  }

  extract(_id: any) {
    const isValidId = ObjectId.isValid(_id);
    if (!isValidId) {
      return null;
    }
    const balance = this.repository.findById(_id);
    return balance;
  }

  async delete(id: any) {
    const result = await this.repository.delete(id);
    return result;
  }
}
