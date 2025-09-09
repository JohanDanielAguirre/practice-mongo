import mongoose from "mongoose";

export interface StudentInput {
    name: string;
    email: string;
    age: number;
    isActive: boolean;
}

export  interface StudentDocument extends StudentInput,mongoose.Document {}
    const studentSchema= new mongoose.Schema({
                                                 name: {type:String,required:true},
                                                 email: {type:String,required:true},
                                                 age: {type:Number, required:true},
                                                 isActive: {type:Boolean, required:true}
                                             },{collection: 'students'})
export const StudentModel = mongoose.model('Student',studentSchema)