import {StudentDocument, StudentInput, StudentModel} from "../models/Student.model.js";
import {db} from "../libs/connectionDB";
class StudentService{

    async create(studentData : StudentDocument){
        try {
            const existStudent: StudentDocument | null = await this.findByEmail(studentData.email);
            if (existStudent) {message: `User ${existStudent.email} already exists`}
            const createstudent: StudentDocument = await StudentModel.create(studentData);
            return createstudent;
        }catch (error) {
            console.log(error);
        }
    }
    async findAll(): Promise<StudentDocument[]>{
        try{
            const students : StudentDocument[] = await StudentModel.find();
            return students;
        }catch(error){
            console.log("🚀 ~ :8 ~ StudentService ~ findAll ~ error:", error);
            throw error;
        }
    }
    async findByEmail(email:string){
        try{
            const students = await StudentModel.findOne({ email: email });
            return students;
        }catch(error){
            console.log("🚀 ~ :8 ~ StudentService ~ findAll ~ error:", error);
            throw error;
        }
    }

    async update(email:string, student: StudentInput){
        try {
            const UpdateStudent: StudentDocument | null = await  StudentModel.findOneAndUpdate({email},student,{returnOriginal: false})
            if (UpdateStudent){
                UpdateStudent.password = "";
                return UpdateStudent;
            }
        }catch(error){
            throw error;
        }

    }
}
export const studentService = new StudentService();