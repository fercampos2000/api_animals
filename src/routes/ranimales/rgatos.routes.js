import {Router} from "express";
import { methods as loginController } from "../../controllers/ranimales/rgatos.controller";

const router = Router();

//rutas del modulo registros de gatos
router.get("/consult", loginController.getsRegistrosGatos);
router.get("/consult/:id", loginController.getRegistroGato);
router.post("/agreg", loginController.addRegistroGato);
router.put("/edit", loginController.updateRegistroGato);
router.delete("/delete/:id", loginController.deleteRegistroGato);

export default router;