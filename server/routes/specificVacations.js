import UserModal from "../models/user.js";
import express  from "express";
import TourModal from '../models/tour.js'
import {auth,isUser,isAdmin} from '../middleware/admin.js'
import moment from 'moment'
import ExpensesModal from "../models/Expenses.js";

import MileModal from "../models/milestone.js";
import ComplainModal from "../models/complains.js";
import VacationModal from "../models/caretakervacationNotice.js";
const router = express.Router();

router.get ('/g1',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await VacationModal.aggregate([
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
router.get ('/g2',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
            { $match : { houseNo:'2c'} },
            
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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
        const users= await VacationModal.aggregate([
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

export default router

