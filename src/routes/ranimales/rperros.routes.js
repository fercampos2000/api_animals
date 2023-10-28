import {Router} from "express";
import { methods as loginController } from "../../controllers/ranimales/rperros.controller";

const router = Router();

//rutas del modulo registros de perros
router.get("/consult", loginController.getsRegistrosPerros);
router.get("/consult/:id", loginController.getRegistroPerro);
router.post("/agreg", loginController.addRegistroPerro);
router.put("/edit", loginController.updateRegistroPerro);
router.delete("/delete/:id", loginController.deleteRegistroPerro);

export default router;