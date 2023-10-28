import {getConnection} from "../../database/database";

//metodos para los registros medicos de gatos del albergue

const getsCCperros = async (req, res) => {
    try {
        const connection= await getConnection();
        const result = await connection.query(`
        SELECT idtb_registro_comida, 
        cantidad_ingreso, 
        fecha_ingreso 
        FROM tb_registro_comida 
        WHERE tipo_animal = 'perro';
        `);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getCCperro = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection= await getConnection();
        const result = await connection.query(`
        SELECT cantidad_ingreso, 
        fecha_ingreso 
        FROM tb_registro_comida 
        WHERE tipo_animal = 'perro' 
        AND  idtb_registro_comida = ${id};
        `);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const addCCperro= async (req, res) => {
    try {
        const {cantidad_ingreso, fecha_ingreso} = req.body;

        if(cantidad_ingreso===undefined || fecha_ingreso===undefined){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }

        const connection= await getConnection();
        await connection.query(`
        INSERT INTO tb_registro_comida (
            cantidad_ingreso, 
            tipo_animal, 
            albergues_id_albergues, 
            fecha_ingreso) 
            VALUES (
            '${cantidad_ingreso}', 
            'perro', 
            1, 
            '${fecha_ingreso}');
          `);
        res.json({message: "registro agregado"});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const updateCCperro = async (req, res) => {
    try {
        //const { id, nombreanimal } = req.params;
        const {idtb_registro_comida, cantidad_ingreso, fecha_ingreso} = req.body;

        if(idtb_registro_comida===undefined || cantidad_ingreso===undefined || fecha_ingreso===undefined){
            res.status(400).json({message:"Mala peticion. por favor llenar todos los campos"});
        }

        const connection= await getConnection();
        await connection.query(`
        UPDATE tb_registro_comida 
        SET cantidad_ingreso = ${cantidad_ingreso}, 
        albergues_id_albergues = 1, 
        fecha_ingreso = '${fecha_ingreso}' 
        WHERE idtb_registro_comida = ${idtb_registro_comida} 
        AND tipo_animal = 'perro';
        `);
        res.json({message: "registro actualizado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteCCperro = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection= await getConnection();
        const result = await connection.query(`
        DELETE FROM tb_registro_comida 
        WHERE idtb_registro_comida = ${id} 
        AND tipo_animal = 'perro';
        `);
        res.json({message: "registro eliminado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};



export const methods = {
    getsCCperros,
    getCCperro,
    addCCperro,
    updateCCperro,
    deleteCCperro,
};