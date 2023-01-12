const uploadModel = require("../models/imagemodel");
// const { timingSafeEqual } = require("crypto");
const multer=require("multer");
const path=require("path");
const fs=require("fs")


// storing image in folder in folders
const Storage = multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'uploads');
    },

    filename:function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname));
    }
});


const fileFilter=(req,file,cb)=>{
    const allowedFileTypes=['image/jpeg','image/jpg','image/png'];
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true);
    }
    else{
        cb(null,false);
    }
}

const getImage=async(req,res)=>{
    res.send("got the image")
}


const postImage = async (req, res) =>{
    upload(req,res,async(err)=>{

        if(err){
            console.log(err);
        }else{
            const profilePic= new uploadModel({
                testImage:{
                    data:fs.readFileSync("uploads/"+req.file.filename),
                    contentType:"image/png"
                }
            })

            const id=req.params.id;
            await uploadModel.find({_id:id}, payslips.push(profilePic))
       
            .then(()=>{
                res.send("Successfully uploaded!")
                // getImage(S)
            })
            .catch((err)=>{
                 })
        }
    })
}     
    console.log(err);



const upload=multer({Storage,fileFilter}).single('photo')
console.log(upload)


module.exports={
    getImage,
    postImage,
    upload
}