import IRepository from "../IRepository";
import { IUser } from "../../models/User";
import { Model } from "mongoose";

export default class UserRepository implements IRepository {
  private userModel: any;
  constructor(userModel: Model<IUser>) {
    this.userModel = userModel;
  }
  async create(payload: { name: string; email: string; password: string }) {
    return await this.userModel.create(payload);
  }
  async find(payload?: any, id?: any) {}
  async update(
    id: any,
    payload: {
      extract: {};
      balance: string;
    }
  ) {
    return await this.userModel.updateOne({ _id: id }, payload);
  }
  async findAll() {
    const list = await this.userModel.find({}, ["-password", "-__v"]);
    return list;
  }
  async findById(id: any) {
    return this.userModel.findById(id, ["-password", "-__v"]);
  }
  async delete(id: any) {
    return await this.userModel.deleteOne({ _id: id });
  }
}
