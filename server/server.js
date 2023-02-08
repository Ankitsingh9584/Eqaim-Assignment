const express=require("express");
const mongoose=require("mongoose");
const app=express();
const cors=require("cors")
app.use(express.json());
app.use(cors());

const numberRoute=require("./route/number")

app.use("/addition",numberRoute)






app.listen(8080,async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/equim");
    console.log("server started on port 8080")
})