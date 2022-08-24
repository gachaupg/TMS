import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  security: {type:Number},
  electricityCharges:{type:Number},
  waterCharges:{type:Number,required:true},
  careTakerSalary: {type:Number},
  maintananceSalary: {type:Number},
  wifi: {type:Number},
  clean: {type:Number},
  prevRead: {type:String},
  units: {type:String},
  services: {type:String},
  
},
{timestamps:true});

const TourModal = mongoose.model("Expenses", tourSchema);

export default TourModal;
