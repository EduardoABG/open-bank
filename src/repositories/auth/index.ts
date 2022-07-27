import { IUser } from "../../models/User";
import IRepository from "../IRepository";
import { Model } from "mongoose";

export default class AuthRepository implements IRepository {
  private login: any;

  constructor(loginModel: Model<IUser>) {
    this.login = loginModel;
  }
  async find(payload?: { email: string; password: string }) {
    return this.login.find({ email: payload?.email });
  }
  async findById(payload?: any, id?: any) {}
  async create(payload: any) {}
  async update(payload: any, id: any) {}
  async findAll(payload?: any) {}

  async delete(id: any) {}
}
