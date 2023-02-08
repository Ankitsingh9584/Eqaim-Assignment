
import {Box, Button, HStack, Input, Text, VStack} from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios"
export function Addition(){
const [numb, setNumber]=useState({num1:"",num2:""});
const [data,setData]=useState([]);
const [display,setDisplay]=useState(false);


const callApi=async()=>{
    if(numb.num1<0 || numb.num2<0){
        return window.alert("please provide number greater than zero")
    }
let res=await  axios.post("http://localhost:8080/addition",numb);
if(res){
    setDisplay(true)
    setData(res.data.data);
   
}
}
console.log(data)

    return(
        <>
        <Box  h={"143px"} bgColor={"#E9E9E9"} >
             
             <Text fontWeight={"800"} fontSize={"48px"} my={0} marginLeft={"91"} paddingTop={"28px"}
             
             >Step Addition</Text>

        </Box>
<VStack my={"60"}>
    <HStack >
        <Text marginRight={"64"}  fontSize={"32px"} type={"number"}>First Number:</Text>
        <Input onChange={(e)=>setNumber({...numb,num1:Number(e.target.value)})} bgColor={"#E9E9E9"} fontSize={"32px"} h={"54px"} w={"697px"}/>
    </HStack>
    <HStack >
        <Text  marginRight={"20"}  fontSize={"32px"} type={"number"}>Second Number:</Text>
        <Input onChange={(e)=>setNumber({...numb,num2:Number(e.target.value)})} bgColor={"#E9E9E9"} fontSize={"32px"}  h={"54px"} w={"697px"}/>
    </HStack>
  
</VStack>
<Button onClick={callApi} borderColor={"#A8A8A8"}  fontWeight={400} px={"46px"}  h={"48px"} fontSize={"32px"}  
    marginLeft={935} my={-20}>Generate Steps</Button>


{
    display && 
    <VStack  w={"full"} h={"600px"} bgColor={"#E9E9E9"} color={"2px solid red"} my={50}>
    <Box  margin={"auto"} marginTop={50} align={'center'}  w={"95%"} h={"505px"}
    py={32} px={28}
    bgColor={"#232D3E"}>
    {
       data.map((el,i)=>{
            return(
                <>
                <HStack marginTop={"-50px"}>
            <Text color={"#2FF3FF"}  fontSize={"32px"}  fontWeight={400}>"step"{i+1} </Text>
            <Text color={"#FFEA2F"}  fontSize={"32px"}  fontWeight={400}>: "carryString" :
                <span style={{color:"#FFA654",fontSize:'32px'}}>"{el.carryString}",</span>
            </Text>
            <Text color={"#FFEA2F"}  fontSize={"32px"}  fontWeight={400}>
             "sumString" : <span style={{color:"#FFA654",fontSize:'32px'}}>"{el.sumString}",</span>
            </Text>
            </HStack>
                </>
            )
        })
       
    }


    </Box >

</VStack>
}

        </>
    )
}