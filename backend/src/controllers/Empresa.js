import joi from "joi";
import EmpresaModel from "../schemas/empresas.js";
import mongoose from "mongoose";
import counter from "../models/counter.js";

class EmpresaController {

    static createSchema = joi.object({

        name: joi.string().required().trim(),
        nit: joi.number().required().integer(),
        direccion: joi.string().required().trim()

    });

    static updateSchema = joi.object({
        name: joi.string().trim(),
        direccion: joi.string().trim()
    }).min(1);

    async create(req, res) {



        try {
            const { error, value } = EmpresaController.createSchema.validate(req.body);

            if (error) return res.status(400).json({ error: error.details[0].message });

            const nitExist = await EmpresaModel.findOne({
                nit: value.nit
            });

            if (nitExist) return res.status(400).json({ error: 'Ya existe una empresa con ese ID o NIT' });

            const seq = await counter.getNextSequence('empresaId');
            value.id_empresa = seq.toString();

            const empresa = await EmpresaModel.create(value);
            return res.status(201).json({ message: 'Empresa creada correctamente', empresa });
        }
        catch (e) {

            if (e.code === 11000) {
                return res.status(400).json({ error: 'Ya existe una empresa con ese ID o NIT' });
            }
            console.error(e);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }

    }
    // metodo getall



    async getAll(req, res) {

        try {

            const empresas = await EmpresaModel.find();
            return res.status(200).json({ message: 'Empresas obtenidas correctamente', count: empresas.length, empresas }

            );
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }


    /**
     * @description Obtiene una única empresa por su ID de MongoDB (_id)
     * @route GET /api/empresas/:id
     */

    async getById(req, res) {
        try {
            const id = req.query.id;  // Usando query param: 

            if (!id) {
                return res.status(400).json({ error: 'ID de empresa no proporcionado' });
            }

            const empresa = await EmpresaModel.findOne({
                id_empresa: id
            });

            if (!empresa) {
                return res.status(404).json({ error: 'Empresa no encontrada' });
            }

            return res.status(200).json({
                message: 'Empresa obtenida correctamente',
                empresa
            });
        } catch (e) {
            console.error('Error en getById:', e);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }

    async update(req, res) {
        const { error, value } = EmpresaController.updateSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });

        try {
            const id_empresa = req.query.id;

            if (!id_empresa) {
                return res.status(400).json({ error: 'ID de empresa no proporcionado' });
            }


            // Buscar por el campo id_empresa (que es tu secuencia)
            const empresa = await EmpresaModel.findOneAndUpdate(
                { id_empresa: id_empresa },   // filtro
                { $set: value },              // valores a actualizar
                { new: true }                 // para devolver el doc actualizado
            );
            if (!empresa) return res.status(404).json({ error: 'Empresa no encontrada' });

            return res.status(200).json({ message: 'Empresa actualizada correctamente', empresa });
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }




    }





}


export default new EmpresaController();