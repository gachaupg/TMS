

import express from "express";
import auth from "../middleware/auth.js";
import {
  createTour,
  deleteTour,
  getRelatedTours,
  getTour,
  getTours,
  getToursBySearch,
  getToursByTag,
  getToursByUser,
  likeTour,
  updateTour,
} from "../controllers/caretakerCompliment.js"
import VacationModal from "../models/caretakervacationNotice.js";

const router = express.Router();


router.get("/tag/:tag", getToursByTag);
router.post("/relatedTours", getRelatedTours);
router.get("/", getTours);
router.get("/:id", getTour);

router.get("/search:key", async (req,res)=>{
  let result=await VacationModal.find({
    "$or":[
      {
        houseNo:{$regex:req.params.key},
        
      }
    ]
  })
  res.send(result)
});



router.post("/", auth, createTour);
router.delete("/:id", auth, deleteTour);
router.patch("/:id", auth, updateTour);
router.get("/userProjects/:id", auth, getToursByUser);
router.patch("/like/:id", auth, likeTour);

export default router;
