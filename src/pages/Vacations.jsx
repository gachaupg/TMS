import axios from 'axios';
import {format} from 'timeago.js'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteVacation } from '../redux/features/vacation';
import {toast} from 'react-toastify'


const Responses = () => {
  function compare(a,b){
    if(a._id <b._id){
      return 1
    }
    if(a._id >b._id){
      return -1
    }return 0
  }
  const [admin,setAdmin]=useState([]);
  const dispatch=useDispatch()

  useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('http://localhost:5000/vacation')
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
            dispatch(deleteVacation({ id, toast }));
          }
        };


  return (
    <>
     
    <h4 className='headers'>Notices To Vacate</h4>

    <Link to='/caretakervacation'>
        <button className="btn">
        Notice to Vacate
        </button>
    </Link>
    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>

<p>updated at {format(items.createdAt)}</p>
              <p>Name: {items.name}</p>
              
              <p> houseNo: {items.houseNo}</p>
              <p>Reason if any: {items.reason}</p>
              <p>Contract Reabewal: {items.contractRenewal}</p>
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