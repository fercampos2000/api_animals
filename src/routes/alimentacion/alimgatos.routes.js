import {Router} from "express";
import { methods as loginController } from "../../controllers/alimentacion/alimgatos.controller";

const router = Router();

//rutas del modulo alimentacion para perros
router.get("/consult", loginController.getsAlimentacionGatos);
router.get("/consult/:fecha", loginController.getAlimentacionGato);
router.post("/agreg", loginController.addAlimentacionGato);
router.put("/edit/:fecha", loginController.updateAlimentacionGato);
router.delete("/delete/:fecha", loginController.deleteAlimentacionGato);

export default router;