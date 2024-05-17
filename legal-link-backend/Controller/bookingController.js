const UserStorage = require("../Model/User.js");
const Lawyer = require("../Model/Lawyer.js");
const Booking =  require('../Model/BookingSchema.js');
const Razorpay = require("razorpay");
const dotenv = require("dotenv");

dotenv.config();


exports.getCheckoutSession = async(req,res)=>{
    try {
        // console.log(req);
        const id = req.body.userId;
        //get currently booked Lawyer
        const lawyeriD = req.params.lawyerId;
        
        const Lawyers = await Lawyer.findById(lawyeriD);
        const user = await UserStorage.findById(id);

        const razorpay = new Razorpay({
                key_id: process.env.RAZORPAY_KEY,
                key_secret: process.env.RAZORPAY_SECRET,
        });

        const price = Lawyers.ticketPrice;

        // setting up options for razorpay order.
        const options = {
                amount: price*100,
                currency: 'INR',
                receipt: Math.random(Date.now()).toString(),
                payment_capture: 1
        };

        const response = await razorpay.orders.create(options);
        //create new booking
        
        const booking = new Booking({
            lawyer:Lawyers._id,
            user:user._id,
            ticketPrice:Lawyers.ticketPrice
        });

        await booking.save();


        return res.status(200).json({
            success:true,
            message:'Successfully Paid',
            order_id: response.id,
            currency: response.currency,
            amount: response.amount,
            data:response,
        });

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Error while creating order'
        });
    }
}