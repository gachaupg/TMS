import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  apartment: {type:String},
  name:{type:String,required:true},
  houseNo:{type:String,required:true},
  // amount: {type:Number,required:true},
  contractRenewal: {type:String},
  reason:{type:String},
   codition:{type:String},
   remTime:{type:String},
  // currentRead:{type:Number},
  // lastRead:{type:Number},
plotA:{type:Number,default:15000},
plotB:{type:Number,default:15000},

  imageFile:{type:String},
  creator: String,
  status:{
    type:String,
    enum:['pending','success', 'rejected'],
     default:'pending'
  },
 
  
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
});

const TourModal = mongoose.model("caretakervacation", tourSchema);

export default TourModal;
