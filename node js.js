const express = require("express");
const app=express();
const path=require("path");

app.get("/veg",(req,res)=>{
    res.sendFile(path.join(__dirname,"veeggg.html"));
})
app.get("/nonveg",(req,res)=>{
    res.sendFile(path.join(__dirname,"toy.html"));
})
app.get("/vegan",(req,res)=>{
    res.sendFile(path.join(__dirname,"pizza.html"));
})


app.listen(2004   , ()=>{
    console.log("Server is running");
})