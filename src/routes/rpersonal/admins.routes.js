import {Router} from "express";
import { methods as loginController } from "../../controllers/rpersonal/admins.controller";

const router = Router();

//rutas del modulo administradores
router.get("/consult", loginController.getPersonasAdm);
router.get("/consult/:id", loginController.getPersonaAdm);
router.post("/agreg", loginController.addPersonaAdm);
router.put("/edit", loginController.updatePersonaAdm);
router.delete("/delete/:id", loginController.deleteLoginAdm);

export default router;