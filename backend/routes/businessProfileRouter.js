import express from "express";
import { clerkMiddleware } from "@clerk/express";
import multer from "multer";
import path from "path"

const businessProfileRouter = express.Router();

businessProfileRouter.use(clerkMiddleware());

//multer setup
const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, path.join(process.cwd(), "uploads"))
    },
    filename : (req, file, cb)=>{
        const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, `business-${unique}${ext}`)
    }
})

const upload = multer({storage})

//create eroute