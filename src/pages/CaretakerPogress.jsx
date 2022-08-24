import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMilestoneByUser } from '../redux/features/mileSlice'
import axios from 'axios'
import { getMilesByUser } from '../redux/api'

const CaretakerPogress = () => {
    const {user}=useSelector((state)=>({...state.auth}))

    const [users,setUsers]=useState([]);
    const userId =user?.result?._id
    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get(`http://localhost:5000/milestone/miles/${userId}`)
          
          console.log( 'hello',res.data);
        setUsers(  res.data)
        
        
        } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])





   
  return (
    <>
  <h2 style={{color:'whitesmoke'}} className='caretaker-text'>Hello {user?.result?.name} this your page</h2>
    <div className='caretaker-card'>
      
     {users && users.map((item)=>{
        return(
            <div className='details-cards'>
            apartment :   {item.apartment}
                <div></div>
                name:  {item.name}
                <div></div>
                price : {item.price}
                <div></div>
                quantity: {item.quantity}
                <div></div>
                hopName: {item.shopName}
                <div></div>
                servedBy : {item.servedBy}
                <div></div>
                phoneNo : {item.phoneNo}
            </div>
        )
     })}
    </div></>
  )
}

export default CaretakerPogress