import express from "express"
import mongoose from "mongoose";
import { dbconnection } from "./db/dbconnection.js";
import bodyParser from "body-parser"
// import router from "./routers/signupRouter.js";
import auth from "./auth.js"
import cors from "cors"

const app=express();


const allowedOrigins = [
    "http://localhost:5173",  // Local development URL
    process.env.FRONTEND_URL,  // Production URL from environment variables
  ];


// app.use(
//     cors({
//         origin:process.env.FRONTEND_URL,
//         method:["GET","POST","PUT","DELETE"],
//         credentials:true,
//     })
// );

app.use(
    cors({
      origin: (origin, callback) => {
        // Allow the request if the origin is in the allowedOrigins list
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST", "PUT", "DELETE"],  // Allowed methods
      credentials: true,  // Allow credentials like cookies
    })
  );
  
app.use(bodyParser.json());
dbconnection();

app.use('/api/auth',auth);
export default app;