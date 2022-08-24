import express from "express";
import { createTenant, deleteTenant, getTenant, getTenantByUser, getTenantss } from "../controllers/tenant.js";
import auth from "../middleware/auth.js";


import TenantModal from "../models/tenant.js";
const router = express.Router();


router.get("/search:key", async (req,res)=>{
  let result=await TenantModal.find({
    "$or":[
      {
        houseNo:{$regex:req.params.key},
        
      }
    ]
  })
  res.send(result)
});


router.get("/", getTenantss);
router.get("/:id", getTenant);

router.post("/", auth, createTenant);
router.delete("/:id", auth, deleteTenant);
router.get("/userProjects/:id", auth, getTenantByUser);

export default router;
