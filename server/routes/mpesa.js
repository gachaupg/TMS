import express from 'express'
import axios from 'axios'
import moment from 'moment';
const router=express.Router()

///token 
const generateToken = async(req,res,next)=>{
    const secret=process.env.MPESA_CONSUMER_SECRET
    const consumer=process.env.MPESA_CONSUMER_KEY
    const auth=new Buffer.from (`${consumer}:${secret}`).toString("base64")
    
   await axios.get("https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",{
      headers:{
        authorization:`Basic ${auth}`
      
    }
   }).then((data)=>{
    console.log(data.token);
    res.status(200).json(data)
next()
}).catch((error)=>{
console.log(error);})
    }

    router.get("/", async(req,res)=>{
        generateToken()
    })  
router.post("/",generateToken, async(req,res)=>{
    const phone =req.body.phone.subString(1);
    const amount =req.body.amount;
    var CurrentDate = moment().format();

const passkey=process.env.MPESA_PASSKEY
const paybill=process.env.MPESA_PAYBILL
const password= new Buffer.from (passkey+paybill+CurrentDate).toString("base64")



    await axios.post("https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
    {    
        BusinessShortCode:process.env.MPESA_PAYBILL,    
        Password: password,    
      Timestamp:CurrentDate,    
      TransactionType: "CustomerPayBillOnline",   //customerbuygoodsonline 
        Amount:amount,    
       PartyA:`254${phone}`,    
        PartyB:paybill,    
      PhoneNumber:`254${phone}`,    
      CallBackURL:"https://mydomain.com/pat",    
      AccountReference:`254${phone}`,    
      TransactionDesc:"Test"
     },
     {
headers:{
    Authorization:`Bearer ${generateToken}`
},
     }
).then((data)=>{
    console.log(data);
    res.send(200).json(data)
}).catch((error)=>{
    res.status(400).json(error.message)
})
})


export default router