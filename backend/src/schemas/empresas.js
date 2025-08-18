import mongoose from "mongoose";
import counter from "../models/counter.js";

const empresaSchema = new mongoose.Schema(
    {
        id_empresa: { type: String, required: true, unique: true },
        name: {
            type: String, required: true, trim: true
        },

        nit: { type: Number, required: true, unique: true },
        direccion: {
            type: String, required: true, trim: true
        },
    }
);

empresaSchema.pre('save', async function (next) {
    if (this.isNew && !this.id_empresa) {
        try {
            const seq = await counter.getNextSequence('empresaId');
            this.id_empresa = seq.toString();
        } catch (error) {
            console.error('Error generando id_empresa:', error);
            next(error);
        }
    }
    next();
});


export default mongoose.model('Empresa', empresaSchema);


