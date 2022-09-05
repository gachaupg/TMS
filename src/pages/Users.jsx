import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {MdAutoDelete} from 'react-icons/md'
import { deleteTUsers } from '../redux/features/userCrudSlice';
import {toast} from 'react-toastify'
import {format} from 'timeago.js'
const Users = () => {
  const {user}=useSelector((state)=>({...state.auth}))

  const dispatch=useDispatch()



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


        const handleDelete = (id) => {
          if (window.confirm("Are you sure you want to delete this tour ?")) {
            dispatch(deleteTUsers({ id, toast }));
          }
        };


  return (
    <div className='main-users' style={{marginTop:'7rem'}}>
                            

      
      {admin && admin.map((user)=>{
        return(
          <div className='all-users'>

          
        <p> Name:    {user.name}</p>
       <p>Email:  {user.email}</p> 
          <p>Phone:{user.phone}</p>
          <p>HouseNo:{user.houseNo}</p>
          <MdAutoDelete className='user-icon' onClick={() => handleDelete(user._id)}>
            
          </MdAutoDelete>
          <p>{format(user.createdAt)}</p>
          </div>
        )
      })}
      </div>
  )
}

export default Users