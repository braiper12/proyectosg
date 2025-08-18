import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        correo: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        rol: {
            type: String,
            enum: ["admin", "usuario"],
            default: "usuario",
            required: true
        },
        id_empresa: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('users', userSchema)