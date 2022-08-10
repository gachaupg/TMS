
import React, { useEffect } from "react";
import {MDBBtn, MDBCol,MDBIcon, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { Link, useLocation, useParams } from "react-router-dom";
import { getProjects, getProjectsByUser } from "../redux/features/projectSlice";
import Projects from "../components/Projects";
import Login from "./Login";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import Admin from "./Admin";
import Caretaker from "./Caretaker";
import Teanant from "./Teanant";
import { deleteTour } from "../redux/features/projectSlice";
import { useState } from "react";
import axios from "axios";
import Edit from "./Edit";

// import {AiOutlineArrowRight} from 'react-icons/ai'
import moment from 'moment'
const StudentsProjects = () => {
  const [tenants,setTenants]= useState({})
  const [clear,setClear]= useState([])
    const navigate=useNavigate()
  const dispatch=useDispatch()
  const {id}=useParams()
  // const { Tours} = useSelector((state) => ({ ...state.tour }));
  const {user}=useSelector((state)=>({...state.auth}))
  const {projects,loading}=useSelector((state)=>({...state.project}))
  console.log(projects);
const userId =user?.result?._id
console.log(userId);
// useEffect(() => {
// if(userId){
//  dispatch(getProjectsByUser(userId)) 
// }

// }, [userId])



  return (
    <div className="tenant-cards">
      <div className="details-card">
        <h3 className='month'>month of {moment().format('MM YYYY ')}</h3>
    
        {projects && projects?.map((items)=>{
          return(
            
            <div className='datas'>
              
              <h3 className='month'>month of {moment().format('MM YYYY ')}</h3>

{/* <p>Name: {items.name}</p>
<p> RentPaid: {items.amount}</p>
<p>ApartMent: {items.apartment}</p>
<p> HouseNo: {items.houseNo}</p>
<p>IdNo: {items.idNo}</p>
<p>WaterFee: {items.waterFee}</p>  */}
<p className='rentss'> <p> Name:   </p> <p>{items.name}</p> </p>
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
<p className='rentss'> <p>Total Balances:</p> <p>{items.balance
}</p> </p> 
<p className='rentss'> <p>Payment Screenshot:</p> <img className='img' src={items.imageFile} alt="" /> </p> 
<div className="buttons">
{items.balance==='' ? <><button className="color1">No Balance</button></>
:<><button className="color2">Balance</button></>}
</div>
<div className="buttons">

    <button className="btn">
    <Link to ={`/users/${items._id}`}>
      read more
     </Link>
    </button>

             </div>
            </div>
          )
         })}

   </div>
      {/* <Link to ='/'>
      home
     </Link> */}
   </div>
  
    
   
  )
}

export default StudentsProjects