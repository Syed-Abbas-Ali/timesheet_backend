const uploadModel = require("../models/regestermodel");


// update
const uploadpayslip=async(req,res)=>{
    try{
        const id=req.params.id;
      const {slip,month}=req.body;
      await uploadModel.findOneAndUpdate({_id:id},
        {
            $push:{
                payslips:{payslip:slip,
                    month:month}
            }
        }
      )
      res.status(200).json({message:"completed"})
    }

    catch(err){
      res.status(400).json({error:err.message})
    }
  }
  


module.exports = {
    uploadpayslip       
}