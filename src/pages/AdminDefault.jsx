import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { deleteTour } from "../redux/features/projectSlice";
import {toast} from 'react-toastify'

import axios from 'axios'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
const AdminDefault = () => {
    const dispatch=useDispatch()
      const [tours,setTours]=useState([])
// const {tours}=useSelector((state)=>state.project)
// console.log(tours);
useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get('http://localhost:5000/stats/chartss')
      setTours(  res.data)
      console.log('hey',tours);
     } catch (error) {
      console.log(error);


      
    }
    }
    fetchData()
      },[])
      const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this tour ?")) {
          dispatch(deleteTour({ id, toast }));
        }
        console.log( 'delet',handleDelete);
      };

  return (
    <div>
         {tours && tours?.map((item)=>{
          return(
            <div className='datas'>
                <div></div>
                <h4>{format(item.createdAt)}</h4> 
              <p>Name: {item.name}</p>
             <p> Aparment: {item.apartment}</p> 
             <p> Amount: {item.amount}</p> 
             <p> HouseNo: {item.houseNo}</p> 
             <p> House: {item.aptType}</p> 
             <p></p>
             <p> Id: {item.idNo}</p> 

             <div className="buttons">
             <button className="btn"onClick={() => handleDelete(item._id)}
>
          delete
            </button>
    <button className="btn">
    <Link to ={`/project/${item._id}`}>
      read more
     </Link>
    </button>

             </div>
            </div>
          )
         })}

    </div>
  )
}

export default AdminDefault