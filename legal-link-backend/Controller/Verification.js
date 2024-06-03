const LawyerVerify = require("../Model/LawyerDocuments.js");

exports.VerifyDetails = async(req,res)=>{
    try {

        console.log("isme aaya");

       const {
        id,
        fullName, 
        email, 
        Document1, 
        Document2, 
        specialization, 
       } = req.body;

       const lawyerDetails = await LawyerVerify.findOne({email});

       if(lawyerDetails){
        return res.status(403).json({
            success:false,
            message:'Already Uploaded Details, Please wait till Admin Verifies it'
        })
       }

         //retirieve appointments from booking for specific user
        const reviews = await LawyerVerify.create({
            id,
            fullName, 
            email, 
            Document1, 
            Document2, 
            specialization,
        })

        return res.status(200).json({
            success:true,
            message:'Details Uploaded Successfully',
            data:reviews
        });
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:`Cannot Upload Details something went wrong ${error.message} `
        });
    }
};

exports.getAllVerifyDetails = async(req,res)=>{
    try {

       const lawyerDetails = await LawyerVerify.find({}).populate("id").exec();

       if(!lawyerDetails){
        return res.status(404).json({
            success:false,
            message:'No Details Available'
        })
       }

        return res.status(200).json({
            success:true,
            message:'Details Fetched Successfully',
            data:lawyerDetails
        });
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:`Cannot Fetched Details something went wrong ${error.message} `
        });
    }
};

// exports.updateVerifyDetails = async(req,res)=>{
//     try {

//         console.log("isme aaya");

//        const {
//         id,
//         fullName, 
//         email, 
//         Document1, 
//         Document2, 
//         specialization, 
//        } = req.body;
       
//        const lawyerDetails = await LawyerVerify.findOneAndUpdate({email});

//        if(lawyerDetails){
//         return res.status(403).json({
//             success:false,
//             message:'Already Uploaded Details, Please wait till Admin Verifies it'
//         })
//        }

//          //update appointments from booking for specific user
//          const lawyerUpdatedDetails = await LawyerVerify.findByIdAndUpdate({_id:id},{
//             id,
//             fullName, 
//             email, 
//             Document1, 
//             Document2, 
//             specialization, 
//            });

//         return res.status(200).json({
//             success:true,
//             message:'Details Uploaded Successfully',
//             data:lawyerUpdatedDetails
//         });
        
//     } catch (error) {
//         res.status(500).json({
//             success:false,
//             message:`Cannot Upload Details something went wrong ${error.message} `
//         });
//     }
// };

exports.getSingleVerifyDetail = async(req,res)=>{
    try {
        const id = req.params.id;
     
       const lawyerDetails = await LawyerVerify.findById(id).populate('id');

       if(!lawyerDetails){
        return res.status(404).json({
            success:false,
            message:'No Details Available'
        })
       }

        return res.status(200).json({
            success:true,
            message:'Details Fetched Successfully',
            data:lawyerDetails
        });
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:`Cannot Fetched Details something went wrong ${error.message} `
        });
    }
};