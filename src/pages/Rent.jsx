import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'
import ApartmentA from './ApartmentA';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select'
const Rent = () => {
    const {user}=useSelector((state)=>({...state.auth}))
    const userId =user?.result?._id
    const [users,setUsers]=useState([]);
    const [A,setA]=useState(false);
    const [admin,setAdmin]=useState([]);
    const [caretaker,setCareTaker]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('http://localhost:5000/project')
        setUsers(  res.data)
       } catch (error) {
        console.log(error);
        
      }
      }
      fetchData()
        },[])
        useEffect(()=>{
          async function fetchData(){
          try {
            const res= await axios.get('http://localhost:5000/milestone')
            setAdmin(  res.data)
            console.log();
           } catch (error) {
            console.log(error);
            
          }
          }
          fetchData()
            },[])
              useEffect(()=>{
                async function fetchData(){
                try {
                  const res= await axios.get('http://localhost:5000/milestone')
                  
                  console.log( 'hello',res.data);
                setCareTaker( res.data)
                console.log('p', caretaker);
                
                } catch (error) {
                  console.log(error);
                  
                }
                }
                fetchData()
                  },[])
                  const open =()=>{
                    if(A){
navigate('/')
                    }
                  }
              
  return (
    <div className='rent-pages' style={{marginTop:'8rem'}}>


      
    
   
    {/* Hello   {user?.result?.name} */}
    <div className='weired-links'>
    

  {user?.result?.houseNo==='G1' ?<Link className='apartment' to='/servicesg1'>  <h5 className='text'></h5>Water and Services Charges</Link> :null }
   </div>
   <div className="weired-links">
    
    {user?.result?.houseNo==='G2' ?<Link className='apartment'  to='/servicesg2'> Water and Services Charges</Link> : null }
      </div>
      <div className="">
   
      {user?.result?.houseNo==='1A' ?<Link className='apartment'  to='/services1a'> Water and Services Charges</Link> : null }
      </div><div classNameweired-links="">
    
    {user?.result?.houseNo==='1B' ?<Link className='apartment'  to='/services1b'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='1C' ?<Link className='apartment'  to='/services1c'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='1D' ?<Link className='apartment'  to='/services1d'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='2A' ?<Link className='apartment'  to='/services2a'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='2B' ?<Link className='apartment'  to='/services2b'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='2C' ?<Link className='apartment'  to='/services2c'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='2D' ?<Link className='apartment'  to='/services2d'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='3A' ?<Link className='apartment'  to='/services3a'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='3B' ?<Link className='apartment'  to='/services3b'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='3C' ?<Link className='apartment'  to='/services3c'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='3D' ?<Link className='apartment'  to='/services3d'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='4A' ?<Link className='apartment'  to='/services4a'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='4B' ?<Link className='apartment'  to='/services4b'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='4C' ?<Link className='apartment'  to='/services4c'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='4D' ?<Link className='apartment'  to='/services4d'> Water and Services Charges</Link> : null }
    </div><div className="weired-links">
    
    {user?.result?.houseNo==='5A' ?<Link className='apartment'  to='/services5a'> Water and Services Charges</Link> : null }
    </div>
      
     {/* {caretaker.data?.map((i)=>{
      return(
        <div>
       
      {users.data?.map((items)=>{
  
        if(items.apartment===i.apartment  ){
          return(
          
            <div className='rent-card'>
                     { items.apartment===i.apartment ? 'hello':'null'}

              <p>Name: {items.name}</p>
              <p> RentPaid: {items.amount}</p>
              <p>ApartMent: {items.apartment}</p>
              <p> HouseNo: {items.houseNo}</p>
              <p>IdNo: {items.idNo}</p>
              <p>WaterFee: {items.waterFee}</p> 
              <p>balance: 00</p>
              z
              </div>
            
        )
        }
        
      })}   </div>
      )
     })} */}
    
    
    <p className="header">Rents</p>
    <div className='rent-card'>
    

    {user?.result?.houseNo==='G1' ?<Link className='apartment' to='/apartmentAr'>  <h5 className='text'></h5>Rent Progress</Link> :null }
     </div>
     <div className="rent-cards">
      
        {user?.result?.houseNo==='G2' ?<Link className='apartment'  to='/g2'> Rent Progress</Link> : null }
        </div>
        <div className="rent-cards">
      
        {user?.result?.houseNo==='1A' ?<Link className='apartment'  to='/1a'> Rent Progress</Link> : null }
        </div><div className="rent-cards">
      
      {user?.result?.houseNo==='1B' ?<Link className='apartment'  to='/1b'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='1C' ?<Link className='apartment'  to='/1c'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='1D' ?<Link className='apartment'  to='/1d'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='2A' ?<Link className='apartment'  to='/2a'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='2B' ?<Link className='apartment'  to='/2b'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='2C' ?<Link className='apartment'  to='/2c'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='2D' ?<Link className='apartment'  to='/2d'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='3A' ?<Link className='apartment'  to='/3a'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='3B' ?<Link className='apartment'  to='/3b'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='3C' ?<Link className='apartment'  to='/3c'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='3D' ?<Link className='apartment'  to='/3d'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='4A' ?<Link className='apartment'  to='/4a'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='4B' ?<Link className='apartment'  to='/4b'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='4C' ?<Link className='apartment'  to='/4c'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='4D' ?<Link className='apartment'  to='/4d'> Rent Progress</Link> : null }
      </div><div className="rent-cards">
      
      {user?.result?.houseNo==='5A' ?<Link className='apartment'  to='/5a'> Rent Progress</Link> : null }
      </div>
        



 </div> )
}

export default Rent