import {getConnection} from "../database/database";

const getAnimals = async (req, res) => {
    try {
        const connection= await getConnection();
        const result = await connection.query("SELECT id_login_users, correo, contrasena FROM login_users");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getAnimal = async (req, res) => {
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

const addAnimals = async (req, res) => {
    try {
        const {correo, contrasena, albergues_id_albergues=1} = req.body;

        if(correo === undefined || contrasena === undefined){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }

        const animales = { correo, contrasena, albergues_id_albergues };
        const connection= await getConnection();
        await connection.query("INSERT INTO login_users SET ?", animales);
        res.json({message: "registro agregado"});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const updateAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const {correo, contrasena, albergues_id_albergues=1} = req.body;

        if(id===undefined || correo === undefined || contrasena === undefined){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }

        const animales = {correo, contrasena, albergues_id_albergues };
        const connection= await getConnection();
        const result = await connection.query("UPDATE login_users SET ? WHERE id_login_users = ?", [animales, id]);
        res.json({message: "registro actualizado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteAnimal = async (req, res) => {
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
    getAnimals,
    getAnimal,
    addAnimals,
    updateAnimal,
    deleteAnimal,
};