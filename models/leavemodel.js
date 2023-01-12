const mongoose=require("mongoose");

const leavemanageSchema=new mongoose.Schema({
   email:{
    type:String,
    require:true
   },

   subject:{
    type:String,
    require:true
   },

   date:{
    type:String,
    require:true
   }

   
})

const LeaveModel=new mongoose.model("leaves",leavemanageSchema)

module.exports=LeaveModel;


