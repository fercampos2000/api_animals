import {Router} from "express";
import { methods as baseController } from "../controllers/base.controller";
import { methods as loginController } from "../controllers/login.controller";

const router = Router();
//rutas base
router.get("/", baseController.getAnimals);
router.get("/:id", baseController.getAnimal);
router.post("/", baseController.addAnimals);
router.put("/:id", baseController.updateAnimal);
router.delete("/:id", baseController.deleteAnimal);

//rutas del modulo login
router.get("/", loginController.getLogins);
router.get("/:id", loginController.getLogin);
router.post("/", loginController.addLogin);
router.put("/:id", loginController.updateLogin);
router.delete("/:id", loginController.deleteLogin);

export default router;