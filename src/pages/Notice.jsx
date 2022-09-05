import React, { useEffect } from 'react'
import { useState } from 'react'
import {StyledForm} from './StyledForm'
import { useNavigate,useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
// import { StyledForm } from './StyledForm'
import { useDispatch, useSelector } from "react-redux";
// import { productsCreate } from '../redux/features/tourSlice';
import { createProject, updateTour } from '../redux/features/projectSlice';
import FileBase from "react-file-base64";
import axios from 'axios';
import { createTenant } from '../redux/features/TenantSlice';
import { createNotice } from '../redux/features/noticeSlice';

const StudentProjectCreate = () => {
  const {projects}=useSelector((state)=>({...state.project}))
  const notify = () => toast("Wow so easy!");
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [tours,setTours]=useState([])

  const { user } = useSelector((state) => ({ ...state.auth }));


  const {error ,loading}= useSelector((state)=>({...state.project}))
  const [users,setUser]=useState({
    apartment:'',
    name:'',
    houseNo:'',
    amount:'',
    arrears:'',
    penalty:'',
    currentraed:'',
    waters:'',
    prevReads:'',
    services:'',
   units:'',
               })
   const handleSubmit= (e)=>{
    
       e.preventDefault()
       if (users){
        const updateddata={...users}
       if(!id){
        dispatch(createNotice(updateddata,toast))
       }else{
        dispatch(updateTour({updateddata,id,toast}))
       }
       
       
       }
   }
  const cancelCourse = () => { 
    document.getElementById("create-course-form").reset();
  }
  const {id}=useParams()

  useEffect(()=>{
  const singleuser= projects.find((tour)=>tour._id===id);

setUser({...singleuser})
  },[id])


useEffect(() => {
  // error && toast.error(error);

  return () => {
    
  }
}, [error])


useEffect(()=>{
  async function fetchData(){
  try {
    const res= await axios.get('http://localhost:5000/stats/users')
    setTours(  res.data)
    console.log('hey',tours[0].phone);
   } catch (error) {
    console.log(error);


    
  }
  }
  fetchData()
    },[])

const [number,setNumber]=useState('')
const handleNumber= (e)=>{
  setNumber(number)
  console.log(number);
}
return (
 <>
  {/* <ToastContainer /> */}

  <StyledForm id='cancelCourse' onSubmit={handleSubmit} style={{marginTop:'6rem'}} className='form'>
  
  <h2 style={{color:'whitesmoke'}}>{id? 'update your values':'Water bill and Other Charges'}</h2>
    <div className="main-rent-create">
 
{/* <Projects/> */}
<div className="rent-split-start">
    {/* <input className='form-input' type='text'  placeholder='Apartment eg A or B or C' onChange={(e)=> setUser({...users , apartment:e.target.value})} required/> */}
    <input className='form-input' type='text'  placeholder='Name' onChange={(e)=> setUser({...users , name:e.target.value})} required/>
    <input className='form-input' type='text' placeholder='House Number' onChange={(e)=> setUser({...users , houseNo:e.target.value})} required/>
    
     <input className='form-input' type='text' placeholder='any arrears' onChange={(e)=> setUser({...users ,arrears:e.target.value})} />
    {/* <input className='form-input' type='text' placeholder='any penalties' onChange={(e)=> setUser({...users ,penalty:e.target.value})} /> */}
    <input className='form-input' type='text' placeholder='Maintanance Charges' onChange={(e)=> setUser({...users ,services:e.target.value})}/>

    </div>
    <div className="rent-split">

    <input className='form-input' type='text' placeholder=' previous water read' onChange={(e)=> setUser({...users ,prevReads:e.target.value})}/>
     <input className='form-input' type='text' placeholder='current water read' onChange={(e)=> setUser({...users ,currentraed:e.target.value})} required/>
    <input className='form-input' type='text' placeholder='unit consumed' onChange={(e)=> setUser({...users ,units:e.target.value})} required/>
    <input className='form-input' type='text' placeholder='water bill' onChange={(e)=> setUser({...users ,waters:e.target.value})} required/>
    
     {/* mpesa screenshot
              <FileBase
                type="file"
                placeholder='mpesa screenshot'
                multiple={false}
                onDone={({ base64 }) =>
                  setUser({ ...users, imageFile: base64 })
                }
              /> */}
  </div>           
     

    
    
   
  
    
 
</div>
<button className='btn' onClick>
      {/* {auth.registerStatus==='pedding' ? 'submitting':'register' } */}
      Submit
    </button>


    {/* recommedations 
    <input type="Number" onChange={(e)=>setNumber(e.target.value)}  />
    <button onClick={handleNumber}>send</button>
    <a  href={`https://wa.me/${number}`} target="_blank" rel="noreferrer noopener">Send</a>
       */}
</StyledForm>
   

    </>
  
    

)
}

export default StudentProjectCreate