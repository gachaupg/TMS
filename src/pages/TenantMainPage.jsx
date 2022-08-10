import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { io } from "socket.io-client";
const TenantMainPage = () => {
    const [socket, setSocket] = useState(null);
    

    const {user}=useSelector((state)=>({...state.auth}))

    useEffect(() => {
        socket?.emit("newUser", user);
        console.log('socket',socket);
      }, [socket, user]);
    

  return (
    <div className="tenant-page">
        <div className="tenant-header">
        
    {socket}

 <Link className='apartment' to='/rent'>  <button className="btn">Dashboard</button></Link> 

                
        </div>
       
            <div className="tenant-header">
            
                <Link to='/vacation'>
                    <button className='btn'>
                    Vacation notice
                    </button>
                </Link>
                <Link to='/complain'>
                    <button className='btn'>
                        add a complain
                    </button>
                </Link>

            
        </div>
    </div>
  )
}

export default TenantMainPage