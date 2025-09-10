import {StudentDocument, StudentModel} from "../models/Student.model.js";

export class StudentService {
    async findAllStudents(): Promise<StudentDocument[]> {
        try {
            const students: StudentDocument[] = await StudentModel.find();
            return students;
        }catch (error) {
            console.log(error);
            throw error;
        }
    }
}