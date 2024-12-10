import express from 'express'

import User from '../model/formSchema.js'
import bcrypt from "bcryptjs"

const router =express.Router();


// router.post('/signup',async(req,res)=>{
    export const signup=async(req,res)=>{ 
    const {userName,email,password}=req.body;

    try {
        const userExits=await User.findOne({email});
        if(userExits){
            return res.status(400).json({message:'user already exist'})
        }

        //here i have to use bcrypt for hash password remeber this 
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser=new User({
            userName,
            email,
            password:hashedPassword
        });

        await newUser.save();

        return res.status(201).json({msg:'user regiser successfully'});


    } catch (error) {
        console.error('error during signup',error);
        return res.status(500).json({msg:'server error '})
        
    }
};

// router.post("/login",async(req,res)=>{
    export const login=async(req,res)=>{ 
    const {email,password}=req.body;

    try {
        const user=await User.findOne({email});
        if(!user){
           return res.status(404).res.json({msg:"user not found"});
        }

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
           return res.status(400).json({msg:"invalid creditentials"})
        }

      return  res.status(200).json({msg:"login successfully"})
    } catch (error) {
        console.error('Error during login:', error);
       return res.status(500).json({ message: 'Server error' });
    }
};

