import { Schema, model } from "mongoose";
// Interface explicando para o TypeScript:
export interface IUser {
  name: string;
  email: string;
  password: string;
  extract: {
    accountNumber: string;
    credit: string;
    debit: string;
  };
  balance: string;
}

// Const explicando para o mongoose:
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
    extract: {
      accountNumber: { type: Schema.Types.String },
      credit: { type: Schema.Types.String },
      debit: { type: Schema.Types.String },
    },
    balance: {
      type: Schema.Types.String,
    },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema); // Dará as diversas funções para manpular os dados dentro do mongoose.
