
const express=require("express");
const app=express();
app.use(express.json());


app.post("/upper",(req,res)=>{
    
   let aa=req.body.inp.toString();
    let data=aa.toUpperCase();
    console.log(data);
    res.send(data)
});


module.exports=app;