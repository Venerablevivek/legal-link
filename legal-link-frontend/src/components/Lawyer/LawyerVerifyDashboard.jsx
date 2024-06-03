import React, { useEffect, useState } from 'react';
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createLawyerDetails } from '../../services/authAPI';
import Loader from "./../../components/loader/Loader.jsx";
import { apiConnector } from '../../services/apiConnector.js';
import { BASE_URL } from '../../BASE_URL.js';
import axios from 'axios';
import { HiInformationCircle } from "react-icons/hi";

const LawyerVerifyDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.profile);
  const { loading } = useSelector((state) => state.auth);
  const [verifyData, setVerfiyData] = useState(null);

  const [formData, setFormData] = useState({
    id:'',
    fullName:'',
    email:'',
    Document1:'',
    Document2:'',
    specialization:'',
  })


  useEffect(()=>{
    getLawyerDetails();
  },[])

  const getLawyerDetails = async(req,res) =>{
    try {
  
      const email = user?.email;
      const response = await apiConnector("GET", `${BASE_URL}/lawyer/get-all-details`);


      if(!response.data.success){
        throw new Error(response.data.message)
      }

      const datamain = response.data.data;
      const resultfilter = datamain.filter(item=> item.email === email
      );
      
      setVerfiyData(resultfilter);
    } catch (error) {
      console.log("Cannot fetch verify data", error)
      
    }
  }

  const handleInputChange = (e) => {
    setFormData({...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileInputChange1 = async (e)=>{
    const file = e.target.files[0];
    
    const data = await uploadImageToCloudinary(file);

    setFormData({...formData, Document1:data.secure_url});
  }

  const handleFileInputChange2 = async (e)=>{
    const file = e.target.files[0];
    
    const data = await uploadImageToCloudinary(file);

    setFormData({...formData, Document2:data.secure_url});
  }


  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    dispatch(createLawyerDetails(
        formData.id,
        formData.fullName,
        formData.email,
        formData.Document1,
        formData.Document2,
        formData.specialization,
        navigate,
    ));

  }

  useEffect(()=>{
    var arr;
    if(verifyData){
      arr = verifyData[0];
    }

    setFormData({
      id:user?._id,
      fullName:user?.fullName,
      email:user?.email,
      Document1:arr?.Document1,
      Document2:arr?.Document2,
      specialization:user?.specialization,
    });
  },[verifyData])

  console.log("verofies details", verifyData);

  return (
    <div className='mt-5' >
      <h1 className=' text-4xl text-center mb-2 font-poppins font-bold text-red-600 ' >Lawyer Verification Dashboard</h1>
      {
        verifyData && (
          <div className='mb-10 flex items-center text-md justify-center gap-1 text-blue-500 ' >
            < HiInformationCircle className=' text-xl ' />
            {
              verifyData[0]?.id.isApproved === 'pending' && ( <p className='font-poppins font-semibold ' >Details Already Uploaded, Please wait till Admin Verify</p>)
            }
            {
              verifyData[0]?.id.isApproved === 'cancelled' && ( <p className='font-poppins font-semibold ' >Please Upload Details Again</p>)
            }
            {
              verifyData[0]?.id.isApproved === 'approved' && ( <p className='font-poppins font-semibold ' >Your Details has been Successfully Verified.</p>)
            }
          </div>
        )
      }
      {
        !verifyData && (
          <div className='mb-10 flex items-center text-md justify-center gap-1 text-red-500 ' >
            < HiInformationCircle className=' text-xl ' />
          <p className='font-poppins font-semibold ' >Upload Below Details</p>
          </div>
        )
      }
    <form className='flex flex-col gap-10 ' onSubmit={handleSubmit} >
         <div className=' w-full grid grid-cols-1 md:grid-cols-1 gap-5 ' >
         <div className=' flex flex-col gap-2  ' >
                <label for='fullName' className=' font-semibold' >Full Name</label>
               <input type='text' placeholder='Full Name' name='name' value={formData.fullName} onChange={handleInputChange}
               className=' w-full px-4 py-3 border-b border-solid border-red-500 focus:outline-none focus:border-b-red-500
               text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer ' 
               required
               />
           </div>
           <div className='flex flex-col gap-2 ' >
           <label for='email' className=' font-semibold' >Email</label>
           <input type='email' placeholder='Enter your Email' name='email' value={formData.email} onChange={handleInputChange}
            className=' w-full px-4 py-3 border-b border-solid border-red-500 focus:outline-none focus:border-b-red-500
               text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer '  
           aria-readOnly
           readOnly
           />
          </div>
           <div className='flex flex-col gap-2 ' > 
                <label for='specialization' className='font-semibold' >Specialization</label> 
               <input type='text' placeholder='Enter your Expertise ' name='specialization' value={formData.specialization} onChange={handleInputChange}
               className=' w-full px-4 py-3 border-b border-solid border-red-500 focus:outline-none focus:border-b-red-500
               text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer ' 
               required
               />
           </div>
       <div className=' w-full flex items-center gap-3 ' >
         {
           formData?.Document1 && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-red-500 flex items-center justify-center ' >
           <img src={formData?.Document1} alt='User image' loading='lazy' className='w-full h-full rounded-full ' />
         </figure>
         }

         <div className='relative w-[170px] h-[50px] ' >
           <input 
             type='file'
             name='Document1'
             id='Document1'
             onChange={handleFileInputChange1}
             accept='.jpg, .png'
             className=' absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer '
            />
            <label htmlFor='Document1' className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] 
            text-[15px] leading-6 overflow-hidden bg-red-500 hover:bg-red-400 text-white font-semibold rounded-lg truncate cursor-pointer '
             >
                Upload Document 1
             </label>
         </div>
       </div>
       <div className=' flex items-center gap-3 ' >
         {
           formData?.Document2 && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-red-500 flex items-center justify-center ' >
           <img src={formData?.Document2} alt='User image' loading='lazy' className='w-full h-full rounded-full ' />
         </figure>
         }

         <div className='relative w-[170px] h-[50px] ' >
           <input 
             type='file'
             name='Document2'
             id='Document2'
             onChange={handleFileInputChange2}
             accept='.jpg, .png'
             className=' absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer '
            />
            <label htmlFor='Document2' className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] 
            text-[15px] leading-6 overflow-hidden bg-red-500 hover:bg-red-400 text-white font-semibold rounded-lg truncate cursor-pointer '
             >
               {
                "Upload Document 2"
               }
             </label>
         </div>
       </div>

         </div>

       <div>
         <button disabled={loading && true }
          className='w-full bg-red-500 hover:bg-red-400 font-semibold text-white px-6 py-3 rounded-md
                 transition-all duration-300' type='submit' >
          {
           loading ? <Loader/> : 'Upload Details '
          }</button>
       </div>

     </form>
</div>
  )
}

export default LawyerVerifyDashboard