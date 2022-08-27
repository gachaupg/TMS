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
import { createCareTakercomplain } from '../redux/features/Caretakercomment';


const CaretakerComplain = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { user } = useSelector((state) => ({ ...state.auth }));
// console.log(user);
  const {error ,loading}= useSelector((state)=>({...state.project}))
  const [users,setUser]=useState({
    apartment:'',
    name:'',
    houseNo:'',
    
    idNo:'',
    complain:'',
   
    createdAt:'',
      
    
               })
   const handleSubmit= (e)=>{
    
       e.preventDefault()
       if (users){
        const updateddata={...users, name:user?.result.name}
       
       dispatch(createCareTakercomplain(updateddata,toast))
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


return (
 
  <StyledForm id='cancelCourse' onSubmit={handleSubmit} style={{marginTop:'10rem'}} className='form'>
  <h2 style={{color:'whitesmoke'}}>Compliments/Complain</h2>
  <div className="main-rent-create">
  <div className="rent-split-start">
    {/* <input className='form-input' type='text'  placeholder='Apartment Name' onChange={(e)=> setUser({...users , apartment:e.target.value})} required/> */}
    <input className='form-input' type='text'  placeholder='Name' onChange={(e)=> setUser({...users , name:e.target.value})} required/>
    <input className='form-input' type='text' placeholder='House Number' onChange={(e)=> setUser({...users , houseNo:e.target.value})} required/>
    </div>
    <div className="rent-split">
    {/* <input className='form-input' type='number' placeholder='Id Number' onChange={(e)=> setUser({...users ,idNo:e.target.value})} required/> */}
    <input className='form-input' type='date' placeholder='date' onChange={(e)=> setUser({...users ,createdAt:e.target.value})} required/>
      <input className='form-input' type='text' placeholder='Complain/compliment' onChange={(e)=> setUser({...users ,complain:e.target.value})}/>
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
              </div>
      <button className='btn' >
      {/* {auth.registerStatus==='pedding' ? 'submitting':'register' } */}
      ADD
    </button>
      
</StyledForm>
   

   
  
    

)
}

export default CaretakerComplain