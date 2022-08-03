import { IUser } from "../../models/User";
import IRepository from "../IRepository";
import { Model } from "mongoose";

export default class AuthRepository implements IRepository {
  private login: any;

  constructor(loginModel: Model<IUser>) {
    this.login = loginModel;
  }
  async find(payload?: { email: string; password: string }) {
    return await this.login.findOne({ email: payload?.email }, [
      "-__v",
      "-_id",
      "-createdAt",
      "-updatedAt",
      "-accountNumber",
      "-credit",
      "-debit",
      "-name",
      "-balance",
      "+password",
    ]);
  }
  async findById(payload?: { token: string }, id?: any) {}
  async create(payload: any) {}
  async update(payload: any, id: any) {}
  async findAll(payload?: any) {}

  async delete(id: any) {}
  async count(payload: any) {}
}
