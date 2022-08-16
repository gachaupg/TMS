import axios from 'axios'
import moment from 'moment';
import React, { useEffect, useState } from 'react'

const Tenant2B = () => {
    const [admin,setAdmin]=useState([]);

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('http://localhost:5000/stats/2b')
          setAdmin(  res.data)
          console.log(admin);
         } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])

  return (<>
    <h4 className='headers'>Apartment A all Rents Progress</h4>

    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>
        <h3 className='month'>month of {moment().format('MM YYYY ')}</h3>

              {/* <p>Name: {items.name}</p>
              <p> RentPaid: {items.amount}</p>
              <p>ApartMent: {items.apartment}</p>
              <p> HouseNo: {items.houseNo}</p>
              <p>IdNo: {items.idNo}</p>
              <p>WaterFee: {items.waterFee}</p>  */}
               <p className='rentss'> <p> Name:   </p> <p>{items.name}</p> </p>
              <p className='rentss'> <p>RentPaid: </p>   <p>{items.amount}</p> </p>
              <p className='rentss'> <p>HouseNo:</p>  <p>{ ('') }{items.houseNo}</p> </p>
              <p className='rentss'> <p>ApartMent Name:</p> <p>{items.apartment}</p> </p>
              <p className='rentss'> <p>Water Bill:</p> <p>{items.waterFee}</p> </p>  
              <p className='rentss'> <p>Wi fii:</p> <p>{items.wifi}</p> </p>  
            
              <p className='rentss'> <p>IdNo:</p>  <p>{items.idNo}</p></p>
              {/* <p className='rentss'> <p>Fisrt Water Read:</p> <p>{items.currentRead}</p> </p> 
              <p className='rentss'> <p>Last Water Read:</p> <p>{items.lastRead}</p> </p> 
              <p className='rentss'> <p>Date of Payment:</p> <p>{items.datePaid}</p> </p> 
              <p className='rentss'> <p>Type of the rental:</p> <p>{items.aptType}</p> </p> 
              {/* <p className='rentss'> <p>Payment Screenshot:</p> <img className='img' src={items.imageFile} alt="" /> </p>  */}
              <p className='rentss'> <p>Arrears:</p> <p>{items.arrears}</p> </p> 
              <p className='rentss'> <p>Penalties:</p> <p>{items.penalties}</p> </p> 
              {/* <p className='rentss'> <p>Total Balance:</p> <img className='img' src={items.balance} alt="" /> </p>  */}
              <p className='rentss'> <p>Total Balnces:</p> <p>{items.balance}</p> </p> 
              </div>
      )
    })}
    </div>
 </> )
}

export default Tenant2B