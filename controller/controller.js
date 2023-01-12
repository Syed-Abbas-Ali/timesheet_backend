const regesterModule=require("../models/regestermodel");
const timesheetmodule=require("../models/timesheetsmodel");


const bcrypt=require("bcrypt")
const createToken=require("../utils/token")


// resgester
const createnewuser=async(req,res)=>{
    const {_id,email,password}=req.body;
    regesterModule.findOne({email:email},async(err,user)=>{
        if(!user){
            try{
                const newdata=new regesterModule(req.body);
                 //   token\
                 const token=createToken(_id)  
                const data= await newdata.save(); 
            res.status(201).send({message:"success",token})    
            }
            catch(err){
                res.status(401).send({message:"regestration not success"})
            }
        }
        else{
          
            res.send({message:"this email already registered"})
        }
    })
 
}

// login
const login=async(req,res)=>{
    const {email,password}=req.body;
    regesterModule.findOne({email:email},async(err,user)=>{
        const ismatch=await bcrypt.compare(password,user.password)

        if(email !== user.email ){
            return    res.send({message:"Email not found!"})
        }

        // let token;
        if(user){
           if(ismatch){
            //   token\
            const token=createToken(user._id)

         

            res.status(200).json({message:"success",user:user,token})
           }
           else{
            res.status(401).json({message:"password wrong"})
           }
        }
        else{
          res.status(400).json({message:"user not found"})
        }
    })
 
}

// update
const updatedetail=async(req,res)=>{
  try{
    const id=req.params.id;
    const toserver=await regesterModule.findByIdAndUpdate({_id:id},req.body);
    res.status(201).json({message:"basic data submited"})
  }
  catch(err){
    res.status(400).json({error:err.message})
  }
}




// timesheet submit
const timesheet=async(req,res)=>{
    const {email,dates}=req.body;
    timesheetmodule.findOne({email:email},async(err,user)=>{

        if(user){
           if({dates:user.dates}){

            res.send({message:"already submitted"})
           }
           else{
            try{
                        const timesheet=new timesheetmodule(req.body);   
                      const data= await timesheet.save(); 
                
                    res.status(201).send({message:"submited"})
                        
                    }
                    catch(err){
                        res.status(401).send({message:"not submited"})
                    }
           }
        }
        else{
            try{
                const timesheet=new timesheetmodule(req.body);   
              const data= await timesheet.save(); 
        
            res.status(201).send({message:"submited"})
                
            }
            catch(err){
                res.status(401).send({message:"not submited"})
            }
        }
    })
 
}




// getting single data
const singleuser=async(req,res)=>{
    try{
        const id=req.params.id;
        const single=await regesterModule.findById({_id:id});
        res.status(200).json(single);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}


// getting notifications
const getnotification=async(req, res)=>{
    try{
        const notification=await timesheetmodule.find();
        res.status(200).json(notification);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}


// notification
const hidenotification=async(req,res)=>{
    try{
      const id=req.params.id;
      const hide=await timesheetmodule.findByIdAndUpdate({_id:id},req.body);
      res.status(201).json(hide)
    }
    catch(err){
      res.status(400).json({error:err.message})
    }
  }






// ------------------------------------------------------
module.exports={
    createnewuser,
    login,
    updatedetail,
    timesheet,
    singleuser,
    getnotification,
    hidenotification,
   
}