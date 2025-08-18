import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routesUsers from './src/routes/users.js';
import { connectDB } from './src/config/db.js';
import routesEmpresa from './src/routes/empresa.js';

dotenv.config();

// Conexión a MongoDB
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ruta de prueba
app.get('/', (req, res) => {
    res.json({
        message: 'API FUNCIONA OK',
        timestamp: new Date().toISOString()
    });
});

// ruta validar status server
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime()
    });
});

// definir routes public
app.use('/users', routesUsers);
app.use('/empresa', routesEmpresa);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('☻ server corriendo en puerto', PORT);
});

export default app;
