import {Router} from "express";
import { methods as loginController } from "../../controllers/controlcomida/controlcomidagatos.controller";

const router = Router();

//rutas del modulo administradores
router.get("/consult", loginController.getsCCgatos);
router.get("/consult/:id", loginController.getCCgato);
router.post("/agreg", loginController.addCCgato);
router.put("/edit", loginController.updateCCgato);
router.delete("/delete/:id", loginController.deleteCCgato);

export default router;