import {StudentDocument, StudentModel} from "../models/Student.model.js";
class StudentService{
    async findAll(): Promise<StudentDocument[]>{
        try{
            const students : StudentDocument[] = await StudentModel.find();
            return students;
        }catch(error){
            console.log("🚀 ~ :8 ~ StudentService ~ findAll ~ error:", error);
            throw error;
        }
    }
}
export const studentService = new StudentService();