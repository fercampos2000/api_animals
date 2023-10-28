import {getConnection} from "../database/database";

/*const getLogins = async (req, res) => {
    try {
        const connection= await getConnection();
        const result = await connection.query("SELECT id_login_users, correo, contrasena FROM login_users");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};
*/

const getLogins = async (req, res) => {
    try {
        const {correo, contrasena} = req.body;
        const connection= await getConnection();
        const result = await connection.query(`
        SELECT COUNT(*) AS VALOR FROM login_users WHERE correo = '${correo}' AND contrasena = PASSWORD('${contrasena}');
        `);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getLogin = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection= await getConnection();

        const result = await connection.query("SELECT id_login_users, correo, contrasena FROM login_users WHERE id_login_users = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const addLogin = async (req, res) => {
    try {
        const {correo, contrasena} = req.body;

        if(correo === undefined || contrasena === undefined){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }
        const connection= await getConnection();
        await connection.query(`
        INSERT INTO login_users 
        (correo, contrasena,albergues_id_albergues) 
        VALUES ("${correo}", PASSWORD("${contrasena}"),'1');
        `);
        res.json({message: "registro agregado"});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateLogin = async (req, res) => {
    try {
        //const { id } = req.params;
        const {id_login_users, correo, contrasena, albergues_id_albergues=1} = req.body;

        if(id_login_users===undefined || correo === undefined || contrasena === undefined){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }

        const animales = {correo, contrasena, albergues_id_albergues };
        const connection= await getConnection();
        const result = await connection.query(`
        UPDATE login_users 
        SET correo = '${correo}', 
        contrasena = '${contrasena}', 
        WHERE id_login_users = ${id_login_users};
        `);
        res.json({message: "registro actualizado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteLogin = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection= await getConnection();
        const result = await connection.query("DELETE FROM login_users WHERE id_login_users = ?", id);
        res.json({message: "registro eliminado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const methods = {
    getLogins,
    getLogin,
    addLogin,
    updateLogin,
    deleteLogin,
};