const express=require("express");
const app=express();
app.use(express.json());


const numberModel=require("../model/model");

app.post("/",async(req,res)=>{
    let addArr=[];
    let data=req.body;
    await numberModel.create(req.body);
    let data1=await numberModel.findOne(req.body);

async function add(){
    let arr=[];
    let c=0;
    let max;
    let j;
    let a;
    let b;
    let n1=data.num1.toString();
    let n2=data.num2.toString();
    if(n1.length>n2.length){
        max=n1.length;
        j=n2.length-1;
        a=n1;
        b=n2;
    }
    else {
        max=n2.length;
        j=n1.length-1;
        a=n2;
        b=n1;
    }
   
  
     let carry=0;
     let carry1=[];
     let sum=[];
     for(let i=max-1;i>=0;i--){
       if(j>=0){
         
           let carr1=Number(carry)+Number(a[i])+Number(b[j]);
          carry=0;
           j--;
           carr1=carr1.toString();
          
           if(carr1.length>1){
            if(i!==0){ carry1.unshift(carr1[0]);
             sum.unshift(carr1[1]);
             carry=carr1[0];
            }
            else{
               sum.unshift(carr1) 
            }
           }
           else{
               carry1.unshift(0);
               sum.unshift(carr1);
             
           }
       } 
       else{
         
             let carr1=Number(carry)+Number(a[i]);
           sum.unshift(carr1)   
           
          
           
       }
     } 
  
  
     let z=carry1.length-1;
     let bag=[];
     let bag1=[];
      for(let i=sum.length-1;i>=0;i--){
          let obj={};
          bag1.unshift(sum[i]);
          if(z>=0){
              bag.unshift(carry1[z--]);
              
             obj["carryString"]=bag.join("");
             obj["sumString"]=bag1.join("");
             addArr.push(obj);
          }
          else{
             obj["carryString"]=bag.join("");
             obj["sumString"]=bag1.join("");
             addArr.push(obj); 
          }
        
      }
        return addArr; 
    }

 let data33=await add();
 if(data33){
    console.log(data33)
 }

res.send({msg:"ok",data:data33});
    
});


module.exports=app;