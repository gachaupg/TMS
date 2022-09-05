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
import ComplainG1 from "./pages/Complains/ComplainG1";
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
import VacationG2 from "./pages/Vacations/VacationG2";
import Vacation1B from "./pages/Vacations/Vacation1B";
import VacationG1 from "./pages/Vacations/VacationG1";
import Vacation1C from "./pages/Vacations/Vacation1C";
import Vacation1D from "./pages/Vacations/Vacation1D";
import Vacation2A from "./pages/Vacations/Vacation2A";
import Vacation2B from "./pages/Vacations/Vacation2B";
import Vacation2C from "./pages/Vacations/Vacation2C";
import Vacation2D from "./pages/Vacations/Vacation2D";
import Vacation3A from "./pages/Vacations/Vacation3A";
import Vacation3B from "./pages/Vacations/Vacation3B";
import Vacation3C from "./pages/Vacations/Vacation3C";
import Vacation3D from "./pages/Vacations/Vacation3D";
import Vacation4A from "./pages/Vacations/Vacation4A";
import Vacation4B  from "./pages/Vacations/Vacation4B";
import Vacation4C  from "./pages/Vacations/Vacation4C";
import Vacation4D  from "./pages/Vacations/Vacation4d";
import Vacation5B  from "./pages/Vacations/Vacation5B";
import ComplainG2 from "./pages/Complains/ComplainG2"
import Complain1A from "./pages/Complains/Complain1A";
import Complain1B from "./pages/Complains/Complain1B";
import Complain1C from "./pages/Complains/Complain1C";
import Complain1D from "./pages/Complains/Complain1D";
import Complain2A from "./pages/Complains/Complain2A";
import Complain2B from "./pages/Complains/Complain2B";
import Complain2C from "./pages/Complains/Complain2C";
import Complain2D from "./pages/Complains/Complain2D";
import Complain3A from "./pages/Complains/Complain3A";
import Complain3B from "./pages/Complains/Complain3B";
import Complain3C from "./pages/Complains/Complain3C";
import Complain3D from "./pages/Complains/Complain3D";
import Complain4A from "./pages/Complains/Complain4A";
import Complain4B  from "./pages/Complains/Complain4B";
import Complain4C  from "./pages/Complains/Complain4C";
import Complain4D  from "./pages/Complains/Complain4D";
import Complain5B  from "./pages/Complains/Complain5B";
import All from "./pages/All";
import StudentsProjects from "./pages/StudentsProjects";
import Message from "./pages/Message";
import TenantCreate from "./pages/TenantCreate";
import Notice from './pages/Notice'
import CaretakerVacation from "./pages/CareTakerVacation";
import CaretakerComplain from "./pages/CareTakerComplain";
import Expenses from "./pages/Expenses";
import Responses from "./pages/Responses";
import Vacation1A from "./pages/Vacations/Vacation1A";
import TenantA from "./pages/TenantA";
import ServicesG1 from "./pages/Services/ServicesG1";
import ServicesG2 from "./pages/Services/ServicesG2";
import Services1A from "./pages/Services/Services1A";
import Services1B from "./pages/Services/Services1B";
import Services1C from "./pages/Services/Services1C";
import Services1D from "./pages/Services/Services1D";
import Services2A from "./pages/Services/Services2A";
import Services2B from "./pages/Services/Services2B";
import Services2C from "./pages/Services/Services2C";
import Services2D from "./pages/Services/Services2D";
import Services3A from "./pages/Services/Services3A";
import Services3B from "./pages/Services/Services3B";
import Services3C from "./pages/Services/Services3C";
import Services3D from "./pages/Services/Services3D";
import Services4A from "./pages/Services/Services4A";
import Services4B from "./pages/Services/Services4B";
import Services4C from "./pages/Services/Services4C";
import Services4D from "./pages/Services/Services4D";
import Services5B from "./pages/Services/Services5B";
import Users from "./pages/Users";
import Topbar from "./components/Topbar";
import Summarys from "./pages/Summarys";
import TenantsSummary from "./pages/TenantsSummary";
import AdminAll from './pages/AdminAll'
import SummaryG1 from "./pages/Summary/SummaryG1";
import SummaryG2 from "./pages/Summary/SummaryG2";
import Summary1A from "./pages/Summary/Summary1A";
import Summary1B from "./pages/Summary/Summary1B";
import Summary1C from "./pages/Summary/Summary1C";
import Summary1D from "./pages/Summary/Summary1D";
import Summary2A from "./pages/Summary/Summary2A";
import Summary2B from "./pages/Summary/Summary2B";
import Summary2C from "./pages/Summary/Summary2C";
import Summary2D from "./pages/Summary/Summary2D";
import Summary3A from "./pages/Summary/Summary3A";
import Summary3B from "./pages/Summary/Summary3B";
import Summary3C from "./pages/Summary/Summary3C";
import Summary3D from "./pages/Summary/Summary3D";
import Summary4A from "./pages/Summary/Summary4A";
import Summary4B from "./pages/Summary/Summary4B";
import Summary4C from "./pages/Summary/Summary4C";
import Summary4D from "./pages/Summary/Summary4D";
import Summary5B from "./pages/Summary/Summary5B";
import Notifications from "./pages/Notifications";
function App() {
  
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
    <BrowserRouter>
    
    <ToastContainer/>
    {/* <Topbar/> */}
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
             <Route path="admin" element={<AdminAll/>}/>
              <Route path="admintenants" element={<AdminTenants/>} />
             <Route path="admintotalrent" element={<AdminTotalRent/>} />
             <Route path="admincaretaker" element={<AdminCaretaker/>} />
             <Route index element={<AdminTenants/>} />
              </Route>
              <Route path="/rents" element={<StudentsProjects/>} />

             <Route path="/search" element={<All/>} />
             <Route path="/users" element={<Users/>} />
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
              <Route path="/3d" element={<Tenant3D/>} />
              <Route path="/4a" element={<Tenant4A />} />
              <Route path="/4b" element={<Tenant4B />} />
              <Route path="/4c" element={<Tenant4C/>} />
              <Route path="/4d" element={<Tenant4D />} />
              <Route path="/5b" element={<Tenant5A />} />
              {/* //vacations */}
              <Route path="/vacationg1" element={<VacationG1/>} />
              <Route path="/vacationg2" element={<VacationG2/>} />
              <Route path="/vacation1a" element={<Vacation1A />} />
              <Route path="/vacation1b" element={<Vacation1B/>} />
              <Route path="/vacation1c" element={<Vacation1C/>} />
              <Route path="/vacation1d" element={<Vacation1D />} />
              <Route path="/vacation2a" element={<Vacation2A />} />
              <Route path="/vacation2b" element={<Vacation2B />} />
              <Route path="/vacation2c" element={<Vacation2C />} />
              <Route path="/vacation2c" element={<Vacation2D />} />
              <Route path="/vacation2d" element={<Vacation2D />} />
              <Route path="/vacation3a" element={<Vacation3A/>} />
              <Route path="/vacation3b" element={<Vacation3B />} />
              <Route path="/vacation3c" element={<Vacation3C />} />
              <Route path="/vacation3d" element={<Vacation3D/>} />
              <Route path="/vacation4a" element={<Vacation4A />} />
              <Route path="/vacation4b" element={<Vacation4B/>} />
              <Route path="/vacation4c" element={<Vacation4C/>} />
              <Route path="/vacation4d" element={<Vacation4D />} />
              <Route path="/vacation5b" element={<Vacation5B/>} />

              {/* complains */}

              <Route path="/compaling1" element={<ComplainG1 />} />
              <Route path="/compaling2" element={<ComplainG2 />} />
              <Route path="/compalin1a" element={<Complain1A />} />
              <Route path="/compalin1b" element={<Complain1B />} />
              <Route path="/compalin1c" element={<Complain1C />} />
              <Route path="/compalin1d" element={<Complain1D />} />
              <Route path="/compalin2a" element={<Complain2A />} />
              <Route path="/compalin2b" element={<Complain2B />} />
              <Route path="/compalin2c" element={<Complain2C />} />
              <Route path="/compalin2d" element={<Complain2D />} />
              <Route path="/compalin3a" element={<Complain3A />} />
              <Route path="/compalin3b" element={<Complain3B />} />
              <Route path="/compalin3c" element={<Complain3C />} />
              <Route path="/compalin3d" element={<Complain3D />} />
              <Route path="/compalin4a" element={<Complain4A />} />
              <Route path="/compalin4b" element={<Complain4B />} />
              <Route path="/compalin4c" element={<Complain4C/>} />
              <Route path="/compalin4d" element={<Complain4D />} />
              <Route path="/compalin5b" element={<Complain5B />} />

               {/* Services */}

               <Route path="/servicesg1" element={<ServicesG1 />} />
              <Route path="/servicesg2" element={<ServicesG2/>} />
              <Route path="/services1a" element={<Services1A/>} />
              <Route path="/services1b" element={<Services1B />} />
              <Route path="/services1c" element={<Services1C />} />
              <Route path="/services1d" element={<Services1D/>} />
              <Route path="/services2a" element={<Services2A/>} />
              <Route path="/services2b" element={<Services2B />} />
              <Route path="/services2c" element={<Services2C/>} />
              <Route path="/services2d" element={<Services2D />} />
              <Route path="/services3a" element={<Services3A />} />
              <Route path="/services3b" element={<Services3B />} />
              <Route path="/services3c" element={<Services3C  />} />
              <Route path="/services3d" element={<Services3D />} />
              <Route path="/services4a" element={<Services4A />} />
              <Route path="/services4b" element={<Services4B />} />
              <Route path="/services4c" element={<Services4C/>} />
              <Route path="/services4d" element={<Services4D />} />
              <Route path="/services5b" element={<Services5B/>} />


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
             <Route path="/tenantcreate" element={<TenantCreate/>} />
             <Route path="/notice" element={<Notice/>} />
             <Route path="/caretakervacation" element={<CaretakerVacation/>} />
             <Route path="/Caretakercomment" element={<CaretakerComplain/>} />
             <Route path="/responses" element={<Responses/>} />
             <Route path="/expenses" element={<Expenses/>} />
              <Route path="/summarys" element={<Summarys/>}/>
             <Route path="/rentals" element={<TenantsSummary/>}/>
             {/* <Route path="/adminsidebar" element={<AdminSidebar/>} /> */}
             {/* <Route path="/main" element={<Admin />}/> */}
             {/* //summary */}

             <Route path="/summaryg1" element={<SummaryG1/>}/>
             <Route path="/summaryg2" element={<SummaryG2/>}/>
             <Route path="/summary1a" element={<Summary1A/>}/>
             <Route path="/summary1b" element={<Summary1B/>}/>
             <Route path="/summary1c" element={<Summary1C/>}/>
             <Route path="/summary1d" element={<Summary1D/>}/>
             <Route path="/summary2a" element={<Summary2A/>}/>
             <Route path="/summary2b" element={<Summary2B/>}/>
             <Route path="/summary2c" element={<Summary2C/>}/>
             <Route path="/summary2d" element={<Summary2D/>}/>
             <Route path="/summary3a" element={<Summary3A/>}/>
             <Route path="/summary3b" element={<Summary3B/>}/>
             <Route path="/summary3c" element={<Summary3C/>}/>
             <Route path="/summary3d" element={<Summary3D/>}/>
             <Route path="/summary4a" element={<Summary4A/>}/>
             <Route path="/summary4b" element={<Summary4B/>}/>
             <Route path="/summary4c" element={<Summary4C/>}/>
             <Route path="/summary4d" element={<Summary4D/>}/>
             <Route path="/summary5b" element={<Summary5B/>}/>
             <Route path="/notification" element={<Notifications/>}/>


</Routes> 
     {/* <Footer/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
