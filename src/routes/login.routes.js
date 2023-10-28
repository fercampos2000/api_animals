import {Router} from "express";
import { methods as loginController } from "../controllers/login.controller";

const router = Router();

//rutas del modulo login
router.post("/consult", loginController.getLogins);
router.get("/consult/:id", loginController.getLogin);
router.post("/agreg", loginController.addLogin);
router.put("/edit", loginController.updateLogin);
router.delete("/delete/:id", loginController.deleteLogin);

export default router;