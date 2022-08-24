import './Details/table.css'
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
import { useState } from 'react';
import moment from 'moment';
import { format } from 'timeago.js';
import { useDispatch, useSelector } from "react-redux";


const columns = [
{security:'Security',Electricitycharges:''},
{security:'Electricity charges'},
{security:'Cleaning material'},
{security:'Water Charges'},
{security:'Caretaker Salary'},
{security:'Maintenance charges'},
{security:'Breadband(wifi)'},
{security:'Total Operational Cost'},
  
];


const AdminSidebar = () =>{
  const [tours,setTours]=React.useState([])
const [total,setTotal]=useState([])
const [expenses,setExpenses]=useState([])
const [totalwifi,setTotalWifi]=useState([])
const [date,setDate]=useState([])
const [totalwater,setTotalWater]=useState([])
const [users,setTotalWaters]=useState([])
const { user } = useSelector((state) => ({ ...state.auth }));
const X=19
function compare(a,b){
  if(a._id <b._id){
    return 1
  }
  if(a._id >b._id){
    return -1
  }return 0
}


React.useEffect(()=>{
  async function fetchData(){
  try {
    const res= await axios.get('http://localhost:5000/stats/totalrentb');
    res.data.sort(compare)
    setDate(  res.data)
      
    
   
   } catch (error) {
    console.log(error);


    
  }
  }
  fetchData()
    },[])
  React.useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get('http://localhost:5000/stats/chartss');
      res.data.sort(compare)
      setTours(  res.data)
      setTotalWaters(res.data.map[0].createdAt)
        
      
      console.log('hey',tours);
     } catch (error) {
      console.log(error);


      
    }
    }
    fetchData()
      },[])

      
  React.useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get('http://localhost:5000/stats/totalrentb')
      res.data.sort(compare)
      setTotal(  res.data)
      console.log(res.data[0].houseNo);
      console.log('hey',total);
     } catch (error) {
      console.log(error);


      
    }
    }
    fetchData()
      },[])

      React.useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('http://localhost:5000/stats/totalwifi')
          setTotalWifi(  res.data)
          
          console.log('hey',totalwifi);
         } catch (error) {
          console.log(error);
    
    
          
        }
        }
        fetchData()
          },[])

          React.useEffect(()=>{
            async function fetchData(){
            try {
              const res= await axios.get('http://localhost:5000/stats/totalwater')
              res.data.sort(compare)
              setTotalWater(  res.data)
              console.log(res.data[0]._id);
             } catch (error) {
              console.log(error);
        
        
              
            }
            }
            fetchData()
              },[])
              React.useEffect(()=>{
                async function fetchData(){
                try {
                  const res= await axios.get('http://localhost:5000/expenses')
                  res.data.sort(compare)
                  setExpenses(  res.data)
                  console.log('expenses',expenses);
                 } catch (error) {
                  console.log(error);
            
            
                  
                }
                }
                fetchData()
                  },[])
    


      const rows =  [
        
          
        {
         
          digits:date[0]?._id,
        
         
        },
      ]
      const currentMonth = moment().subtract(1, 'months').format('MMM');  
      const currentMonth1 = moment().month()+1; 
  const test=moment().format() 
  return (
    // <div style={{ height: 1000, width: '100%' }}>
    //   <DataGrid
    //     rows={rows}
    //     columns={columns}
        
    //     // pageSize={5}
    //     rowsPerPageOptions={[5]}
    //     checkboxSelection
    //   />
    // </div>

    <div className='app-container'>
     

     {rows.map((i)=>{
      return(
        <>
    month of {i.digits}
        
{/* 
// {tours.length} */}

{/* {totalwater[0]._id} */}
{/* {tours[0].createdAt} */}
{/* {currentMonth1===totalwifi[0]._id?( */}

{i.digits===currentMonth1?(
  <table>

<thead>
  <tr>
<th>time{user.length}</th>
<th>House number</th>
<th>Tenant Name</th>
<th>Monthly Rent</th>
<th>Wifi</th>
<th>Water</th>
<th>Arrears</th>
<th>Penalty</th>
<th>Balance</th>
<th>Contract Renewal</th>
<th>Comments</th>


  </tr>
</thead>



  {tours && tours?.map((item)=>{

    return(
      <>
       

      <tr>
        <td>{format(item.createdAt)}</td>
    
    
    <td>{item.houseNo}</td>
    <td>{item.name}</td>
    <td>{item.amount}</td>
    <td>{item.wifi}</td>
    <td>{item.waterFee}</td>
    <td>{item.arrears}</td>
    <td>{item.penalties}</td>
    <td>{item.balance}</td>
    <td>{item.aptType}</td>
    <td>{item.apartment}</td>
  </tr> 


  </>
    )
  
    
  })}
 


{expenses && expenses?.map((item)=>{
  return(

  <>
  
  <p>{format(item.createdAt)}</p>
  <thead>
  <tr>

<th>Operational Cost</th>

</tr>
</thead>
  <tbody>
<tr>
   <td>Security Charges</td>
   <td>{item.security}</td>
  </tr>
</tbody>
<tbody>
<tr>
   <td>Electricity charges</td>
   <td>{item.electricityCharges}</td>
  </tr>
</tbody>
<tbody>
<tr>
   <td>Cleaning materials</td>
   <td>{item.clean}</td>
  </tr>
</tbody>
<tbody>
<tr>
   <td>Water Charges</td>
   <td>{item.waterCharges}</td>
  </tr>
</tbody>
<tbody>
<tr>
   <td>Caretaker Salary</td>
   <td>{item.careTakerSalary}</td>
  </tr>
</tbody>

<tbody>
<tr>
   <td>Maintenance charges</td>
   <td>{item.maintananceSalary}</td>
  </tr>
</tbody><tbody>
<tr>
   <td>Broadband(wifi)</td>
   <td>{item.wifi}</td>
  </tr>
</tbody><tbody>
<tr>
   <td>Total Operational Cost'</td>
   <td>{item.security+item.electricityCharges+item.waterCharges+item.clean
   +item.careTakerSalary+item.maintananceSalary+item.wifi}</td>
  </tr>
</tbody>
</>)
})} 

{totalwifi.map((item)=>{
  return(
    <>

{item._id===i.digits?(
  <>
  <p>{format(item.createdAt)}</p>
  <thead>
    <tr>
    
    
  <th>Repayments</th>
  </tr>
  </thead>
  <tbody>
  <tr>
     <td>Tenants water repayments</td>
     <td>{item.total3}</td>
    </tr>
  </tbody>
  <tbody>
  <tr>
     <td>Tenants wifi repayments</td>
     <td>{item.total}</td>
    </tr>
  </tbody>
  <tbody>
  <tr>
     <td>Total monthly rent</td>
     <td>{item.total2}</td>
    </tr>
  </tbody>
  <tbody>
  <tr>
     <td>Total Arrears</td>
     <td>{item.total4}</td>
    </tr>
  </tbody>
  <tbody>
  <tr>
     <td>Total Penalties</td>
     <td>{item.total5}</td>
    </tr>
  </tbody>
  <tbody>
  <tr>
     <td>Contract Renewal</td>
     <td>{item.total6}</td>
    </tr>
  </tbody>
  <tbody>
  <tr>
     <td>Deposit</td>
     <td>{item.total7}</td>
    </tr>
  </tbody>
  <tbody>
  <tr>
     <td>Total Repayments</td>
   <th>{item.total3+item.total+item.total2+item.total4+item.total5+item.total6+item.total7}</th> 
    </tr>
  
  
    <thead>
      <tr>
        <td>Monthly Revenue</td>
        {totalwater.map((i)=>{
          return(
            
            
              <div>
                
                  <div>
                    <th>{(item.total3+item.total+item.total2+item.total4+item.total5+item.total6)-(i.count)}</th> 
                  </div>
               
               
            </div>
             )
        })}
        
      </tr>
    </thead>
  </tbody>
</>):null}


    </>
  )
})}



  
</table>
):null}
  
  
{/* ):'rrr'} */}
</>
      )
     })}

    </div>
  );
}
export default AdminSidebar