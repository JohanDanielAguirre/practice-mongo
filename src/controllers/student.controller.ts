import {Request, Response} from 'express';
import {StudentDocument} from "../models/Student.model.js";
import {studentService} from "../services/student.service.js"

class StudentController {
    async getAll(req: Request, res: Response) {
        try {
            const students : StudentDocument[] = await studentService.findAll();
        }catch(err) {
            console.log(err);
        }
    }
}
export const studentController = new StudentController();