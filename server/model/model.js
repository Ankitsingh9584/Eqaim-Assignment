const e = require("express");
const {Schema,model}=require("mongoose");

const numberSchema=new Schema({
    num1:Number,
    num2:Number
});


const numberModel=model("number",numberSchema);

module.exports=numberModel;