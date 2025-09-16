import { Router } from "express";
import { studentController } from "../controllers/student.controller.js";
import {auth} from "../middlewares/auth.middleware";

export const studentRouter = Router();

studentRouter.post('/create', studentController.create);
studentRouter.get('/', studentController.getAll);
studentRouter.post('/getByEmail', studentController.getByEmail);
studentRouter.post('/login', studentController.login);
studentRouter.put('/update/:email',auth, studentController.update);