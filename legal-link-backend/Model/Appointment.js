import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    instructor: {
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
  this.populate("UserStorage").populate({
    path: "Lawyer",
    select: "fullName",
  });

  next();
});

export default mongoose.model("Booking", bookingSchema);