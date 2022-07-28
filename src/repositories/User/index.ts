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
  async find(id?: any) {
    console.log(id);
    const list = await this.userModel.findById(id, [
      "-password",
      "-email",
      "-__v",
      "-_id",
      "-name",
      "-createdAt",
      "-updatedAt",
      "-extract",
    ]);
    return list;
  }
  async update(
    id: any,
    payload: {
      balance: number;
      extract: {
        accountNumber: string;
        credit: number;
        debit: number;
      };
    }
  ) {
    return await this.userModel.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
  }
  async findAll(id: any) {}
  async findById(id: any) {
    return this.userModel.findById(id, [
      "-password",
      "-email",
      "-__v",
      "-_id",
      "-name",
      "-createdAt",
      "-updatedAt",
      "-balance",
    ]);
  }
  async delete(id: any) {
    return await this.userModel.deleteOne({ _id: id });
  }
}
