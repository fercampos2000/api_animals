import {Router} from "express";
import { methods as loginController } from "../../controllers/rmedicos/rmedicosperros.controller";

const router = Router();

//rutas del modulo administradores
router.get("/consult", loginController.getsRmedicosPerros);
router.get("/consult/:id", loginController.getRmedicoPerro);
router.post("/agreg", loginController.addRmedicoPerro);
router.put("/edit", loginController.updateRmedicoPerro);
router.delete("/delete/:id", loginController.deleteRmedicoPerro);

export default router;