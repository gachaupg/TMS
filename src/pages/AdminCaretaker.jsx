import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { deleteTour } from "../redux/features/projectSlice";
import {toast} from 'react-toastify'

import axios from 'axios'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMilestone } from '../redux/features/mileSlice';
import { format } from 'timeago.js';
const AdminCaretaker = () => {
    const dispatch=useDispatch()
      const [tours,setTours]=useState([])
// const {tours}=useSelector((state)=>state.project)
// console.log(tours);
function compare(a,b){
  if(a._id <b._id){
    return 1
  }
  if(a._id >b._id){
    return -1
  }return 0
}
useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get('http://localhost:5000/stats/caretaker')
      res.data.sort(compare)
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
          dispatch(deleteMilestone({ id, toast }));
        }
        console.log( 'delet',handleDelete);
      };


      const handleSearch= async (event)=>{
        event.preventDefault()
        let key =event.target.value
        if(key){
         let result= await fetch(`http://localhost:5000/project/search${key}`)
      result=await result.json()
      if(result){
        setTours(result)
        
      } console.log(` `,result);
        }else{
          setTours()
        }
      
      
      }



  return (
    <>
    <h4 className='r'>Maintanance</h4>
    <div className='search'>      
      <input type="text" placeholder='Search by Apartment' onChange={handleSearch} />
</div>
        
    
    <div className='tenant-admin-page'>
              
      
         {tours && tours?.map((item)=>{
          return(
            <div className='datas'>
                <div></div>
                <h4>{format(item.createdAt)}</h4> 

              <p>Locality of Repair/maintanance: {item.general}</p>
             <p> Description of issue: {item.maintance} {}</p> 
             <p>Repair estimates /Quotations: {item.cost}</p>
             <p>Labour charges: {item.price}</p>
             <p>Work Completion: {item.quantity}</p>
             <p>Remarks: {item.apartment}</p>
             <p>Phone no of Repair Person: {item.phoneNo}</p>
             {/* <p> Amount: {item.amount}</p> 
             <p> HouseNo:{item.houseNo}</p> 
             <p> House: {item.aptType}</p>  */}

            

             <div className="buttons">
             <button className="btn"onClick={() => handleDelete(item._id)}
>
          delete
            </button>
    {/* <button className="btn">
    <Link to ={`/project/${item._id}`}>
      read more
     </Link>
    </button> */}

             </div>
            </div>
          )
         })}

    </div>
  </>)
}

export default AdminCaretaker