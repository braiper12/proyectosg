import mongoose from 'mongoose';
import counter from '../models/counter.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // inicializar contadores si es necesario
        const exists = await counter.findById('empresaId');

        if (!exists) {
            await counter.create({ _id: 'empresaId', seq: 100000 });
        }


       
        console.log('✅ Conectado a MongoDB');
    } catch (error) {
        console.error('❌ Error conectando a MongoDB:', error);
        process.exit(1); // Detener la app si no se conecta
    }
};
