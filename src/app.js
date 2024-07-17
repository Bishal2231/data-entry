
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()

app.use(cors({
    credentials:true
 
 }))
app.use (express.json({limit:"16kb"}))
app.use (express.urlencoded({extended : true}))
app.use (express.static("public"))
app.use(cookieParser())



import authorization from "./routes/user.route.js"

app.use("/users",authorization)


export {app}