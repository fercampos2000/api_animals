import {getConnection} from "../../database/database";

//metodos para los registros de datos de perros del albergue

const getsRegistrosGatos = async (req, res) => {
    try {
        const connection= await getConnection();
        const result = await connection.query(`
        SELECT id_animal, 
        imagen, 
        nombre, 
        edad, 
        raza  
        FROM animal 
        WHERE tipo_animal = 'gato';
        `);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getRegistroGato = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection= await getConnection();
        const result = await connection.query(`
        SELECT id_animal,
        imagen, 
        nombre, 
        edad, 
        raza  
        FROM animal 
        WHERE tipo_animal = 'gato'
        AND id_animal = ${id};
        `);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const addRegistroGato = async (req, res) => {
    try {
        const {nombre, edad, raza, imagen} = req.body;

        if(nombre===undefined || edad === undefined || raza === undefined || imagen === undefined){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }
            const connection= await getConnection();
            await connection.query(`
            INSERT INTO animal (nombre, 
                edad, 
                raza, 
                imagen, 
                tipo_animal, 
                albergues_id_albergues) 
                VALUES ('${nombre}',
                '${edad}', 
                '${raza}',
                '${imagen}', 'gato', 1);
                `);
        res.json({message: "registro agregado"});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const updateRegistroGato = async (req, res) => {
    try {
       // const { id } = req.params;
        const {id_animal, nombre, edad, raza, imagen} = req.body;

        if(id_animal===undefined || nombre===undefined || edad === undefined || raza === undefined || imagen === undefined){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }

        const connection= await getConnection();
        await connection.query(`
        UPDATE animal 
        SET nombre = '${nombre}', 
        edad = '${edad}', 
        raza = '${raza}', 
        imagen = '${imagen}', 
        tipo_animal = 'gato', 
        albergues_id_albergues = 1 
        WHERE id_animal = ${id_animal};
        `);
        res.json({message: "registro actualizado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteRegistroGato = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection= await getConnection();
        await connection.query(`
        DELETE 
        FROM animal 
        WHERE id_animal = ${id} AND tipo_animal = 'gato';
        `);
        res.json({message: "registro eliminado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};



export const methods = {
    getsRegistrosGatos,
    getRegistroGato,
    addRegistroGato,
    updateRegistroGato,
    deleteRegistroGato,
};