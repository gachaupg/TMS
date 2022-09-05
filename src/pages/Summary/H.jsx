import axios from 'axios';
import React, { useEffect } from 'react'

const H = () => {
    const article = { title: 'amount=1&msisdn=0757198515&account_no=0830178826506' };
    const headers = { 
      'Apikey': 'dmaOVyjSBNV',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    useEffect(()=>{
        async function fetchData(){
        try {
        const data= axios.post('https://tinypesa.com/petergachau', article, { headers });

         console.log('data',data);
         } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])
  


return(
    <div>
        hello
    </div>
)
}
export default H