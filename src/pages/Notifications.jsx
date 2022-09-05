import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Notifications = () => {
  const {user}=useSelector((state)=>({...state.auth}))

  const [users,setUsers]=useState([]);
   
  function compare(a,b){
    if(a._id <b._id){
      return 1
    }
    if(a._id >b._id){
      return -1
    }return 0
  }
  const [admin,setAdmin]=useState([]);
  
  useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('http://localhost:5000/usercrud/allusers')
        res.data.sort(compare)
        setAdmin(  res.data)
        console.log(admin);
       } catch (error) {
        console.log(error);
        
      }
      }
      fetchData()
        },[])
    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get(`http://localhost:5000/project`)
          
       
        setUsers(  res.data)
        
        
        } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])
  return (
    <div style={{marginTop:'7rem'}}>
      Whatsapp
      {users.data?.map((i)=>{
        return(
          <div style={{display:'flex', gap:'3rem'}}>
            <p>{i.houseNo}</p>
                       <a  href={`https://wa.me/${i.phone}`} target="_blank" rel="noreferrer noopener"><h6 style={{color:'white'}}>Whatsapp</h6></a>

          </div>
        )
      })}
      <div>
        Email
        {admin.map((i)=>{
          return(
            <div style={{display:'flex', gap:'3rem'}}>
               <p>{i.houseNo}</p>
          <a href = {`mailto:${i.email}`}>Send Email</a>
            </div>
          )
         
        })}
      </div>
      </div>
  )
}

export default Notifications