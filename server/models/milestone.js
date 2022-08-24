import mongoose from "mongoose";

const mileSchema = mongoose.Schema({
  maintance:{type:String},
  general:{type:String},
   apartment: {type:String},
   item: {type:String},
  quantity:{type:String},
  price:{type:Number},
  shopName: {type:String},
  servedBy: {type:String},
  phoneNo:{type:Number},
  createdAt: {
    type: Date,
    default: new Date(),
  },
  creator: String,
  status:{
    type:String,
    enum:['pending','success', 'rejected'],
     default:'pending'
  }
},
{timestamps:true});

const MileModal = mongoose.model("caretaker", mileSchema);

export default MileModal;


// import mongoose from "mongoose";

// const tourSchema = mongoose.Schema({
//   name:{type:String},
//   apartment:{type:String},
//   item: {type:String,required:true},
//   quantity:{type:String,required:true},
//   price:{type:Number,required:true},
//   shopName: {type:String,required:true},
//   servedBy: {type:String},
//   phoneNo:{type:Number},
 
//   inProgress:Boolean,
//    milestoneDesc: {type:String},
  
//   creator: String,
//   status:{
//     type:String,
//     enum:['pending','success', 'rejected'],
//      default:'pending'
//   },
 
  
//   createdAt: {
//     type: Date,
//     default: new Date(),
//   },
  
// });

// const MileModal = mongoose.model("caretaker", tourSchema);

// export default MileModal;
