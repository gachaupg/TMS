import axios from 'axios'
import jsPDF from 'jspdf';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

const TenantA = () => {
    const [admin,setAdmin]=useState([]);

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('http://localhost:5000/stats/projects/singleab')
          setAdmin(  res.data)
          console.log('admin',admin[0].name);
         } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])


          const {name,amount,apartment,houseNo,balance}=admin

          console.log('rebt ', );
            const doc= ()=>{
              var pdf =new jsPDF('landscape', 'px','a4','false');
              
              
              pdf.text(30,10,`month of ${moment().format('MM YYYY ')}`)
              pdf.text(30,30,`name: ${admin[0].name}`)
              pdf.text(30,50,`Amount: ${admin[0].amount}`)
              pdf.text(30,70,`Apartment: ${admin[0].apartment}`)
              pdf.text(30,85,`name: ${admin[0].houseNo}`)
              pdf.text(30,100,`balance: ${admin[0].balance}`)
              
              
              pdf.save('recipt.pdf')
            }



  return (<>
    <h4 className='headers'>Apartment A all Rents Progress</h4>

    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>
        <h3 className='month'>month of {moment().format('MM YYYY ')}</h3>

              {/* <p>Name: {items.name}</p>
              <p> RentPaid: {items.amount}</p>
              <p>ApartMent: {items.apartment}</p>
              <p> HouseNo: {items.houseNo}</p>
              <p>IdNo: {items.idNo}</p>
              <p>WaterFee: {items.waterFee}</p>  */}
              <p className='rentss'> <p> Name:   </p> <p>{items.name}</p> </p>
              <p className='rentss'> <p>RentPaid: </p>   <p>{items.amount}</p> </p>
              <p className='rentss'> <p>HouseNo:</p>  <p>{ ('') }{items.houseNo}</p> </p>
              <p className='rentss'> <p>ApartMent Name:</p> <p>{items.apartment}</p> </p>
              <p className='rentss'> <p>IdNo:</p>  <p>{items.idNo}</p></p>
              <p className='rentss'> <p>Fisrt Water Read:</p> <p>{items.currentRead}</p> </p> 
              <p className='rentss'> <p>Last Water Read:</p> <p>{items.lastRead}</p> </p> 
              <p className='rentss'> <p>Method of payment:</p> <p>{items.payment}</p> </p> 
              <p className='rentss'> <p>Date of Payment:</p> <p>{items.datePaid}</p> </p> 
              <p className='rentss'> <p>Type of the rental:</p> <p>{items.aptType}</p> </p> 
              <p className='rentss'> <p>Payment Screenshot:</p> <img className='img' src={items.imageFile} alt="" /> </p> 


              Balance:
              <p>{items.aptType==='1bedroom' ? items.plotA-items.amount: null}</p>
              <p>{items.aptType==='2bedroom' ? items.plotA-items.amount: null}</p>
              <button onClick={doc} className="btn" id='btnreceipt' >
      Get Receipt
     </button>
          
              </div>
      )
    })}
    </div>
 </> )
}

export default TenantA