import {Router} from "express";
import { methods as loginController } from "../../controllers/enviarcorreo/correo.controller";

const router = Router();

//rutas del modulo registros de perros

router.post("/envia", loginController.envioCorreo);

export default router;