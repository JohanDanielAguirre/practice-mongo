import {Request, Response} from 'express';
import {StudentDocument} from "../models/Student.model.js";
import {StudentService} from "../services/student.service.js"

class StudentController {
    async getAll(req: Request, res: Response) {
        try {
            const students : StudentDocument[] = await StudentService.findAll();
        }catch(err) {
            console.log(err);
        }
    }
}