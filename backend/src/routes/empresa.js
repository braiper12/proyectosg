import express from "express";
const route = express.Router()
import EmpresaController from "../controllers/Empresa.js";
import { auth, requiredAdmin } from "../middlewares/auth.js";

route.post('/', auth, requiredAdmin, EmpresaController.create);
route.get('/', auth, requiredAdmin, EmpresaController.getAll);
route.get('/byid', auth, requiredAdmin,  EmpresaController.getById);
route.put('/update', auth, requiredAdmin, EmpresaController.update);





export default route;