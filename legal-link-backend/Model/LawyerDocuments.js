const mongoose = require("mongoose");

const LawyerVerifySchema = new mongoose.Schema({
    id:{
        type: mongoose.Types.ObjectId, 
        ref: "Lawyer" 
    },
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    Document1:{
        type:String,
        required:true,
    },
    Document2:{
        type:String
    },

  // Fields for Lawyer only
  specialization: { 
    type: String 
  },
});

module.exports = mongoose.model("LawyerVerify",LawyerVerifySchema);