

import {DBCONNECT} from "./db/db.js"
import {app} from "./app.js"
import dotenv from "dotenv"

dotenv.config()


DBCONNECT()
.then(
    ()=>{

        app.listen(process.env.PORT,(req,res)=>{
            console.log( `server is running on port ${process.env.PORT}`)
        })
        app.on("error",(error)=>{
            console.log(error)
            process.exit(1)
        })

        app.get('/', (req, res) => {
            res.send('Server is running');
        });


    }


)
.catch((err)=>{
    console.log(err)
    throw new Error(err)
})