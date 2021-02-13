const express=require('express');

const app=express();
const db= require('./db/cars')
const bodyparser=require('body-parser')

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

app.get("/cars",async (req,res)=>{
    const cars=await db.getAllCars()
    res.status(200).json({cars});
});

app.post("/cars",async (req,res)=>{
    const result=await db.CreateCar(req.body)
    res.status(200).json({id:result[0]});
});

app.patch("/cars/:id",async (req,res)=>{
    const result=await db.UpdateCar(req.params.id,req.body)
    res.status(200).json({id});
});

app.delete("/cars/:id",async (req,res)=>{
    const result=await db.UpdateCar(req.params.id)
    res.status(200).json({id});
});


app.listen(1337,()=>console.log('server run in 1337 port'))