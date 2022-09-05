import React, { useEffect } from 'react'
import { useState } from 'react'
import {StyledForm} from './StyledForm'
import { Link, useNavigate } from 'react-router-dom';
// import { StyledForm } from './StyledForm'
import { useDispatch, useSelector } from "react-redux";
// import { productsCreate } from '../redux/features/tourSlice';
import {toast} from 'react-toastify'
import { createProject } from '../redux/features/projectSlice';
import FileBase from "react-file-base64";
import { createComplain } from '../redux/features/complain';


const StudentProjectCreate = () => {
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
       
       dispatch(createComplain(updateddata,toast))
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
  <>

<div className='rent' style={{marginTop:'6rem'}}>
    

  {user?.result?.houseNo==='G1' ?<Link className='apartment' to='/compaling1'>  <h5 className='text'></h5>compliments and complains</Link> :null }
   
   <div className="rent">
    
      {user?.result?.houseNo==='G2' ?<Link className='apartment'  to='/compaling2'> compliments and complains</Link> : null }
      </div>
      <div className="rent">
    
      {user?.result?.houseNo==='1A' ?<Link className='apartment'  to='/compalin1a'> compliments and complains</Link> : null }
      </div><div className="rent">
    
    {user?.result?.houseNo==='1B' ?<Link className='apartment'  to='/compalin1b'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='1C' ?<Link className='apartment'  to='/compalin1c'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='1D' ?<Link className='apartment'  to='/compalin1d'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='2A' ?<Link className='apartment'  to='/compalin2a'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='2B' ?<Link className='apartment'  to='/compalin2b'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='2C' ?<Link className='apartment'  to='/compalin2c'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='2D' ?<Link className='apartment'  to='/compalin2d'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='3A' ?<Link className='apartment'  to='/compalin3a'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='3B' ?<Link className='apartment'  to='/compalin3b'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='3C' ?<Link className='apartment'  to='/compalin3c'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='3D' ?<Link className='apartment'  to='/compalin3d'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='4A' ?<Link className='apartment'  to='/compalin4a'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='4B' ?<Link className='apartment'  to='/compalin4b'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='4C' ?<Link className='apartment'  to='/compalin4c'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='4D' ?<Link className='apartment'  to='/compalin4d'> compliments and complains</Link> : null }
    </div><div className="rent">
    
    {user?.result?.houseNo==='5A' ?<Link className='apartment'  to='/compalin5a'> compliments and complains</Link> : null }
    </div>
</div>
 
  <StyledForm id='cancelCourse' onSubmit={handleSubmit} style={{marginTop:'5rem'}} className='form'>
  <h2 style={{color:'whitesmoke'}}>Add A Compliment / Complain</h2>
    <div className="main-rent-create">
  <div className="rent-split-start">
    {/* <input className='form-input' type='text'  placeholder='Apartment Name' onChange={(e)=> setUser({...users , apartment:e.target.value})} required/> */}
    <input className='form-input' type='text'  placeholder='Name' onChange={(e)=> setUser({...users , name:e.target.value})} required/>
    <input className='form-input' type='text' placeholder='House Number' onChange={(e)=> setUser({...users , houseNo:e.target.value})} required/>
    </div>
    <div className="rent-split">
    {/* <input className='form-input' type='number' placeholder='Id Number' onChange={(e)=> setUser({...users ,idNo:e.target.value})} required/> */}
    <input className='form-input' type='date' placeholder='date' onChange={(e)=> setUser({...users ,createdAt:e.target.value})} required/>
      <input className='form-input' type='text' placeholder='Complain/Compliment' onChange={(e)=> setUser({...users ,complain:e.target.value})}/>
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
      Submit
    </button>
      
</StyledForm>


      
   
</>
   
  
    

)
}

export default StudentProjectCreate