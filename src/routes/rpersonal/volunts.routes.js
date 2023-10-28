import {Router} from "express";
import { methods as loginController } from "../../controllers/rpersonal/volunts.controller";

const router = Router();

//rutas del modulo voluntarios

router.get("/consult", loginController.getPersonasVol);
router.get("/consult/:id", loginController.getPersonaVol);
router.post("/agreg", loginController.addPersonaVol);
router.put("/edit", loginController.updatePersonaVol);
router.delete("/delete/:id", loginController.deleteLoginVol);

export default router;