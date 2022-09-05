import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TenantsSummary = () => {
    const {user}=useSelector((state)=>({...state.auth}))
    const [users,setUsers]=useState([]);
const[index,setIndex]=useState(0)
    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('http://localhost:5000/stats/allpayments')
          setUsers(  res.data)
         } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])
          const rows =  [
        
          
            {
             
              digits:users[index.users]?.houseNo,
            
             
            },
          ]


    return(
        <div style={{marginTop:'7rem'}}>
        <div className='rent-'>
    

    {user?.result?.houseNo==='G1' ?<Link className='apartment' to='/summaryg1'>  <h5 className='text'></h5>Total Payments</Link> :null }
     </div>
     <div className="rent-main">
      
        {user?.result?.houseNo==='G2' ?<Link className='apartment'  to='/summaryg2'> Total Payments</Link> : null }
        </div>
        <div className="rent-main">
      
        {user?.result?.houseNo==='1A' ?<Link className='apartment'  to='/summary1a'> Total Payments</Link> : null }
        </div><div className="rent-main">
      
      {user?.result?.houseNo==='1B' ?<Link className='apartment'  to='/summary1b'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='1C' ?<Link className='apartment'  to='/summary1c'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='1D' ?<Link className='apartment'  to='/summary1d'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='2A' ?<Link className='apartment'  to='/summary2a'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='2B' ?<Link className='apartment'  to='/summary2b'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='2C' ?<Link className='apartment'  to='/summary2c'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='2D' ?<Link className='apartment'  to='/summary2d'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='3A' ?<Link className='apartment'  to='/summary3a'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='3B' ?<Link className='apartment'  to='/summary3b'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='3C' ?<Link className='apartment'  to='/summary3c'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='3D' ?<Link className='apartment'  to='/summary3d'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='4A' ?<Link className='apartment'  to='/summary4a'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='4B' ?<Link className='apartment'  to='/summary4b'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='4C' ?<Link className='apartment'  to='/summary4c'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='4D' ?<Link className='apartment'  to='/summary4d'> Total Payments</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='5A' ?<Link className='apartment'  to='/summary5b'> Total Payments</Link> : null }
      </div> 
   </div> )
  }


export default TenantsSummary