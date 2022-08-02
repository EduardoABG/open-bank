import { Router } from "express";
import { userController } from "../controller";
import userValidator from "../validators";
import auth from "../../../infra/middlewares/auth";

const routes = Router();

routes.get("/users_extract/:id", auth, userController.userExtract());
routes.get("/users_balance/:id", auth, userController.userBalance());
routes.post("/users", userValidator.create, userController.register());
routes.put("/users/:id", auth, userController.update());
routes.delete("/users/:id", auth, userController.delete());

export default routes;
