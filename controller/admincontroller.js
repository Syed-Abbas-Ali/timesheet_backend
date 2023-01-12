const bcrypt=require("bcrypt")
const adminmodel=require("../models/Adminmodel")
const Allsers=require("../models/regestermodel")
// const timesheetsmodel=require("../models/timesheetsmodel")

// ?admin regester
const Adminreg=async(req,res)=>{
    const {email}=req.body;
    adminmodel.findOne({email:email},(err,user)=>{
        if(!user){
            try{
                const newadmin=new adminmodel(req.body);
                const data=newadmin.save();
                res.send({message:"successfully registered"});
            }
            catch(err){
                res.send({message:`${err}`})
            }
         
        }
        else{
            res.send({message:"this email is already registered"});
        }
    })
}


// admin login

const Adminlogin=async(req,res)=>{
    const {email,password}=req.body;
    adminmodel.findOne({email:email},async(err,user)=>{
        const ismatch=await bcrypt.compare(password,user.password)

       if(user){
        if(ismatch ){
            res.status(200).send({message:"success",user:user})
        }
        if(!ismatch){
            res.status(400).send({message:"please enter correct password"})
        }
       }
        else{
            res.status(400).send({message:"user not found"})
        }
    })

}

//getting all user data
const profileget = async (req, res) => {
    try {
      const profiledata = await Allsers.find();
      res.status(200).send(profiledata);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

// delete
const deleteuser=async(req,res)=>{
    try{
      const id=req.params.id;
      const toserver=await Allsers.findByIdAndDelete({_id:id});
      res.status(201).json({message:"user deleted"})
    }
    catch(err){
      res.status(400).json({error:err.message})
    }
  }



module.exports={
    Adminreg,
    Adminlogin,
    deleteuser,
    profileget
}