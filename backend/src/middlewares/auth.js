import jwt from "jsonwebtoken";
import 'dotenv/config'; 


export function auth(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: 'No token provided' });
        }

      const token = authHeader.replace(/^Bearer\s+/i, '').trim();


        if (!token) { return res.status(401).json({ message: 'token no proporcionado' }) };

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = {
            id: decoded.correo || decoded._correo,
            rol: decoded.rol || decoded.rol || 'admin'
        };

        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') return res.status(401).json({ message: 'Token expirado' });
            return res.status(401).json({ message: 'Token inválido' });
        }

}


export function requiredAdmin(req, res, next) {
    //console.log('💫 Debug requiredAdmin middleware:');
    //console.log('User object:', req.user);
    //console.log('User role:', req.user?.rol);

    if (!req.user) {
        return res.status(401).json({ message: 'No autorizado' });
    }

    if (req.user.rol !== 'admin') {
        return res.status(403).json({ message: 'Acceso denegado' });
    }

    next();
}