import UserRepository from "./User";
import AuthRepository from "./auth";
import { User } from "../models";

const userRepository = new UserRepository(User);
const authRepository = new AuthRepository(User);
export { userRepository, authRepository };
