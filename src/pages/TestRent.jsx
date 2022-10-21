import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'
import ApartmentA from './ApartmentA';
import { Link, useNavigate } from 'react-router-dom';
const TestRent = () => {
    const {user}=useSelector((state)=>({...state.auth}))
    const userId =user?.result?._id
    const [users,setUsers]=useState([]);
    const [A,setA]=useState(false);
    const [admin,setAdmin]=useState([]);
    const [caretaker,setCareTaker]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('http://localhost:5000/project')
        setUsers(  res.data)
       } catch (error) {
        console.log(error);
        
      }
      }
      fetchData()
        },[])
        useEffect(()=>{
          async function fetchData(){
          try {
            const res= await axios.get('http://localhost:5000/milestone')
            setAdmin(  res.data)
            console.log();
           } catch (error) {
            console.log(error);
            
          }
          }
          fetchData()
            },[])
              useEffect(()=>{
                async function fetchData(){
                try {
                  const res= await axios.get('http://localhost:5000/milestone')
                  
                  console.log( 'hello',res.data);
                setCareTaker( res.data)
                console.log('p', caretaker);
                
                } catch (error) {
                  console.log(error);
                  
                }
                }
                fetchData()
                  },[])
                  const open =()=>{
                    if(A){
navigate('/')
                    }
                  }
              
  return (
    <div className='rent-pages' style={{marginTop:'8rem'}}>
    <p className="header">Rents</p>
   
    {/* Hello   {user?.result?.name} */}
    <div className='rent-card'>
    

  {user?.result?.houseNo==='G1' ?<Link className='apartment' to='/apartmentAr'>  <h5 className='text'>Click To view</h5>Aparment A</Link> :null }
   </div>
   <div className="rent-cards">
    
      {user?.result?.apartment==='b' ?<Link className='apartment'  to='/apartmentB'> <h5>Click To view</h5>Apartment b</Link> : null }
      </div>
      <div className="rent-cards">
      {user?.result?.apartment==='c' ? <Link className='apartment'  to='/apartmentC'> <h5>Click To view</h5>Apartment c</Link> : null }
   
     </div>
     {/* {caretaker.data?.map((i)=>{
      return(
        <div>
       
      {users.data?.map((items)=>{
  
        if(items.apartment===i.apartment  ){
          return(
          
            <div className='rent-card'>
                     { items.apartment===i.apartment ? 'hello':'null'}

              <p>Name: {items.name}</p>
              <p> RentPaid: {items.amount}</p>
              <p>ApartMent: {items.apartment}</p>
              <p> HouseNo: {items.houseNo}</p>
              <p>IdNo: {items.idNo}</p>
              <p>WaterFee: {items.waterFee}</p> 
              <p>balance: 00</p>
              z
              </div>
            
        )
        }
        
      })}   </div>
      )
     })} */}
    
    
 </div> )
}

export default TestRent