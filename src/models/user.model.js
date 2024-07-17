import mongoose,{Schema} from "mongoose"

const userSchema=new Schema ({

    name:{
        type:String
    },
    phone:{
        type:String
    },
    password:{
        type:String
    }

},{timestamps:true})

export const User=mongoose.model("User",userSchema)
