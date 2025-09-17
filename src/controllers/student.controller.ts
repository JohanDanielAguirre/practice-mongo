import {Request, Response} from 'express';
import {StudentDocument, StudentInput, StudentModel} from "../models/Student.model.js";
import {studentService} from "../services/student.service.js"
import {securityService} from "../services/security.service.js"
import bcrypt from "bcrypt";

class StudentController {
    async create(req: Request, res: Response){
        try{
            req.body.password = await securityService.encryptPassword(req.body.password);
            const students = await studentService.create(req.body);
            res.json(students);
        }catch(error){
            res.json(error);
        }
    }
    async getAll(req: Request, res: Response) {
        try {
            const students : StudentDocument[] = await studentService.findAll();
        }catch(err) {
            console.log(err);
        }
    }
    async getByEmail(req: Request, res: Response) {
        try {
            const students = await studentService.findByEmail(req.body.email);
        }catch(err) {
            console.log(err);
        }
    }
    async login(req: Request, res: Response) {
        try {
            const existStudent: StudentDocument | null = await studentService.findByEmail(req.body.email);
            const currentPassword = existStudent?.password;
            if (!existStudent) res.status(400).json({message: `Student ${req.body.email} doesn't exist`});

            if (currentPassword) {
                const isMatch = await securityService.comparePassword(req.body.password, existStudent.password);
                if (!isMatch) res.status(403).json({message: `Password or email incorrect`});
                const token = await securityService.generateToken(existStudent.id, existStudent.email, existStudent.role)
                res.status(200).json({
                    message: "Login successful",
                    token
                })
            }
        } catch (error) {
            res.status(500).json({
                message: "User or password incorrect"
            })
        }
    }
    async update(req: Request, res: Response) {
        try {
            const email = req.params.email;
            const student = await studentService.update(email,req.body as StudentInput);
            if(student === null){
                res.status(400).json({message: `USER ${email} not found`});
            }
            res.status(200).json({})
        }catch(err) {
            res.json(err)
        }
    }
}
export const studentController = new StudentController();