const express=require("express")


const router=express.Router();

const {getallleaves}=require("../controller/leavecontroller")
router.get("/leavesnotifi",getallleaves)



const {Adminreg,Adminlogin,profileget,deleteuser}=require("../controller/admincontroller")

router.post("/register",Adminreg)
router.post("/login",Adminlogin)
router.get("/allemployees",profileget)
router.delete("/delete/:id",deleteuser)
// router.get("/notifi",getnotification)


// payslip file upload
const {uploadpayslip}=require("../controller/payslipuploader")

router.post("/payslip/upload/:id",uploadpayslip)

module.exports=router;