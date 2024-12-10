import express from "express"
import mongoose from "mongoose";
import { dbconnection } from "./db/dbconnection.js";
import bodyParser from "body-parser"
// import router from "./routers/signupRouter.js";
import auth from "./auth.js"
import cors from "cors"

const app=express();

app.use(
    cors({
        origin:process.env.FRONTEND_URL,
        method:["GET","POST","PUT","DELETE"],
        credentials:true,
    })
);
app.use(bodyParser.json());
dbconnection();

app.use('/api/auth',auth);
export default app;