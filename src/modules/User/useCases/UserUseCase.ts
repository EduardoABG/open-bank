import IRepository from "../../../repositories/IRepository";
import bcrypt from "bcryptjs";
const ObjectId = require("mongoose").Types.ObjectId;

type PayloadUserCreate = {
  name: string;
  email: string;
  password: string;
};
type PayloadUserUpdate = {
  balance: number;
  extract: {
    accountNumber: string;
    credit: number;
    debit: number;
  };
};
export default class UserUseCase {
  private repository: IRepository;

  constructor(userRepository: IRepository) {
    this.repository = userRepository;
  }

  async registerUser(payload: PayloadUserCreate) {
    const hashedPassword = bcrypt.hashSync(payload.password, 10);
    const userData = {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
    };
    const newUser = await this.repository.create(userData);
    return newUser;
  }
  updateUser(_id: any, payload: PayloadUserUpdate) {
    const userData = {
      extract: payload.extract,
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
