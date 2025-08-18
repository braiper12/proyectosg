import usersModel from '../models/users.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt.js';


class UsersController {
    async register(req, res) {
        try {
            const { correo, nombre, password, rol, id_empresa } = req.body;

            const userExist = await usersModel.findOne({ correo });
            if (userExist) {
                return res.status(400).json({ error: 'El usuario ya se encuentra registrado' });
            }

            const claveEncripted = await bcrypt.hash(password, 10);

            const data = await usersModel.create({
                nombre,
                correo,
                password: claveEncripted,
                rol, // Asignar rol por defecto si no se proporciona
                id_empresa, // Asumiendo que el ID de la empresa viene del token del usuario autenticado
            });

            res.status(201).json({ message: 'Usuario creado correctamente', user: data });
        } catch (e) {
            console.error(e);
            res.status(500).send({ error: 'Error interno del servidor' });
        }
    }

    async login(req, res) {
    try {
      const { correo, password } = req.body;

      if (!correo || !password) {
        return res.status(400).json({ error: 'Faltan campos: correo y password' });
      }

      const userExist = await usersModel.getOne({ correo });
      if (!userExist) return res.status(400).json({ error: 'El usuario no existe' });

      // admite ambos nombres de campo para no romper mientras migras datos
      const hash = userExist.password || userExist.contraseña;
      if (!hash) return res.status(500).json({ error: 'Usuario sin contraseña almacenada' });

      const passValidate = await bcrypt.compare(password, hash);
      if (!passValidate) return res.status(400).json({ error: 'Clave no válida' });

      //  generar un JWT 

      const token = generateToken({correo: userExist.correo, rol: userExist.rol});

      return res.status(200).json({ msg: 'Usuario autenticado', token });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error interno' });
    }
  }
}

export default new UsersController();
