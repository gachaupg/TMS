import axios from 'axios'
import React, { useEffect, useState } from 'react'

function compare(a,b){
  if(a._id <b._id){
    return 1
  }
  if(a._id >b._id){
    return -1
  }return 0
}
const ComplainA = () => {
    const [admin,setAdmin]=useState([]);

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('http://localhost:5000/start/complain/g1')
          res.data.sort(compare)
          setAdmin(  res.data)
         
         } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])

  return (
    <>
    <h4 className='headers'>Complains and  Compliments</h4>
    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>

              <p className='rentss'><p>Name:</p>  {items.name}</p>
              <p className='rentss'><p>HouseNo:</p>   {items.houseNo}</p>
              <p className='rentss'><p></p>  Complain/compliment: {   items.complain}</p>
              
             
              </div>
      )
    })}
    </div>
 </> )
}

export default ComplainA