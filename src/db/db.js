import mongoose from "mongoose"
import {DB_NAME} from "../constant.js"
// mongoose.config()
import dotenv from "dotenv"
// import { asynchandler } from "../utlis/asynchandler.js"

dotenv.config()
export const DBCONNECT=async()=>{
    try {
    const connectionInstance=await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)

        if(!connectionInstance){
            console.log("mongo db connection failed")
        }
        console.log(  `database ias connected sucessfully`)
} catch (error) {
    throw new Error(error);
}}
