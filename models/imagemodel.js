const mongoose = require("mongoose")

const imageschema = mongoose.Schema({
    payslips : [{
        payslip:{
            data : Buffer,
            contentType : String
        }
    }]
})

const uploadModel =new mongoose.model('payslips',imageschema)

module.exports = uploadModel

// module.exports = Upload