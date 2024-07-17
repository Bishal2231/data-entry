import {User} from "../models/user.model.js"
import { asynchandler } from "../utlis/asynchandler.js"
import {apierror} from "../utlis/apierror.js"
import { apiresponse } from "../utlis/apiresponse.js"


const authorization=asynchandler(async(req,res)=>{

 try {
       const {name,phone,password}=req.body;
   
       if(!(name||phone||password)){
         throw new apierror(400,"unauthorized access")
   
       }
   
       const user=await User.create({
           name,
           phone,
           password
       })
   
       console.log(user)
       
       const registereduser=await User.findById(user?._id).select("-phone -password")
   
       if(!registereduser){
           throw new apierror(401,registereduser,"aunthorixed acces")
       }
 } catch (error) {
    throw new apierror(500,"bad request")
    console.log(error)
 }

return res.status(200).json(
    new apiresponse(200,"data entry sucessfull")
)

})

export {authorization}

