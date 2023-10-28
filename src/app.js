const express = require('express')
const app = express()
import config from "../src/config.js";
import morgan from "morgan";
const cors = require('cors')

//Routes
import baseRoutes from "./routes/base.routes";
import loginRoutes from "./routes/login.routes";
import adminsRoutes from "./routes/rpersonal/admins.routes";
import voluntsRoutes from "./routes/rpersonal/volunts.routes";
import rmedicosperrosRoutes from "./routes/rmedicos/rmedicosperros.routes";
import rmedicosgatosRoutes from "./routes/rmedicos/rmedicosgatos.routes";
import rperrosRoutes from "./routes/ranimales/rperros.routes";
import rgatosRoutes from "./routes/ranimales/rgatos.routes";
import alimperrosRoutes from "./routes/alimentacion/alimperros.routes";
import alimgatosRoutes from "./routes/alimentacion/alimgatos.routes";
import ccperrosRoutes from "./routes/controlcomida/controlcomidaperros.routes.js";
import ccgatosRoutes from "./routes/controlcomida/controlcomidagatos.routes.js";
import enviacRoutes from "./routes/envioCorreo/envioCorreo.routes.js";

//settings
app.set('port', 4101 || 4202);
//app.use(cors());

app.use(express.json({ limit: '1024mb' }));
app.use(express.urlencoded({ extended: false }));
// Configurar opciones de CORS (ajusta esto según tus necesidades)
const corsOptions = {
    origin: 'http://localhost:4200', // Permitir solicitudes solo desde este origen
    methods: 'GET,PUT,POST,DELETE', // Métodos HTTP permitidos
  };
app.use(cors(corsOptions));

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/base", baseRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/admins", adminsRoutes);
app.use("/api/volunts", voluntsRoutes);
app.use("/api/rmedicosperros", rmedicosperrosRoutes);
app.use("/api/rmedicosgatos", rmedicosgatosRoutes);
app.use("/api/rperros", rperrosRoutes); 
app.use("/api/rgatos", rgatosRoutes); 
app.use("/api/alimperros", alimperrosRoutes); 
app.use("/api/alimgatos", alimgatosRoutes); 
app.use("/api/CCperros", ccperrosRoutes);
app.use("/api/CCgatos", ccgatosRoutes); 
app.use("/api/EV", enviacRoutes); 


export default app;