const mongoose=require("mongoose");
mongoose.connect(process.env.MONGODB_CONNECTION_STRING)

.then(()=>{
    console.log("connection is stablished")
})

.catch(()=>{
    console.log(`error is :${err}`)
})

