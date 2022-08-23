// this page main
import express from 'express';

import { connectDB } from './db.js';
import router from './router.js';

const app =express();

app.use(express.json())

app.use('/',router)

app.listen(process.env.PORT || 8080,()=>{
    console.log(8080+"portunda index.js calisiyorrr");
    connectDB()
})