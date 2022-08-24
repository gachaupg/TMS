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
import { createVacation } from '../redux/features/vacation';
import moment from 'moment';


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
       
       dispatch(createVacation(updateddata,toast))
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
 <div style={{marginTop:'8rem'}}  className="notification">
  
 <div className='rent-'>
    

    {user?.result?.houseNo==='G1' ?<Link className='apartment' to='/vacationg1'>  <h5 className='text'></h5>Notices to Vacate</Link> :null }
     </div>
     <div className="rent-main">
      
        {user?.result?.houseNo==='G2' ?<Link className='apartment'  to='/vacationg2'> Notices to Vacate</Link> : null }
        </div>
        <div className="rent-main">
      
        {user?.result?.houseNo==='1A' ?<Link className='apartment'  to='/vacation1a'> Notices to Vacate</Link> : null }
        </div><div className="rent-main">
      
      {user?.result?.houseNo==='1B' ?<Link className='apartment'  to='/vacation1b'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='1C' ?<Link className='apartment'  to='/vacation1c'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='1D' ?<Link className='apartment'  to='/vacation1d'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='2A' ?<Link className='apartment'  to='/vacation2a'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='2B' ?<Link className='apartment'  to='/vacation2b'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='2C' ?<Link className='apartment'  to='/vacation2c'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='2D' ?<Link className='apartment'  to='/vacation2d'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='3A' ?<Link className='apartment'  to='/vacation3a'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='3B' ?<Link className='apartment'  to='/vacation3b'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='3C' ?<Link className='apartment'  to='/vacation3c'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='3D' ?<Link className='apartment'  to='/vacation3d'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='4A' ?<Link className='apartment'  to='/vacation4a'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='4B' ?<Link className='apartment'  to='/vacation4b'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='4C' ?<Link className='apartment'  to='/vacation4c'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='4D' ?<Link className='apartment'  to='/vacation4d'> Notices to Vacate</Link> : null }
      </div><div className="rent-main">
      
      {user?.result?.houseNo==='5A' ?<Link className='apartment'  to='/vacation5a'> Notices to Vacate</Link> : null }
      </div> 
 <StyledForm id='cancelCourse' onSubmit={handleSubmit} style={{}}>

<h2 style={{color:'whitesmoke'}}>Add A  Notice To Vacate</h2>
<div className="main-rent-create">
  
<div className="rent-split-start">
  {/* <input className='form-input' type='text'  placeholder='Apartment Name' onChange={(e)=> setUser({...users , apartment:e.target.value})} required/> */}
  <input className='form-input' type='text'  placeholder='Name' onChange={(e)=> setUser({...users , name:e.target.value})} required/>
  <input className='form-input' type='text' placeholder='House Number' onChange={(e)=> setUser({...users , houseNo:e.target.value})} required/>
  <input className='form-input' type='text' placeholder='Contract Renewal' onChange={(e)=> setUser({...users , contractRenewal:e.target.value})} />
  </div>
  <div className="rent-split">
  <input className='form-input' type='date' placeholder='date' onChange={(e)=> setUser({...users ,createdAt:e.target.value})} required/>
  <input className='form-input' type='text' placeholder='Notice to vacate' onChange={(e)=> setUser({...users ,reason:e.target.value})}/>
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

 
 
   </div>
  
</>
   
  
    

)
}

export default StudentProjectCreate