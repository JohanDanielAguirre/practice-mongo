import mongoose from "mongoose";

const connectionString = `mongodb://localhost:27017`;
export const db = mongoose.connect(connectionString, { dbName:'PracticaExpress' }).then(() => {console.log("conectado a mongodb")}).catch((err) => {console.error(err);});