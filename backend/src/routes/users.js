import express from 'express'
const route = express.Router()
import usersController from '../controllers/users.js';

route.post('/register', usersController.register);
route.post('/login', usersController.login);



export default route;