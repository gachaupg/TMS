import express from "express";
import { deleteUser,getTour,getUsers } from "../controllers/userCrud.js";
import auth from "../middleware/auth.js";
const router = express.Router();


// router.post("/update", update);
router.get("/allusers", getUsers);
router.delete("/delete/:id", deleteUser);
router.get("/:id", getTour);


export default router;
