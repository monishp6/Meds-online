const express=require('express');
const path=require("path");
const bcrypt=require("bcrypt");
const collection=require("./config");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');
app.get("/",(req,res)=>{
    res.render("login");
});
app.get("/signup",(req,res)=>{
    res.render("signup");
});
app.post("/signup", async (req, res)=>{
    const data = {
        name: req.body.Username,
        password: req.body.password
    }
    const userdata =await collection.insertMany(data); 
    console.log(userdata);
    });
const port=5000;
app.listen(port,()=>{
    console.log(`Server running on Port: ${port}`);
})