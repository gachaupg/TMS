import axios from 'axios';
import {format} from 'timeago.js'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux';
import { deleteComplain } from '../redux/features/complain';

function compare(a,b){
    if(a._id <b._id){
      return 1
    }
    if(a._id >b._id){
      return -1
    }return 0
  }
const Responses = () => {
  const [admin,setAdmin]=useState([]);
  const dispatch=useDispatch()

  useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('http://localhost:5000/complain')
        res.data.sort(compare)
        setAdmin(  res.data)
       } catch (error) {
        console.log(error);
        
      }
      }
      fetchData()
        },[])

        const handleDelete = (id) => {
          if (window.confirm("Are you sure you want to delete this tour ?")) {
            dispatch(deleteComplain({ id, toast }));
          }
        };


  return (
    <>
    
    <h4 className='headers'>Tenant Responses</h4>

    <Link to='/Caretakercomment'>
        <button className="btn">
        Complains/Compliment
        </button>
    </Link>
    <div  className='rent-page'>
      
    {admin &&admin.map((items)=>{
      return(
        <div className='rent-card'>

<p>updated at {format(items.createdAt)}</p>
              <p>Name: {items.name}</p>
              
              <p> houseNo: {items.houseNo}</p>
              <p>complain {items.complain}</p>
              
              <button className="btn" onClick={() => handleDelete(items._id)}>
                delete
              </button>
              </div>
      )
    })}
    </div>
 </> 
  )
}

export default Responses