import { Router } from "express";
import userRoutes from "../../modules/User/routes";
import authRoutes from "../../modules/auth/routes";
const routes = Router();

routes.use(userRoutes);
routes.use(authRoutes);

export default routes;
