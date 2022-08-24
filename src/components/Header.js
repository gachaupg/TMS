import React, { useState } from "react";
import logo from '../Assets/logo.jpeg'
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = user?.token;

  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      dispatch(setLogout());
    }
  }

 

  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#CC9966" }}>
      <MDBContainer>
        <MDBNavbarBrand
          href="/"
          style={{ color: "#606080", height:"80px",fontWeight: "600", fontSize: "22px" }}
        >
         <img className="logo" src={logo} alt="navi"/>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toogle navigation"
          onClick={() => setShow(!show)}
          style={{ color: "#606080" }}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={show} navbar>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
           
            <MDBNavbarItem>
              <MDBNavbarLink href="/">
                <p className="header-text"> <span >Home</span> </p>
              </MDBNavbarLink>
            </MDBNavbarItem>
           
            


            {user?.result?._id ? (
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">
                  <p className="header-text" onClick={() => handleLogout()}>
                    Logout
                  </p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            ) : (
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">
                  <p className="header-text">Login</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            )}




          </MDBNavbarNav>



         
          {/* <form className="d-flex input-group w-auto" >
            <input
              type="text"
              className="form-control"
              placeholder="Search Tour"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div style={{ marginTop: "5px", marginLeft: "5px" }}>
              <MDBIcon fas icon="search" />
            </div>
          </form> */}
        </MDBCollapse>
      </MDBContainer>
      {/* {user?.result?._id && (
              <h5 style={{ marginRight: "30px", marginTop: "27px" }}>
               profile<Link to='/profile'>
               <MDBIcon fas icon="user-circle" className="fa-2x" />

                {/* Profile {user?.result?.name} */}
                {/* </Link> 
              </h5> */}

    </MDBNavbar>
  );
};

export default Header;
