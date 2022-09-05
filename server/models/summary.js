import mongoose from "mongoose";

const summarySchema = mongoose.Schema({
  
  name:{type:String},
  houseNo:{type:String},
  rent: {type:Number},
  wifi: {type:Number},
  penalties: {type:Number},
  water: {type:Number},
  arrears: {type:Number},
  remarks: {type:String},
  
},
{timestamps:true});

const TourModal = mongoose.model("Summary", summarySchema);

export default TourModal;
