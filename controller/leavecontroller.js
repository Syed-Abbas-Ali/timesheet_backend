const leavemodule=require("../models/leavemodel");
// const regesterModule=require("../models/regestermodel");s




//   leave applying
const leavemanage=async(req,res)=>{
    const {email,date}=req.body;
    let dd={date};
    leavemodule.findOne({email:email},async(err,user)=>{

        if(user){
   
            try{
                        const leaves=new leavemodule(req.body);   
                      const leave= await leaves.save(); 
                
                    res.status(201).send({message:"submited"})
                        
                    }
                    catch(err){
                        res.status(401).send({message:"not submited"})
                    }
        //    }
        }
        else{
            try{
                const leaves=new leavemodule(req.body);   
              const leave= await leaves.save(); 
        
            res.status(201).send({message:"submited"})
                
            }
            catch(err){
                res.status(401).send({message:"not submited"})
            }
        }
    })
 
}



// getting leaveinfo of this user
const getleaveinfo=async(req,res)=>{
    const {email}=req.body;
    const fuleaves=leavemodule.find({email:email},async(err,user)=>{
        try{
            res.status(200).json({user:user})
        }
        catch{
            res.status(200).json({user:"error"})
        }
    })
 

}


const getallleaves=async(req, res)=>{
    try{
        const notification=await leavemodule.find();
        res.status(200).json(notification);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}


module.exports={
    leavemanage,
    getleaveinfo,
    getallleaves
}