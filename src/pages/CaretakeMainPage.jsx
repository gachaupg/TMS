import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Caretaker from './Caretaker'
import Rent from './Rent'
import Vacations from './Vacations'
import Complains from './Complains'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Message from './Message'
const CaretakeMainPage = () => {
    const {user}=useSelector((state)=>({...state.auth}))
  const {milestones}=useSelector((state)=>({...state.milestone}))

  const [users,setUsers]=useState([]);
 const userId =user?.result?._id
  useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get(`http://localhost:5000/milestone/miles/${userId}`)
      
     
    setUsers(  res.data)
    
    
    } catch (error) {
      console.log(error);
      
    }
    }
    fetchData()
      },[])
  return (
    <div className="tenant-page">
        <h5>Hello {user?.result?.name}  </h5>
        <div className="tenant-header"> 
        
        <Link to='/caretaker'>
         
                <button className='btn'>
                   Maintanance
                   
                </button>
            </Link>
           
            <Link to='/rents'>
                    <button className="btn">
                    Rent
                    </button>
                </Link>
                <Link to='/addproject'>
                    <button className="btn">
                    Rent Payment
                    </button>
                </Link>
            {/* <Caretaker/> */}
        </div>
        
            <div className="tenant-header">

            <Link to='/message2'>
         
         <button className='btn'>
            Messange
            
         </button>
     </Link>
                <Link to='/vacations'>
                    <button className="btn">
                    Vacations
                    </button>
                </Link>
            
                <Link to='/complains'>
                    <button className="btn">
                    Complains
                    </button>
                </Link>
            </div>
            
       
    </div>
  )
}

export default CaretakeMainPage