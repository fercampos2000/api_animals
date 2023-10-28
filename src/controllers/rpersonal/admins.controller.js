import {getConnection} from "../../database/database";

//metodos para los administradores del albergue

const getPersonasAdm = async (req, res) => {
    try {
        const connection= await getConnection();
        const result = await connection.query("SELECT id_persona, nombre, apellido, edad, grado_academico, telefono, direccion FROM bd_animals.persona WHERE rol = 'Administrador';");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getPersonaAdm = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection= await getConnection();
        const result = await connection.query("SELECT id_persona, nombre, apellido, edad, grado_academico, telefono, direccion FROM bd_animals.persona WHERE rol = 'Administrador' AND id_persona = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const addPersonaAdm = async (req, res) => {
    try {
        const {rol = "Administrador", nombre, apellido, edad, grado_academico, telefono, direccion, albergues_id_albergues = 1} = req.body;

        if(rol===undefined || nombre === undefined || apellido === undefined || edad === undefined || grado_academico === undefined || telefono === undefined || direccion === undefined || albergues_id_albergues === undefined){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }

        const personas = { rol, nombre, apellido, edad, grado_academico, telefono, direccion, albergues_id_albergues};
        const connection= await getConnection();
        await connection.query("INSERT INTO persona SET ?", personas);
        res.json({message: "registro agregado"});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const updatePersonaAdm = async (req, res) => {
    try {
        //const { id } = req.params;
        const {id_persona, nombre, apellido, edad, grado_academico, telefono, direccion, albergues_id_albergues = 1} = req.body;
        const rol = "Administrador";
        if(rol===undefined || nombre === undefined || apellido === undefined || edad === undefined || grado_academico === undefined || telefono === undefined || direccion === undefined || albergues_id_albergues === undefined){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }

        const connection= await getConnection();
        const result = await connection.query(`
        UPDATE persona SET 
            rol='${rol}', 
            nombre='${nombre}',
            apellido='${apellido}',  
            edad= ${edad}, 
            grado_academico= '${grado_academico}',  
            telefono= '${telefono}', 
            direccion= '${direccion}', 
            albergues_id_albergues = ${albergues_id_albergues}
        WHERE id_persona=${id_persona};`);
        res.json({message: "registro actualizado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteLoginAdm = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection= await getConnection();
        const result = await connection.query("DELETE FROM persona WHERE id_persona= ?", id);
        res.json({message: "registro eliminado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};



export const methods = {
    getPersonasAdm,
    getPersonaAdm,
    addPersonaAdm,
    updatePersonaAdm,
    deleteLoginAdm,
};