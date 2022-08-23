// This page for mongo connected

import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://ismailakcabey:nodejs@denemedatabase.an06h.mongodb.net/?retryWrites=true&w=majority')
        console.log("db connectiion successfull")
    } catch (error) {
        console.log({message: error.message})
    }
}