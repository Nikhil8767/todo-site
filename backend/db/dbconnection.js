import { log } from "console";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();


export const dbconnection=()=>{
    mongoose.connect(process.env.MONGODB_URL,{

    })
    .then(()=>{
        console.log("mongodb connected successfully");
        
    })
    .catch((err)=>{
        console.error("error in connecting db",err);
        process.exit(1);
    })
}