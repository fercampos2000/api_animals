import {getConnection} from "../../database/database";

//metodos para los registros medicos de gatos del albergue

const getsRmedicosGatos = async (req, res) => {
    try {
        const connection= await getConnection();
        const result = await connection.query(`
        SELECT id_dato_medico,
        animal.nombre, 
        agresividad, 
        esterilizacion, 
        vacuna1, 
        vacuna2, 
        otro 
        FROM datos_medicos 
        JOIN animal 
        ON datos_medicos.animal_id_animal = animal.id_animal
        WHERE tipo_animal = 'gato';`);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getRmedicoGato = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection= await getConnection();
        const result = await connection.query(`
        SELECT id_dato_medico,
        animal.nombre, 
        agresividad, 
        esterilizacion, 
        vacuna1, 
        vacuna2, 
        otro 
        FROM datos_medicos 
        JOIN animal ON datos_medicos.animal_id_animal = animal.id_animal 
        WHERE id_dato_medico = ${id} AND tipo_animal = 'gato';`);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const addRmedicoGato = async (req, res) => {
    try {
        console.log(req.params);
       // const { nombreanimal } = req.params;
        const {nombreanimal, agresividad, esterilizacion, vacuna1, vacuna2, otro} = req.body;

        if(nombreanimal===undefined || agresividad===undefined || esterilizacion === undefined || vacuna1 === undefined || vacuna2 === undefined || otro === undefined){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }
            const connection= await getConnection();
            await connection.query(`
            INSERT INTO datos_medicos (animal_id_animal, agresividad, esterilizacion, vacuna1, vacuna2, otro) 
            VALUES (((SELECT id_animal FROM animal WHERE nombre = '${nombreanimal}')), '${agresividad}', '${esterilizacion}', '${vacuna1}', '${vacuna2}', '${otro}');
                `);
        res.json({message: "registro agregado"});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const updateRmedicoGato = async (req, res) => {
    try {
        //const { id, nombreanimal } = req.params;
        const {id_dato_medico, nombreanimal, agresividad, esterilizacion, vacuna1, vacuna2, otro} = req.body;

        if(id_dato_medico===undefined || nombreanimal===undefined || agresividad===undefined || esterilizacion === undefined || vacuna1 === undefined || vacuna2 === undefined || otro === undefined){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }

        const connection= await getConnection();
        await connection.query(`
        UPDATE datos_medicos 
        SET animal_id_animal = (SELECT id_animal FROM animal WHERE nombre = '${nombreanimal}'), 
        agresividad = '${agresividad}', 
        esterilizacion = '${esterilizacion}', 
        vacuna1 = '${vacuna1}', 
        vacuna2 = '${vacuna2}', 
        otro = '${otro}' 
        WHERE id_dato_medico = ${id_dato_medico};
        `);
        res.json({message: "registro actualizado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteRmedicoGato = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection= await getConnection();
        const result = await connection.query(`
        DELETE FROM 
        datos_medicos 
        WHERE id_dato_medico= ${id};`);
        res.json({message: "registro eliminado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};



export const methods = {
    getsRmedicosGatos,
    getRmedicoGato,
    addRmedicoGato,
    updateRmedicoGato,
    deleteRmedicoGato,
};