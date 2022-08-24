import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { Link, useLocation } from "react-router-dom";
import { createProject, getProjects, getProjectsByUser } from "../redux/features/projectSlice";
import {StyledForm} from './StyledForm'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createMilestone } from "../redux/features/mileSlice";
// import {AiOutlineArrowRight} from 'react-icons/ai'



const Milestone = () => {
    const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>({...state.auth}))
  const {milestones}=useSelector((state)=>({...state.project}))

  const {projects}=useSelector((state)=>({...state.project}))
  console.log(projects);
const userId =user?.result?._id

const [date,setDate]=useState('')
const [mile,setMilestone]=useState({
  maintance:'',
  general:'',
    item:'',
    quantity:'',
    price:'',
    Name:'',
    servedBy:'',
    phoneNo:'',
    apartment:'',
cost:'',
    createdAt:Date

})
useEffect(()=>{
  dispatch(getProjectsByUser(userId))
},[userId])
const handleSubmit= (e)=>{
    e.preventDefault()
    if (mile){
        const updateddata={...mile, name:user?.result.name}
       
       dispatch(createMilestone(updateddata))
    }
}

  return (
   
      <StyledForm style={{marginTop:'8rem'}} onSubmit={handleSubmit}>
    <h3 style={{color:'whitesmoke'}}> maintenance </h3>
    <div className="main-rent-create">
    <div className="rent-split-start">



    <select name="" id="" onChange={(e)=> setMilestone({...mile, general:e.target.value})}>
        <option value="Locality of Repair/ maintenance">Locality of Repair/ maintenance</option>
        <option value="General">General</option>
        <option value="specific house">specific house</option>
       
      </select>

<div >....</div>
         {/* <input className='form-input' type='number'  placeholder='Labour Charges' onChange={(e)=> setMilestone({...mile , price:e.target.value})} /> */}

      
      
      
<input className='form-input' type='text'  placeholder='Description of issue/fault' onChange={(e)=> setMilestone({...mile , maintance:e.target.value})} />

      <input className='form-input' type='number'  placeholder=' Repair Estimates/Quotations' onChange={(e)=> setMilestone({...mile , cost:e.target.value})} />
      {/* <input className='form-input' type='text'  placeholder='Name of the Item' onChange={(e)=> setMilestone({...mile , item:e.target.value})} /> */}
       
      <select name="" id="" onChange={(e)=> setMilestone({...mile, quantity:e.target.value})} >
  <option value="work completed"> work copmleted</option>
  <option value="yes">yes</option>
  <option value="no">no</option>
</select>
<div >....</div>
       </div>
       
       <div className="rent-split">
       <input className='form-input' type='number'  placeholder='Labour Charges' onChange={(e)=> setMilestone({...mile , price:e.target.value})} />

       <input className='form-input' type='text'  placeholder='House number' onChange={(e)=> setMilestone({...mile , apartment:e.target.value})} /> 
      <input className='form-input' type='text'  placeholder='Remarks' onChange={(e)=> setMilestone({...mile , servedBy:e.target.value})} /> 

      <input className='form-input' type='number'  placeholder='Phone Number of the Engineer' onChange={(e)=> setMilestone({...mile , phoneNo:e.target.value})} />
      
      </div>
</div>
      <button className='btn'>
      {/* {auth.registerStatus==='pedding' ? 'submitting':'register' } */}
      ADD
    </button>
    <div className="icon">
      view
        <Link to='/mileProject'>
          go
           {/* <AiOutlineArrowRight/> */}
        </Link>
        </ div>
      </StyledForm>
      
 
    
  )
}


export default Milestone