import IRepository from "../IRepository";
import { IUser } from "../../models/User";
import { Model } from "mongoose";

export default class UserRepository implements IRepository {
  private userModel: any;
  constructor(userModel: Model<IUser>) {
    this.userModel = userModel;
  }

  async create(payload: {
    name: string;
    email: string;
    password: string;
    balance: number;
    accountNumber: number;
    credit: number;
    debit: number;
  }) {
    const updatedUser = await this.userModel.create(payload);
    if (updatedUser) {
      const { password, __v, token, ...responseUser } = updatedUser._doc;
      return { user: responseUser };
    }
  }
  async find(id?: any) {
    const list = await this.userModel.findById(id, [
      "-password",
      "-email",
      "-__v",
      "-_id",
      "-name",
      "-createdAt",
      "-updatedAt",
      "-accountNumber",
      "-credit",
      "-debit",
      "-token",
    ]);
    return list;
  }
  async update(
    id: any,
    payload: {
      balance: number;
      credit: number;
      debit: number;
    }
  ) {
    const updatedUser = await this.userModel.findOneAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
      }
    );
    if (updatedUser) {
      const { password, __v, _id, email, token, ...responseUser } =
        updatedUser._doc;
      return { user: responseUser };
    }
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
      "-token",
    ]);
  }
  async delete(id: any) {
    return await this.userModel.deleteOne({ _id: id });
  }
  async count(payload: any) {
    return await this.userModel.count(payload);
  }
}
