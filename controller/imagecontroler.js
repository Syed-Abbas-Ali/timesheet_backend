const uploadModel = require("../models/regestermodel");


// update
const updateimage=async(req,res)=>{
    try{
      const id=req.params.id;
      const toserver=await uploadModel.findByIdAndUpdate({_id:id},req.body);
      res.status(201).json({message:"profile uploaded"})
    }
    catch(err){
      res.status(400).json({error:err.message})
    }
  }
  


module.exports = {
    updateimage
}