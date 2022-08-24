import axios from 'axios';
import {format} from 'timeago.js'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function compare(a,b){
    if(a._id <b._id){
      return 1
    }
    if(a._id >b._id){
      return -1
    }return 0
  }
const Responses = () => {
  const [admin,setAdmin]=useState([]);
  
  useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('http://localhost:5000/vacation')
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
     
    <h4 className='headers'>Notices To Vacate</h4>

    <Link to='/caretakervacation'>
        <button className="btn">
        Notice to Vacate
        </button>
    </Link>
    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>

<p>updated at {format(items.createdAt)}</p>
              <p>Name: {items.name}</p>
              
              <p> houseNo: {items.houseNo}</p>
              <p>Reason if any: {items.reason}</p>
              <p>Contract Reabewal: {items.contractRenewal}</p>
              

             
              </div>
      )
    })}
    </div>
 </> 
  )
}

export default Responses