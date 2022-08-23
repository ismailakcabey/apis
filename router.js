import  express  from "express";
import userModel from "./model.js";

const router = express.Router();


router.get('/',async(req,res)=>{
    try {
        const users = await userModel.find()
        console.log(users)
       return res.status(200).json(users)
    } catch (error) {
       return res.status(404).json({message : error.message})
    }
})


router.post('/',async(req,res)=>{
    try {
       const user = await userModel.create(req.body)
       console.log(user)
       return res.status(201).json(user)
    } catch (error) {
       return res.status(500).json({message : error.message})
    }
})


router.put('/update/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const {name , surname,mail , password} = req.body
        const updateUser = await userModel.findByIdAndUpdate(id,{
            name , surname , mail ,password
        }, {new:true})
        console.log(updateUser)
        return res.status(200).json(updateUser)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const deleteUser = await userModel.findByIdAndDelete(id,)
        console.log(deleteUser)
        return res.status(202).json(deleteUser)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
})

export default router