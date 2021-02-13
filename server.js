const express=require('express');

const app=express();
const db= require('./db/cars')

app.get("/cars",async (req,res)=>{
    const cars=await db.getAllCars()
    res.status(200).json({cars});
});

app.post("/cars",async (req,res)=>{
    const result=await db.CreateCar(req.body)
    res.status(200).json({id:result[0]});
});

app.listen(1337,()=>console.log('server run in 1337 port'))