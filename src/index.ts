import express,{Express} from "express";
import {db} from "./libs/connectionDB.js";

const app: Express = express()

const port = process.env.PORT || 3000;
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/students',)
db.then(()=>{app.listen(port,()=>{console.log(`Server running on ${port} port: `)});})