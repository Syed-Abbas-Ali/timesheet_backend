


const multer = require("multer");
const express=require("express");

const fileStorageEngine=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./images')
    },

    filename:(req,file,cb)=>{
        cb(null,Date.now()+'--'+file.originalname)
    },
});

const upload=multer({storage:fileStorageEngine});

app.post("/single",upload.single(image),(req,res)=>{
    console.log(req.file)
})


app.listen(4000)