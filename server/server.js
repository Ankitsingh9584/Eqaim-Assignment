const express=require("express");
const mongoose=require("mongoose");
const app=express();
const cors=require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());


const numberRoute=require("./route/number")

app.use("/addition",numberRoute)






app.listen(8080,async()=>{
    await mongoose.connect(process.env.DB_CONN)
    console.log("server started on port 8080")
})