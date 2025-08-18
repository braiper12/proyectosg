import mongoose from "mongoose";
import userSchemaModel from "../schemas/users.js";

class UsersModel {
    async create(data) {
        return await userSchemaModel.create(data);
    }

    async update(id, data) {
        return await userSchemaModel.findOneAndUpdate(
            { _id: new mongoose.Types.ObjectId(id) },
            data,
            { new: true }
        );
    }

    async delete(id) {
        return await userSchemaModel.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
    }

    async getAll() {
        return await userSchemaModel.find();
    }

    async getOne(idOrFilter) {
        if (!idOrFilter) return null;

        // si es string y válido como ObjectId -> findById
        if (typeof idOrFilter === 'string' && mongoose.isValidObjectId(idOrFilter)) {
            return await userSchemaModel.findById(idOrFilter).exec();
        }

        // si es ObjectId
        if (idOrFilter instanceof mongoose.Types.ObjectId) {
            return await userSchemaModel.findById(idOrFilter).exec();
        }

        // si es objeto y tiene _id válido -> findById
        if (
            typeof idOrFilter === 'object' &&
            idOrFilter._id &&
            mongoose.isValidObjectId(idOrFilter._id)
        ) {
            return await userSchemaModel.findById(idOrFilter._id).exec();
        }

        // si es un objeto filtro (ej: { correo: 'x' }) -> findOne
        if (typeof idOrFilter === 'object') {
            return await userSchemaModel.findOne(idOrFilter).exec();
        }

        // cualquier otro caso -> null
        return null;
    }

    async findOne(filter) {
        return await userSchemaModel.findOne(filter);
    }
}

export default new UsersModel();
