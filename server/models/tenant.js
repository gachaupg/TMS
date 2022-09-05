import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  apartment: {type:String},
  name:{type:String,required:true},
  houseNo:{type:String,required:true},
  amount: {type:Number},
  imageFile1:{type:String},
  imageFile2:{type:String},
  imageFile3:{type:String},
  imageFile4:{type:String},
  arrearssms: {type:String},
  penaltysms: {type:String},
  wifisms: {type:String},
  watersms: {type:String},
  rentsms: {type:String},
  penaltiessms: {type:String},
  arrearssmst: {type:String},
  servicessms: {type:String},
  phone:{type:String}
},
{timestamps:true});

const TourModal = mongoose.model("Tenantss", tourSchema);

export default TourModal;
