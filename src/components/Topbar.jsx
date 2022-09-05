import { MDBNavbar } from 'mdb-react-ui-kit'
import React from 'react'

const Topbar = () => {
  return (
    <MDBNavbar fixed="top" expand="lg" className='topbar'>
   <div className="start">navisoftwarecompany</div>  
   <div className="start">copyright&copy;{new Date().getFullYear()}
          <span>WebDev</span> all rights reserved</div> 
<div className="email">Email</div>
<div className="whatsapp">
<a  href='https://wa.me/+254757198515' target="_blank" rel="noreferrer noopener">Whatsapp:</a>
</div>

    </MDBNavbar>
  )
}

export default Topbar