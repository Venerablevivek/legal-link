const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    lawyer: {
      type: mongoose.Types.ObjectId,
      ref: "Lawyer",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "UserStorage",
      required: true,
    },
    ticketPrice: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

bookingSchema.pre(/^find/, function(next){
  this.populate("user").populate({
    path: "lawyer",
    select: "fullName",
  });

  next();
});

module.exports = mongoose.model("Booking",bookingSchema);