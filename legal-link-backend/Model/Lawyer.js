const mongoose = require("mongoose");

const LawyerSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    phoneNumber:{
        type:Number
    },
    token: {
        type : String,
    },
    accountType: {
        type: String,
        enum: ['Admin', 'Lawyer'],
        required: true
    },
    gender: {
        type: String, 
        enum: ["male", "female", "other"]
    },
    appointments: [
        { 
            type: mongoose.Types.ObjectId, 
            ref: "Appointment" 
        }
    ],
  ticketPrice: { 
    type: Number 
  },

  // Fields for Lawyer only
  specialization: { 
    type: String 
  },
  qualifications: {
    type: Array,
  },
  document:{
    type: String
  },
  experiences: {
    type: Array,
  },

  bio: { type: String, maxLength: 50 },
  about: { type: String },
  timeSlots: { type: Array },
  reviews: [{ 
    type: mongoose.Types.ObjectId, 
    ref: "Review" 
  }
  ],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  }
});

module.exports = mongoose.model("Lawyer",LawyerSchema);