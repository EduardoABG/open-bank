import IRepository from "../../../repositories/IRepository";
import bcrypt from "bcryptjs";
const ObjectId = require("mongoose").Types.ObjectId;
import { Increment } from "mongoose-auto-increment-ts";
import { stringify } from "querystring";

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
    const credit = 0;
    const debit = 0;
    const balance = credit - debit;
    const userData = {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      balance: balance,
      accountNumber: accountNumber,
      credit: payload.credit,
      debit: debit,
    };
    const newUser = await this.repository.create(userData);
    return newUser;
  }
  updateUser(_id: any, payload: PayloadUserUpdate) {
    const credit = payload.credit;
    const debit = payload.debit;
    const balance = credit - debit;
    const userData = {
      balance: balance,
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
