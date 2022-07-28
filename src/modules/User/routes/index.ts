import { Router } from "express";
import { userController } from "../controller";
import userValidator from "../validators";

const routes = Router();

routes.get("/users_extract/:id", userController.userExtract());
routes.get("/users_balance/:id", userController.userBalance());
routes.post("/users", userValidator.create, userController.register()); // Criação da 1ª rota, cadastrar usuário.
routes.put("/users/:id", userValidator.update, userController.update());
routes.delete("/users/:id", userController.delete());

export default routes;
