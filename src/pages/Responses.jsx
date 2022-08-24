import axios from 'axios';
import {format} from 'timeago.js'
import React, { useEffect, useState } from 'react'
import moment from 'moment';


const Responses = () => {
  const [admin,setAdmin]=useState([]);
  const [totalwater,setTotalWater]=useState([])


  function compare(a,b){
    if(a._id <b._id){
      return 1
    }
    if(a._id >b._id){
      return -1
    }return 0
  }
  useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('http://localhost:5000/tenant')
        res.data.sort(compare)
        setAdmin(  res.data)
        console.log(admin);
       } catch (error) {
        console.log(error);
        
      }
      }
      fetchData()
        },[])

        React.useEffect(()=>{
          async function fetchData(){
          try {
            const res= await axios.get('http://localhost:5000/stats/totalrentb');
            res.data.sort(compare)
            
            setTotalWater(res.data)
              
            
            
           } catch (error) {
            console.log(error);
      
      
            
          }
          }
          fetchData()
            },[])



        const currentMonth1 = moment().month()+1; 

        const rows =  [
        
          
          {
           
            digits:totalwater[0]?._id,
          
           
          },
        ]



  return (
    <>



    <h4 className='headers'>Tenant Responses</h4>

    {rows.map((i)=>{
      return(
        <>
    month of {i.digits}
    {i.digits===currentMonth1?(
        
        
    <div  className='rent-page'>
      
    {admin.map((items)=>{
      return(
        <div className='rent-card'>


<p>Name: {items.name}</p>
              
              <p> houseNo: {items.houseNo}</p>
 Rent screenshot
              <img src={items.imageFile1} alt="" className="img" />
              
              Water screenshot
              <img src={items.imageFile2} alt="" className="img" />
              Wifi screenshot
              <img src={items.imageFile3} alt="" className="img" />
              
              
             
              </div>
      )
    })}
    </div>
    ):null}
    </>
      )
})}
 </> 
  )
}

export default Responses