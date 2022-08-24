import axios from 'axios';
import {format} from 'timeago.js'
import React, { useEffect, useState } from 'react'


const Responses = () => {
  const [admin,setAdmin]=useState([]);
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
        const res= await axios.get('http://localhost:5000/start/services/1b')
        res.data.sort(compare)
        setAdmin(  res.data)
        console.log(admin);
       } catch (error) {
        console.log(error);
        
      }
      }
      fetchData()
        },[])
  return (
    <>
    <h4 className='headers'>Tenant Water Charges</h4>
    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>

              <p>Name: {items.name}</p>
              
              <p> houseNo: {items.houseNo}</p>
              <p>Arrears: {items.arrears}</p>
              <p>penalty: {items.penalty}</p>
            
              <p> Unit Consumed : {items.units}</p>
              <p> Water Bill : {items.waters}</p>
              <p> Maintanance: {items.services}</p>
              <p>updated at {format(items.createdAt)}</p>
             
              </div>
      )
    })}
    </div>
 </> 
  )
}

export default Responses