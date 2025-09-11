import express, { Express } from "express";
import { db } from "../src/libs/connectionDB";
import { studentRouter } from "../src/routes/students.routes";

const app: Express = express();

const port: number = 3000;

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use('/student', studentRouter)

db.then(()=>{
    app.listen(port, ()=>{
        console.log(`Server running on ${port} port`)
    })
})