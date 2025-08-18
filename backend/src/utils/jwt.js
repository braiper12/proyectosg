import jwt from 'jsonwebtoken';
import 'dotenv/config';


export function generateToken({ correo, rol }) {
    return jwt.sign({ correo, rol }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

