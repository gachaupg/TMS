import express from "express";
import { createSummary, deleteSummary, getSummary } from "../controllers/summaery.js";
import auth from "../middleware/auth.js";


import noticeModal from "../models/summary.js";
const router = express.Router();


router.get("/search:key", async (req,res)=>{
  let result=await noticeModal.find({
    "$or":[
      {
        houseNo:{$regex:req.params.key},
        
      }
    ]
  })
  res.send(result)
});


router.get("/", getSummary);


router.post("/", auth, createSummary);
router.delete("/:id", auth, deleteSummary);



export default router;
