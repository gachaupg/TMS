import { useEffect } from "react";
import "./App.css";
import MileProjects from './pages/MileProjects'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import StudentProjectCreate from './pages/StudentProjectCreate'
import TagTours from "./pages/TagTours";
import Main from "./pages/Main";
import Caretaker from "./pages/Caretaker";
import SingleProject from "./pages/SingleProject";
import Error from "./pages/Error";
import TenantDashboad from "./pages/TenantDashboad";
import Message2 from './pages/Message2'
import Vacation from "./pages/Vacation";
import Complain from "./pages/Complain";
import Rent from "./pages/Rent";
import Vacations from "./pages/Vacations";
import Complains from "./pages/Complains";
import ApartmentA from "./pages/ApartmentA";
import ApartmentB from "./pages/ApartmentB";
import ApartmentC from "./pages/ApartmentC";
import VacationsA from "./pages/VacationsA";
import VacationsB from "./pages/VacationsB";
import VacationsC from "./pages/VacationsC";
import ComplainA from "./pages/ComplainA";
import ComplainB from "./pages/ComplainB";
import ComplainC from "./pages/ComplainC";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import AdminSidebar from "./pages/AdminSidebar";
import AdminTenants from "./pages/AdminTenants";
import AdminTotalRent from "./pages/AdminTotalRent";
import AdminCaretaker from "./pages/AdminCaretaker";
import Admin from './pages/Admin'
import Summary from "./pages/Summary";
import AdminDefault from "./pages/AdminDefault";
import TenantA from "./pages/TenantA";
import TenantG2 from "./pages/TenantG2";
import Tenant1A from "./pages/Tenant1A";
import Tenant1B from "./pages/Tenant1B";
import Tenant1C from "./pages/Tenant1C";
import Tenant1D from "./pages/Tenant1D";
import Tenant2A from "./pages/Tenant2A";
import Tenant2B from "./pages/Tenant2B";
import Tenant2C from "./pages/Tenant2C";
import Tenant2D from "./pages/Tenant2D";
import Tenant3A from "./pages/Tenant3A";
import Tenant3B from "./pages/Tenant3B";
import Tenant3C from "./pages/Tenant3C";
import Tenant3D from "./pages/Tenant3d";
import Tenant4A from "./pages/Tenant4a";
import Tenant4B from "./pages/Tenant4b";
import Tenant4C from "./pages/Tenant4c";
import Tenant4D from "./pages/Tenant4d";
import Tenant5A from "./pages/Tenant5a";
import All from "./pages/All";
import StudentsProjects from "./pages/StudentsProjects";
import Message from "./pages/Message";

function App() {
  
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Header />
  
    {/* <AdminSidebar/> */}
     <Routes>
        <Route path="/" element={
          
            <Home />
          
        } />
         <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addproject" element={<StudentProjectCreate />} />
          <Route path="/editTour/:id" element={<StudentProjectCreate />} />
              <Route path="/main" element={<Main />} >
              <Route path="summary" element={< Summary/>} />
             
              <Route path="admintenants" element={<AdminTenants/>} />
             <Route path="admintotalrent" element={<AdminTotalRent/>} />
             <Route path="admincaretaker" element={<AdminCaretaker/>} />
             <Route index element={<AdminTenants/>} />
              </Route>
              <Route path="/rents" element={<StudentsProjects/>} />

             <Route path="/search" element={<All/>} />

              <Route path="/apartmentAr" element={<TenantA />} />
              <Route path="/g2" element={<TenantG2 />} />
              <Route path="/1a" element={<Tenant1A />} />
              <Route path="/1b" element={<Tenant1B />} />
              <Route path="/1c" element={<Tenant1C />} />
              <Route path="/1d" element={<Tenant1D />} />
              <Route path="/2a" element={<Tenant2A />} />
              <Route path="/2b" element={<Tenant2B />} />
              <Route path="/2c" element={<Tenant2C />} />
              <Route path="/22" element={<TenantG2 />} />
              <Route path="/2d" element={<Tenant2D />} />
              <Route path="/3a" element={<Tenant3A />} />
              <Route path="/3b" element={<Tenant3B />} />
              <Route path="/3c" element={<Tenant3C />} />
              <Route path="/3d" element={<Tenant3D />} />
              <Route path="/4a" element={<Tenant4A />} />
              <Route path="/4b" element={<Tenant4B />} />
              <Route path="/4c" element={<Tenant4C/>} />
              <Route path="/4d" element={<Tenant4D />} />
              <Route path="/5a" element={<Tenant5A />} />
              <Route path="/message" element={<Message />} />
              <Route path="/message2" element={<Message2/>} />

              <Route path="/milestone" element={<Caretaker />} />
              <Route path="/mileProject" element={<MileProjects />} />
              <Route path="/project/:id" element={<SingleProject />} />
              <Route path="*" element={<Error />} />
              <Route path="/dashboard" element={<TenantDashboad/>} />
              <Route path="/vacation" element={<Vacation/>} />
              <Route path="/complain" element={<Complain/>} />
              <Route path="/caretaker" element={<Caretaker/>} />
              <Route path="/rent" element={<Rent/>} />
              <Route path="/vacations" element={<Vacations/>} />
              <Route path="/complains" element={<Complains/>} />
              <Route path="/apartmentA" element={<ApartmentA/>} />
              <Route path="/apartmentB" element={<ApartmentB/>} />
              <Route path="/apartmentC" element={<ApartmentC/>} />
              <Route path="/vacationa" element={<VacationsA/>} />
              <Route path="/vacationb" element={<VacationsB/>} />
              <Route path="/vacationc" element={<VacationsC/>} />
              <Route path="/complaina" element={<ComplainA/>} />
              <Route path="/complainb" element={<ComplainB/>} />
             <Route path="/complainc" element={<ComplainC/>} />
             <Route path="/users/:id" element={<Profile/>} />
            
             {/* <Route path="/adminsidebar" element={<AdminSidebar/>} /> */}
             {/* <Route path="/main" element={<Admin />}/> */}

</Routes> 
     {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
