import mongoose from "mongoose";
import { type } from "os";

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
},
{timestamps:true}
);

const User=mongoose.model("user",userSchema);

export default User;

