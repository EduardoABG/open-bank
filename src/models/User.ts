import { Schema, model } from "mongoose";
export interface IUser {
  name: string;
  email: string;
  password: string;
  balance: number;
  extract: {
    accountNumber: string;
    credit: number;
    debit: number;
  };
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
    extract: {
      accountNumber: { type: Schema.Types.String },
      credit: { type: Schema.Types.Number },
      debit: { type: Schema.Types.Number },
    },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);
