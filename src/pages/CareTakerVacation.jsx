import React, { useEffect } from 'react'
import { useState } from 'react'
import {StyledForm} from './StyledForm'
import { useNavigate } from 'react-router-dom';
// import { StyledForm } from './StyledForm'
import { useDispatch, useSelector } from "react-redux";
// import { productsCreate } from '../redux/features/tourSlice';
import {toast} from 'react-toastify'
import { createProject } from '../redux/features/projectSlice';
import FileBase from "react-file-base64";
import { createComplain } from '../redux/features/complain';
import { createVacation } from '../redux/features/vacation';
import moment from 'moment';
import { createCaretakerVacation } from '../redux/features/caretakerVacation';


const CaretakerVacation = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { user } = useSelector((state) => ({ ...state.auth }));
// console.log(user);
  const {error ,loading}= useSelector((state)=>({...state.project}))
  const [users,setUser]=useState({
    apartment:'',
    name:'',
    houseNo:'',
    
    contractRenewal:'',
    reason:'',
    codition:'',
    remTime:'',
    createdAt:'',
      
    
               })
   const handleSubmit= (e)=>{
    
       e.preventDefault()
       if (users){
        const updateddata={...users, name:user?.result.name}
       
       dispatch(createCaretakerVacation(updateddata,toast))
       navigate('/')
       }
   }
  const cancelCourse = () => { 
    document.getElementById("create-course-form").reset();
  }
useEffect(() => {
  // error && toast.error(error);

  return () => {
    
  }
}, [error])
let initialTime=moment().format("MMM");

let currenttime=moment().add(4,'months').format("MMM");              

  console.log('notification', currenttime);



return (
 <>

 
  <StyledForm id='cancelCourse' onSubmit={handleSubmit} style={{marginTop:'10rem'}} className='form'>
  <h2 style={{color:'whitesmoke'}}>Add A  Notice To Vacate</h2>
  <div className="main-rent-create">
  <div className="rent-split-start">
    {/* <input className='form-input' type='text'  placeholder='Apartment Name' onChange={(e)=> setUser({...users , apartment:e.target.value})} required/> */}
    <input className='form-input' type='text'  placeholder='Name' onChange={(e)=> setUser({...users , name:e.target.value})} required/>
    <input className='form-input' type='text' placeholder='House Number' onChange={(e)=> setUser({...users , houseNo:e.target.value})} required/>
    </div>
    <div className="rent-split">
    <input className='form-input' type='text' placeholder='Contract Renewal' onChange={(e)=> setUser({...users , contractRenewal:e.target.value})} required/>

    <input className='form-input' type='date' placeholder='date' onChange={(e)=> setUser({...users ,createdAt:e.target.value})} required/>
    <input className='form-input' type='text' placeholder='Notice to vacate' onChange={(e)=> setUser({...users ,reason:e.target.value})}/>
    {/* <input className='form-input' type='text' placeholder='comment / compliment' onChange={(e)=> setUser({...users ,remTime:e.target.value})}/> */}
</div>
      {/* <div className="d-flex justify-content-start">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setUser({ ...users, imageFile: base64 })
                }
              />
              </div> */}
              </div>
      <button className='btn' >
      {/* {auth.registerStatus==='pedding' ? 'submitting':'register' } */}
      ADD
    </button>
     

</StyledForm>
   
</>
   
  
    

)
}

export default CaretakerVacation