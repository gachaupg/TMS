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
const Summary1A
 = () => {
    const [admin,setAdmin]=useState([]);

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('http://localhost:5000/status/5b')
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
    <h4 className='headers'>Total Payments</h4>
    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>

              <p className='rentss'> <p> Name:   </p> <p>{items.name}</p> </p>
              <p className='rentss'> <p>HouseNo:</p> <p>{items.houseNo}</p> </p>
              <p className='rentss'> <p>monthly Rent:</p>  <p>{items.rent}</p></p>
              <p className='rentss'> <p>monthly water charges:</p>  <p>{items.water}</p></p>

              <p className='rentss'> <p>penalties: </p>   <p>{items.penalties}</p> </p>
              <p className='rentss'> <p>Arrears: </p>   <p>{items.arrears}</p> </p>

              <p className='rentss'> <p>Remarks:</p> <p>{items.remarks}</p> </p> 
              <p className='rentss'> <p>Total monthly Payments:</p> <p>{items.rent+items.water+items.arrears+items.wifi+items.penalties}</p> </p> 
              </div>
      )
    })}
    </div>
  </>)
}

export default Summary1A
