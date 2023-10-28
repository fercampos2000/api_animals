import {getConnection} from "../../database/database";

//metodos para los registros de datos de perros del albergue

const getsRegistrosPerros = async (req, res) => {
    try {
        const connection= await getConnection();
        const result = await connection.query(`
        SELECT id_animal, 
        imagen, 
        nombre, 
        edad, 
        raza  
        FROM animal 
        WHERE tipo_animal = 'perro';
        `);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getRegistroPerro = async (req, res) => {
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
        WHERE tipo_animal = 'perro'
        AND id_animal = ${id};
        `);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const addRegistroPerro = async (req, res) => {
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
                '${imagen}', 'perro', 1);
                `);
        res.json({message: "registro agregado"});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const updateRegistroPerro = async (req, res) => {
    try {
        //const { id } = req.params;
        const {id_animal, nombre, edad, raza, imagen} = req.body;

        if(id_animal === undefined || nombre===undefined || edad === undefined || raza === undefined || imagen === undefined){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }

        const connection= await getConnection();
        await connection.query(`
        UPDATE animal 
        SET nombre = '${nombre}', 
        edad = '${edad}', 
        raza = '${raza}', 
        imagen = '${imagen}', 
        tipo_animal = 'perro', 
        albergues_id_albergues = 1 
        WHERE id_animal = ${id_animal};
        `);
        res.json({message: "registro actualizado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteRegistroPerro = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection= await getConnection();
        const result = await connection.query(`
        DELETE 
        FROM animal 
        WHERE id_animal = ${id} AND tipo_animal = 'perro';
        `);
        res.json({message: "registro eliminado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};



export const methods = {
    getsRegistrosPerros,
    getRegistroPerro,
    addRegistroPerro,
    updateRegistroPerro,
    deleteRegistroPerro,
};