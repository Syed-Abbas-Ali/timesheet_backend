require("dotenv").config();


const express=require("express");
const app=express();
const cors=require("cors");
var cookieParser = require('cookie-parser')
// port
const port=process.env.PORT||4000;

// router imprt
const workoutrouter=require("./routes/workouteroutes");
const admin=require("./routes/adminrouter");
app.use(express.json());
app.use(cors());
app.use(cookieParser())


// post requies
app.get("/",(req,res)=>{
    res.send("connected")
})
// db connction
require("./db/connection")
app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/api/signinup",workoutrouter)
app.use("/api/admin",admin)
app.listen(port,()=>{
    console.log(`server is running on the port:${port}`)
})