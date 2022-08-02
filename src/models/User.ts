import { Schema, model, plugin } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  balance: number;
  accountNumber: string;
  credit: number;
  debit: number;
  token: string;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: Schema.Types.String,
    },
    email: {
      type: Schema.Types.String,
    },
    password: {
      type: Schema.Types.String,
    },
    balance: {
      type: Schema.Types.Number,
    },
    accountNumber: { type: Schema.Types.String },
    credit: { type: Schema.Types.Number },
    debit: { type: Schema.Types.Number },
    token: { type: Schema.Types.String },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);
