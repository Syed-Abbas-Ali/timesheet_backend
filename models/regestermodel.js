const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const validator=require("validator")

const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    employeeid:{
        type:String,
        required:true
    },
    email:{
        type: String,
         required: true
    },
    password:{
        type:String,
        required:true
    },

    role:{
        type:String
    },
    DOB:{
        type:String
    },
    department:{
        type:String
    },
    preaddress:{
        type:String
    },
    location:{
        type:String
    },
    pnumber:{
        type:Number,
    },

    // leave:[String]
    profile : {
        type : String
    },
    payslips:[{
        payslip:String,
        month:String
    }]
})

//statics signup method
userSchema.statics.signupp = async function (fullname, employeeid, email, password) {
    // validation
    if (!fullname || !employeeid || !email || !password) {
      res.send({message:"Please fill all the fields!"});
    }
    if (!validator.isEmail(email)) {
      throw Error("Email is not valid!");
    }
    if (!validator.isStrongPassword(password)) {
      alert("Please choose a strong password");
    }
  
    const exist = await this.findOne({ email });
  
    if (exist) {
      throw Error("Email already exists");
  }}

userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        // const salt=await bcrypt.genSalt(10);
        this.password=await bcrypt.hash(this.password,12)
    }
    next();
   
});






const UserModule=new mongoose.model("signup&in",userSchema);

module.exports=UserModule;
