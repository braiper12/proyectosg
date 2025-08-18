import mongoose from "mongoose";
import Empresa from "../schemas/empresas";

class EmpresaModel {
    async create(data) {
        return await empresas.create(data);
    }

    async update(id_empresa, data) {
        return await empresas.findOneAndUpdate(
            { id_empresa: id_empresa },
            data,
            { new: true }
        );
    }

    async delete(id_empresa) {
        return await empresa.findOneAndDelete({ id_empresa: id_empresa });
    }

    async getAll() {
        return await empresas.find();
    }

     async getOne(idOrFilter) {
        if (!idOrFilter) return null;

        if (typeof idOrFilter === "string" && mongoose.isValidObjectId(idOrFilter)) {
            return await Empresa.findById(idOrFilter);
        }

        if (typeof idOrFilter === "object") {
            return await Empresa.findOne(idOrFilter);
        }

        return null;
    }
    async findOne(filter) {
        return await empresa.findOne(filter);
    }
}

export default new EmpresaModel();