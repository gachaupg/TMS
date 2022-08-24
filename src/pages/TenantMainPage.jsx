import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { io } from "socket.io-client";
import Message from './Message';



function compare(a,b){
    if(a._id <b._id){
      return 1
    }
    if(a._id >b._id){
      return -1
    }return 0
  }
const TenantMainPage = () => {
    const [socket, setSocket] = useState(null);
const [date,setDate]=useState([])





    const {user}=useSelector((state)=>({...state.auth}))

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('http://localhost:5000/stats/userdates')
          res.data.sort(compare)
          setDate( res.data)
          
         } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])



          const rows =  [
        
          
            {
             
              digits:date[0]?._id,
            
             
            },
          ]


    const currentMonth = moment().month()+1; 


  return (
    <div className="tenant-page">
        {rows.map((i)=>{
    return(
        <div>{currentMonth===i.digits+4?
            <>
            <p className="icon">NOTICE! NOTICE!</p>
            <br />
             your contact remains two months 
            <Link to='/vacation'>  Click here to Review</Link></>: null}</div>
    )
})}
        <div className="tenant-header">
        {/* {user?.result?.createdAt}
{currentMonth} */}

 <Link className='apartment' to='/rent'>  <button className="btn">Dashboard</button></Link> 
 <Link to='/tenantcreate'>
    
                    <button className='btn'>
                   Rent
                    </button>
                </Link>

                
        </div>
       
            <div className="tenant-header">
            
                <Link to='/vacation'>
                    <button className='btn'>
                    Notice to Vacate
                    </button>
                </Link>
                <Link to='/complain'>
                    <button className='btn'>
                        add a complain
                    </button>
                </Link>

            
        </div>
    </div>
  )
}

export default TenantMainPage