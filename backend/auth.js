import express from "express"
import bcrypt from "bcryptjs"

import {signup,login} from "./routers/signupRouter.js"

const router=express.Router();

router.post("/signup",signup);

router.post("/",login);

export default router