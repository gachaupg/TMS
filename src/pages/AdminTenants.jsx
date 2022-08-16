import React from 'react'
import { useState } from 'react'
import {format} from 'timeago.js'
import {
 
  MDBIcon,
  
} from "mdb-react-ui-kit";
import { useEffect } from 'react'
import { deleteTour, searchTours } from "../redux/features/projectSlice";
import {toast} from 'react-toastify'

import axios from 'axios'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Profile from './Profile';
import { deleteUser } from '../redux/features/authSlice';
import moment from 'moment';
import jsPDF from 'jspdf';
const AdminTenants = () => {
  const [search,setSearch]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
      const [tours,setTours]=useState([])
// const {tours}=useSelector((state)=>state.project)
// console.log(tours);

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
      };

  return (
    <>
       <h4 className='r'>Rents Tenant Progress</h4>
       <div className='search'>      
      <input type="text" placeholder='Search by house number' onChange={handleSearch} />
</div>  
    
    <div className='tenant-admin-page'>
                 <div styls={{marginLeft:'5px'}}>
                  <MDBIcon fas icon='serach'/>
                </div>
             
         {tours && tours?.map((items)=>{
          return(
            
            <div className='datas'>
             <h4>{format(items.createdAt)}</h4> 
              <h3 className='month'>month of {moment().format('MM YYYY ')}</h3>

{/* <p>Name: {items.name}</p>
<p> RentPaid: {items.amount}</p>
<p>ApartMent: {items.apartment}</p>
<p> HouseNo: {items.houseNo}</p>
<p>IdNo: {items.idNo}</p>
<p>WaterFee: {items.waterFee}</p>  */}
{!items.balance? <p  className='color1'>Name : {items.name}</p>:<p className='color2'>Name : {items.name}</p>}
<p className='rentss'> <p>RentPaid: </p>   <p>{items.amount}</p> </p>
<p className='rentss'> <p>HouseNo:</p>  <p>{ ('') }{items.houseNo}</p> </p>
<p className='rentss'> <p>ApartMent Name:</p> <p>{items.apartment}</p> </p>
<p className='rentss'> <p>IdNo:</p>  <p>{items.idNo}</p></p>
<p className='rentss'> <p>Fisrt Water Read:</p> <p>{items.currentRead}</p> </p> 
<p className='rentss'> <p>Last Water Read:</p> <p>{items.lastRead}</p> </p> 
<p className='rentss'> <p>Water bill:</p> <p>{items.waterFee}</p> </p> 

<p className='rentss'> <p>Method of payment:</p> <p>{items.payment}</p> </p> 
<p className='rentss'> <p>Date of Payment:</p> <p>{items.datePaid}</p> </p> 
<p className='rentss'> <p>Type of the rental:</p> <p>{items.aptType}</p> </p> 
<p className='rentss'> <p>Wifi Fee:</p> <p>{items.wifi}</p> </p> 
<p className='rentss'> <p>Arrears:</p> <p>{items.arrears}</p> </p> 
<p className='rentss'> <p>Phone Number:</p> <p>{items.phone}</p> </p> 
<p className='rentss'> <p>Penalties:</p> <p>{items.penalties}</p> </p> 
<p className='rentss'> <p>Total Balances:</p> <p>{items.balance}</p> </p> 
{/* <p className='rentss'> <p>Total Balances:</p> <p>{items.balance+items.penalties+items.arrears}</p> </p>  */}

<p>Payment Screenshot:</p> 
<p className='rentss'> <img className='image' src={items.imageFile} alt="" /> </p> 
{/* <div className="buttons">
{!items.balance? <><button className="color1">No Balance</button></>
:<><button className="color2">Balance</button></>}
</div> */}
<div className="buttons">
<button className="btn "onClick={() => handleDelete(items._id)}
>
          delete
            </button>
    {/* <button className="btn">
    <Link to ={`/users/${items._id}`}>
      read more
     </Link>
    </button> */}

             </div>
            </div>
          )
         })}

    </div>
</>  )
}

export default AdminTenants