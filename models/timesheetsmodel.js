const mongoose=require("mongoose");

const timesheetSchema=new mongoose.Schema({
    email:{
        type:String,
        // required:true
    },
    
    monday:{
        type:Number,
        required:true
    },

    tuesday:{
        type:Number,
        required:true
    },

    wednesday:{
        type:Number,
        required:true
    },

    thursday:{
        type:Number,
        required:true
    },

    friday:{
        type:Number,
        required:true
    },


    dates:{
        type:String,
        required:true
    },


    display:{
        type:String
    }


})



const TimesheetModule=new mongoose.model("timesheet",timesheetSchema);

module.exports=TimesheetModule;