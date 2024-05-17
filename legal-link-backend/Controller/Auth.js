const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserStorage = require("../Model/User.js");
const Lawyer = require("../Model/Lawyer.js");
const dotenv = require("dotenv");
const Booking = require("../Model/BookingSchema.js");

dotenv.config();

// Signup user
exports.register = async(req,res)=>{
    try {
        const {
            fullName,
            email,
            password,
            confirmPassword,
            phoneNumber,
            gender,
            accountType,
            imageUrl,
        } = req.body;
        // Validate fields
        if(!fullName || !email || !password || !confirmPassword || !accountType ){
            return res.status(403).json({
                success:false,
                message:'All fields are mandatory !, Please Try Again'
            });
        }
        
        // Check if both password matches or not
        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:`Password doesn't match, Both password must be same`
            });
        }

        // check if user already registered with us or not
        let existingUser;
        if(accountType === 'User'){
            existingUser = await UserStorage.findOne({ email });
        }else if(accountType === 'Lawyer' ) {
            existingUser = await Lawyer.findOne({ email });
        }
        
        if(existingUser) {
            return res.status(400).json({
                success: false,
                message : 'Email already exists. Please Login to continue.',
            });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create a user
        let userData;
        if(accountType === 'User'){
            userData = await UserStorage.create({
                fullName,
                email,
                password:hashedPassword,
                phoneNumber,
                gender,
                accountType,
                imageUrl,
            });
        }else if(accountType === 'Lawyer'){
            userData = await Lawyer.create({
                fullName,
                email,
                password:hashedPassword,
                phoneNumber,
                gender,
                accountType,
                imageUrl,
            })
        }

        return res.status(200).json({
            success:true,
            message:'Account Registered Successfully',
            data: userData,
        });

    } catch (error) {
        return res.status(500).json({
            success:true,
            message:`Cannot register user due to ${error.message}`,
        });
    }
}

//login User
exports.login = async(req,res)=>{
    try {
        // get email and pass from req
        const {email, password} = req.body;

        //validation of data
        if(!email || !password) {
            //Return 400 Bad Request status code with error message
            return res.status(400).json({
                success: false,
                message: `Please Fill up All the Required Fields`,
            });
        }
        //check user exists or not 
        let user=null;
        const   existingUser = await UserStorage.findOne({ email });
        const  existingLawyer = await Lawyer.findOne({ email });

        if(existingUser){
            user = existingUser;
        }
        if(existingLawyer){
            user = existingLawyer;
        }

        if(!user){
            return res.status(404).json({
                success: false,
                message: 'No user Found'
            })
        }

        // generate jwt 
        if(await bcrypt.compare(password, user.password)){
            const payLoad = {
                email: user.email,
                id: user._id,
            }

            const token = jwt.sign(payLoad, process.env.JWT_SECRET, {
                expiresIn: '24h',
            });

            // save token to user document in db
            user.token = token;
            user.password = undefined;

            //create cookie and send response

            const options = {
                expiresIn: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly: true,
            }
            res.cookie('token', token, options).status(200).json({
                success: true,
                token,
                user,
                message: 'Login Successfully'
            });

        }else{
            return res.status(401).json({
                success: false,
                message: `Password Is Incorrect`,
            });
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Can't login due to ${error.message}`,
        });
    }
}

// update user
exports.updateUser = async(req,res)=>{
    try{

        const {
            id,
            fullName,
            imageUrl,
            gender,
            phoneNumber,
            weight,
            height,
        } = req.body;
        //validate fields

        const userData = await UserStorage.findByIdAndUpdate({_id:id},
                {
                    fullName,
                    imageUrl,
                    gender,
                    phoneNumber,
                    weight,
                    height,
              },
            {new: true},
        );

        return res.status(200).json({
            success:true,
            message:'User Details Updated Successfully',
            data:userData,
        });


    }catch(err){
        return res.status(500).json({
            success:false,
            message:`Cannot Update User Details due to ${err.message}`,
        });
    }
}

// update Lawyer 
exports.updateLawyer = async(req,res)=>{
    try{
        const {
            id,
            fullName,
            imageUrl,
            gender,
            phoneNumber,
            weight,
            height,
            specialization,
            ticketPrice,
            qualifications,
            experiences,
            timeSlots,
            about,
            bio,
        } = req.body;
        //validate fields

        const userData = await Lawyer.findByIdAndUpdate({_id:id},
                {
                    fullName,
                    imageUrl,
                    gender,
                    phoneNumber,
                    weight,
                    height,
                    specialization,
                    ticketPrice,
                    qualifications,
                    experiences,
                    timeSlots,
                    about,
                    bio,
              },
            {new: true},
        );

        return res.status(200).json({
            success:true,
            message:'Lawyer Details Updated Successfully',
            data:userData,
        });


    }catch(err){
        return res.status(500).json({
            success:false,
            message:`Cannot Update Lawyer Details due to ${err.message}`,
        });
    }
}


exports.getUser = async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await UserStorage.findById({_id:id});

        return res.status(200).json({
            success:true,
            message:"User fetched Successfully",
            data:user
        });

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Error while fetching user data'
        });
    }
}

exports.getLawyer = async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await Lawyer.findById({_id:id});

        return res.status(200).json({
            success:true,
            message:"Lawyer fetched Successfully",
            data:user
        });

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Error while fetching user data'
        });
    }
}

exports.getAllLawyer = async(req,res)=>{
    try{
        const allLawyerData = await Lawyer.find({}).select("-password");

        if(!allLawyerData){
            res.status(403).json({
                success:false,
                message:'Cannot fetch Lawyers'
            });
        }

        return res.status(200).json({
            success:true,
            message:'Lawyers fetched Successfully',
            data:allLawyerData,
        });


    }catch(err){
        return res.status(500).json({
            success:false,
            message:`Cannot fetch Lawyer due to ${err.message}`,
        });
    }
}

exports.getMyAppointments = async(req,res)=>{
    try {

        const id = req.userId;
        //retirieve appointments from booking for specific user
        const bookings = await Booking.find({user:id});
        
        //extract Lawyer ids from appointment bookings
        const lawyerIds = bookings.map(el=>el.lawyer._id);

        //retrieve Lawyers using Lawyer ids
        const lawyers = await Lawyer.find({_id: {$in:lawyerIds}}).select('-password');

        return res.status(200).json({
            success:true,
            message:'Appointments fetched Successfully',
            data:lawyers
        });
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:`Cannot get Appointments, something went wrong ${error.message} `
        });
    }
};

exports.getLawyerProfile = async(req,res)=>{
    try {
        const LawyerId = req.userId;
        const lawyer = await Lawyer.findById(LawyerId);
       
        if(!lawyer){
            return res.status(404).json({
                success:false,
                message:'Lawyer not found',
            });
        }
        
        const {password, ...rest} = lawyer._doc;
        const appointments = await Booking.find({lawyer:lawyer._id});

        return res.status(200).json({
            success:true,
            message:'Profile info is getting',
            data:{...rest, appointments},
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:`Cannot Found Lawyer Profile ${error.message} `
        });
    }
}