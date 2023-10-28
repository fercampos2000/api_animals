import {Router} from "express";
import { methods as loginController } from "../../controllers/controlcomida/controlcomidaperros.controller";

const router = Router();

//rutas del modulo administradores
router.get("/consult", loginController.getsCCperros);
router.get("/consult/:id", loginController.getCCperro);
router.post("/agreg", loginController.addCCperro);
router.put("/edit", loginController.updateCCperro);
router.delete("/delete/:id", loginController.deleteCCperro);

export default router;