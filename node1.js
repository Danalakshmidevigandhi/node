const express = require("express");
const app=express();
const path=require("path");

app.get("/veg",(req,res)=>{
    res.sendFile(path.join(__dirname,"veeggg.html"));
})
app.get("/toy",(req,res)=>{
    res.sendFile(path.join(__dirname,"toy.html"));
})
app.get("/pizza",(req,res)=>{
    res.sendFile(path.join(__dirname,"pizza.html"));
})


app.listen(3548, ()=>{
    console.log("Server is running");
})