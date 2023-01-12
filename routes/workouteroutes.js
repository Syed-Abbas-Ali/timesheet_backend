const express=require("express");
const WorkoutModule=require("../models/regestermodel");
 

const router=express.Router();


const {createnewuser,login,updatedetail,timesheet,singleuser,getnotification,hidenotification}=require("../controller/controller")
router.patch("/:id",updatedetail);
router.post("/",createnewuser);
router.post("/login",login);
router.post("/timesheet",timesheet);
router.get("/singleuser/:id",singleuser);
router.get("/singleuser",getnotification);
router.patch("/hidenotifi/:id",hidenotification);



const {leavemanage,getleaveinfo}=require("../controller/leavecontroller")

router.post("/leave",leavemanage)
router.post("/leaves",getleaveinfo)




// image manage
const {updateimage}=require("../controller/imagecontroler")
router.patch("/updateimage/:id",updateimage)





module.exports=router;