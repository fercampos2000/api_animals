import {Router} from "express";
import { methods as loginController } from "../../controllers/rmedicos/rmedicosgatos.controller";

const router = Router();

//rutas del modulo administradores
router.get("/consult", loginController.getsRmedicosGatos);
router.get("/consult/:id", loginController.getRmedicoGato);
router.post("/agreg", loginController.addRmedicoGato);
router.put("/edit", loginController.updateRmedicoGato);
router.delete("/delete/:id", loginController.deleteRmedicoGato);

export default router;