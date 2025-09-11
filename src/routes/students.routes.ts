import { Router } from "express";
import {studentController} from "../controllers/student.controller";

export const studentRouter = Router();

studentRouter.get('/', studentController.getAll);