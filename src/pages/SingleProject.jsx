import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";

import axios from 'axios';
import { getTour } from '../redux/features/projectSlice';
const SingleProject = () => {
const [users,setUsers]=useState([]);
const dispatch = useDispatch();
const { tour, relatedTours } = useSelector((state) => ({ ...state.project }));
console.log(tour);
    const { id } = useParams();
    // useEffect(()=>{
    //     async function fetchData(){
    //     try {
    //       const res= await axios.get(`http://localhost:5000/project/${id}`)
          
    //       console.log( 'hello',res.data);
    //     setUsers(  res.data)
        
        
    //     } catch (error) {
    //       console.log(error);
          
    //     }
    //     }
    //     fetchData()
    //       },[])


          useEffect(() => {
            if (id) {
              dispatch(getTour(id));
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [id]);




 
  return (
    <div style={{marginTop:'10rem', display:'flex'}}>
       <p>{tour.name}</p>
       <p>{tour.apartment}</p>
      <p>{tour.aptType}</p> 
      <p>{tour.houseNo}</p>  
      <p> {tour.amount}</p>
       <div></div>
     
       <div></div>
        SingleProject</div>
  )
}

export default SingleProject