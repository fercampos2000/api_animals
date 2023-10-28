import {Router} from "express";
import { methods as loginController } from "../../controllers/alimentacion/alimperros.controller";

const router = Router();

//rutas del modulo alimentacion para perros
router.get("/consult", loginController.getsAlimentacionPerros);
router.get("/consult/:fecha", loginController.getAlimentacionPerro);
router.post("/agreg", loginController.addAlimentacionPerro);
router.put("/edit/:fecha", loginController.updateAlimentacionPerro);
router.delete("/delete/:fecha", loginController.deleteAlimentacionPerro);

export default router;