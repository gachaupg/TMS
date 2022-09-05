import UserModal from "../models/user.js";
import express  from "express";
import TourModal from '../models/tour.js'
import {auth,isUser,isAdmin} from '../middleware/admin.js'
import moment from 'moment'
import ExpensesModal from "../models/Expenses.js";

import MileModal from "../models/milestone.js";
import ComplainModal from "../models/complains.js";
import VacationModal from "../models/vacation.js";
const router = express.Router();


router.get ('/allpayments',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .month(moment().month()-2)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {} },
            // {
            //     $group:{
            //         _id:'$month',
            //         total:{$sum:1},
                    
            //     }
            // }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


 })
 router.get ('/t',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .month(moment().month()-2)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {createdAt:{$gte:new Date(previosMonth)} } },
            {
                $project:{
                    month:{$month:'$createdAt'}
                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    total:{$sum:1},
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


 })


router.get ('/',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .month(moment().month()-2)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await UserModal.aggregate([
            { $match : {createdAt:{$gte:new Date(previosMonth)} } },
            {
                $project:{
                    month:{$month:'$createdAt'}
                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    total:{$sum:1},
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


 })
 
router.get ('/totalrenta',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .month(moment().month()-2)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {aptType:'1bedroom',createdAt:{$gte:new Date(previosMonth)} } },
            {
                $project:{
                    month:{$month:'$createdAt'},
                    total:"$amount"
                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    total:{$sum:"$total"},
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })

 router.get ('/totalwifi',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .month(moment().month()-2)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {createdAt:{$gte:new Date(previosMonth)} } },
            {
                $project:{
                    month:{$month:'$createdAt'},
                    total:"$wifi",
                    totol2:"$amount",
                    total3:"$waterFee",
                    total4:"$arrears",
                    total5:"$penalties",
                    total6:"$aptType",
                    total7:"$payment",
                    total8:"$balance",
                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    total:{$sum:"$total"},
                    total2:{$sum:"$totol2"},
                    total3:{$sum:"$total3"},
                    total4:{$sum:"$total4"},
                    total5:{$sum:"$total5"},
                    total6:{$sum:"$total6"},
                    total7:{$sum:"$total7"},
                    total8:{$sum:"$total8"},
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })

 router.get ('/userdates',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .month(moment().month()-2)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {createdAt:{$gte:new Date(previosMonth)} } },
            {
                $project:{
                    month:{$month:'$createdAt'},
                    
                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                   
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })





 router.get ('/totalrentb',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .month(moment().month()-2)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {createdAt:{$gte:new Date(previosMonth)} } },
            {
                $project:{
                    month:{$month:'$createdAt'},
                    total:"$amount"
                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    total:{$sum:"$total"},
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })
 router.get ('/totalbill',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .month(moment().month()-2)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {createdAt:{$gte:new Date(previosMonth)} } },
            {
                $project:{
                    month:{$month:'$createdAt'},
                    total:{$sum:["$amount","$payment","$waterFee","$arrears","$penalties","$wifi","$balance","$aptType"]}
                    
                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    count:{$sum:"$total"}
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })
 router.get ('/totalwater',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .month(moment().month()-2)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await ExpensesModal.aggregate([
            { $match : {createdAt:{$gte:new Date(previosMonth)} } },
            {
                $project:{
                    month:{$month:'$createdAt'},
                    total:{$sum:["$security","$clean","$electricityCharges","$waterCharges","$maintananceSalary","$wifi","$careTakerSalary"]}
                    
                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    count:{$sum:"$total"}
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })


 
router.get ('/totalrentb',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .month(moment().month()-2)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {createdAt:{$gte:new Date(previosMonth)} } },
            {
                $project:{
                    month:{$month:'$createdAt'},
                    total:"$amount"
                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    total:{$sum:"$total"},
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })


router.get ('/total/tenants',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await UserModal.aggregate([
            { $match : { } },
            {
                $group:{
                    _id:'$month',
                    total:{$sum:1},
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/rent',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { } },
           
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/projects/single/rent',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {apartment:'a'} },
            {
                $project:{
                    month:{$month:'$apartment'},
                    

                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    total:{$sum:1},
                   
                    
                }
            }
            
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/projects/single',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { aptType:'1bedroom',createdAt:{$gte:new Date(previosMonth)}} },

            {
                $project:{
                    month:{$month:'$createdAt'},
                    
                }
            },
            
            
            
            {
                $group:{
                 _id:'$month',
                 total:{$sum:1},
                
                 
             } 
             }
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/projects/single/2bedroom',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {aptType:'2bedroom',createdAt:{$gte:new Date(previosMonth)}} },
            
            {
                $project:{
                    month:{$month:'$createdAt'}
                }
            },
            
            
            
            {
                $group:{
                 _id:'$month',
                 total:{$sum:1},
                
                 
             } 
             }
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/projects/singleb',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { apartment:'b'  ,aptType:'1bedroom'}},
            {
               $group:{
                _id:'$apartment',
                total:{$sum:1},
               
                
            } 
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/projects/singlec',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { apartment:'c'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/projects/singleab',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'G1'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
//rents 
router.get ('/g2',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'G2'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/1a',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'1A'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/1b',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'1B'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/1c',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'1C'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})



router.get ('/1d',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'1D'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/2a',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'2A'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/2b',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'2B'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/2c',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'2C'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/2d',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'2D'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/3a',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'3A'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/3b',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'3B'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/3c',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'3C'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/3d',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'3D'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/4a',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'4A'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/4b',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'4B'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/4c',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'4C'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/4d',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'4D'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/5b',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'5B'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})











router.get ('/projects/singlea',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { apartment:'a'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/projects/singlebb',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { apartment:'b'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/caretaker',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await MileModal.aggregate([
            { $match : { } },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
 
router.get ('/charts',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-3)
      
  
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {aptType:'2bedroom',createdAt:{$gte:new Date(previosMonth)} } },
            {
                $project:{
                    month:{$month:'$createdAt'},
                    total:"$amount"
                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    total:{$sum:"$total"},
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })
 router.get ('/chartss',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-3)
      
  
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {}  },

            
            
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })
 router.get ('/users',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-3)
      
  
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await UserModal.aggregate([
            { $match : { } },
            
                
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })
 router.get ('/caretaker',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-3)
      
  
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await MileModal.aggregate([
            { $match : { } },
            
                
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })
 router.get ('/complains',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-3)
      
  
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await ComplainModal.aggregate([
            { $match : { } },
            
                
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })
 router.get ('/vacations',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-3)
      
  
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await VacationModal.aggregate([
            { $match : { } },
            
                
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })

export default router


router.get('/all', isAdmin ,async(req,res)=>{
    try {
        const users=await UserModal.find().sort({_id:-1});
        res.status(200).send(users)
        } catch (error) {
        res.status(500).send(error)
    }

})

router.delete('/:id', isAdmin, async (req,res)=>{
    try {
        const deleteUser= UserModal.findByIdAndDelete(req.params.id);
        res.status(200).send(deleteUser)
    } catch (error) {
        res.status(500).send(error)

    }
})
