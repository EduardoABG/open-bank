import { Router } from "express";
import { authController } from "../controllers";
import authValidator from "../validators";
const routes = Router();

routes.post("/login", authValidator.login, authController.login());

export default routes;
