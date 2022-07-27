import IRepository from "../../../repositories/IRepository";
import bcrypt from "bcryptjs";
const ObjectId = require("mongoose").Types.ObjectId;

type PayloadUserCreate = {
  name: string;
  email: string;
  password: string;
};
type PayloadUserUpdate = {
  extract: {};
  balance: string;
};

export default class UserUseCase {
  private repository: IRepository;

  constructor(userRepository: IRepository) {
    this.repository = userRepository;
  }

  async createUser(payload: PayloadUserCreate) {
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
      balance: payload.balance,
    };
    const updateUser = this.repository.update(_id, userData);
    return updateUser;
  }

  async listAll() {
    const userList = await this.repository.findAll();
    return userList;
  }

  listUser(_id: any) {
    const isValidId = ObjectId.isValid(_id);
    if (!isValidId) {
      return null;
    }
    const listUser = this.repository.findById(_id);
    return listUser;
  }

  async delete(id: any) {
    const result = await this.repository.delete(id);
    return result;
  }
}