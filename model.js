//this page for models
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    surName:{
        type:String,
        require:true
    },
    mail:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

export default mongoose.model("User",userSchema)