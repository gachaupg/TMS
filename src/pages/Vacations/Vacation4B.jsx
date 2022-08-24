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
const VacationsA = () => {
    const [admin,setAdmin]=useState([]);

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('http://localhost:5000/start/vacation/4b')
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
    <h4 className='headers'>Apartment B all Vacations</h4>
    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>

              <p className='cardtitles'> <p> Name:   </p> <p>{items.name}</p> </p>
              <p className='cardtitles'> <p>Notice to vacate: </p>   <p>{items.reason}</p> </p>
              <p className='cardtitles'> <p>HouseNo:</p> <p>{items.houseNo}</p> </p>
              {/* <p className='cardtitles'> <p>IdNo:</p>  <p>{items.idNo}</p></p> */}
              <p className='cardtitles'> <p>contract Renewal:</p> <p>{items.contractRenewal}</p> </p> 
              
              </div>
      )
    })}
    </div>
  </>)
}

export default VacationsA