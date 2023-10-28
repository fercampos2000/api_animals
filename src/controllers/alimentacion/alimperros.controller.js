import {getConnection} from "../../database/database";

//metodos para los registros de alimentacion de perros del albergue

const getsAlimentacionPerros = async (req, res) => {
    try {
        const connection= await getConnection();
        const result = await connection.query(`
        SELECT id_tb_sectores, 
        sector, 
        estado_sector, 
        fecha 
        FROM sectores 
        WHERE tipo_animal = 'perro';
        `);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getAlimentacionPerro = async (req, res) => {
    try {
        console.log(req.params);
        const { fecha } = req.params;
        const connection= await getConnection();
        const result = await connection.query(`
        SELECT id_tb_sectores, 
        sector, 
        estado_sector, 
        fecha 
        FROM sectores 
        WHERE tipo_animal = 'perro' 
        AND fecha = '${fecha}';
        `);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const addAlimentacionPerro = async (req, res) => {
    try {
        const {sector1, estado_sector1, fecha1,
               sector2, estado_sector2, fecha2,
               sector3, estado_sector3, fecha3,
               sector4, estado_sector4, fecha4
              } = req.body;

        if(
            sector1 === undefined || estado_sector1 === undefined || fecha1 === undefined || 
            sector2 === undefined || estado_sector2 === undefined || fecha2 === undefined ||
            sector3 === undefined || estado_sector3 === undefined || fecha3 === undefined ||
            sector4 === undefined || estado_sector4 === undefined || fecha4 === undefined
          ){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }
            const connection= await getConnection();
            await connection.query(`
            INSERT INTO sectores 
            (sector, tipo_animal, estado_sector, fecha, albergues_id_albergues) 
            VALUES 
            ('${sector1}', 'perro', '${estado_sector1}', '${fecha1}', '1'), 
            ('${sector2}', 'perro', '${estado_sector2}', '${fecha2}', '1'), 
            ('${sector3}', 'perro', '${estado_sector3}', '${fecha3}', '1'), 
            ('${sector4}', 'perro', '${estado_sector4}', '${fecha4}', '1');
                `);
        res.json({message: "registro agregado"});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const updateAlimentacionPerro = async (req, res) => {
    try {
        const { fecha } = req.params;
        const {sector1, estado_sector1, fecha1,
               sector2, estado_sector2, fecha2,
               sector3, estado_sector3, fecha3,
               sector4, estado_sector4, fecha4
           } = req.body;

        if(
            sector1 === undefined || estado_sector1 === undefined || fecha1 === undefined || 
            sector2 === undefined || estado_sector2 === undefined || fecha2 === undefined ||
            sector3 === undefined || estado_sector3 === undefined || fecha3 === undefined ||
            sector4 === undefined || estado_sector4 === undefined || fecha4 === undefined
           ){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }

        const connection= await getConnection();
        await connection.query(`
        UPDATE sectores 
        SET estado_sector = 
        CASE sector 
        WHEN '${sector1}' THEN '${estado_sector1}' 
        WHEN '${sector2}' THEN '${estado_sector2}' 
        WHEN '${sector3}' THEN '${estado_sector3}' 
        WHEN '${sector4}' THEN '${estado_sector4}' 
        END, 
        fecha = CASE sector 
        WHEN '${sector1}' THEN '${fecha1}' 
        WHEN '${sector2}' THEN '${fecha2}' 
        WHEN '${sector3}' THEN '${fecha3}' 
        WHEN '${sector4}' THEN '${fecha4}' 
        END 
        WHERE tipo_animal = 'perro' AND fecha = '${fecha}';
        `);
        res.json({message: "registro actualizado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteAlimentacionPerro = async (req, res) => {
    try {
        console.log(req.params);
        const { fecha } = req.params;
        const connection= await getConnection();
        const result = await connection.query(`
        DELETE FROM sectores 
        WHERE tipo_animal = 'perro'
        AND fecha = '${fecha}' 
        AND sector IN ('1', '2', '3', '4');
        `);
        res.json({message: "registro eliminado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};



export const methods = {
    getsAlimentacionPerros,
    getAlimentacionPerro,
    addAlimentacionPerro,
    updateAlimentacionPerro,
    deleteAlimentacionPerro,
};