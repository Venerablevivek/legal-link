import React, { useEffect, useState } from 'react';
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createReview } from '../../services/authAPI';
import Loader from "./../../components/loader/Loader.jsx";

const ReviewForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const { user } = useSelector((state) => state.profile);
    const { loading } = useSelector((state) => state.auth);
  
    useEffect(()=>{
      setFormData({
        name:"",
        job:"",
        imageUrl:user.imageUrl,
        reviewText:"",
        rating:""
      });
    },[])
  
    const [formData, setFormData] = useState({
      name:'',
      job:'',
      imageUrl:null,
      reviewText:'',
      rating:''
    })
  
    const handleInputChange = (e) => {
      setFormData({...formData,
        [e.target.name]: e.target.value
      })
    }
  
    const handleFileInputChange = async (e)=>{
      const file = e.target.files[0];
      
      const data = await uploadImageToCloudinary(file);
  
      setSelectedFile(data.secure_url);
      setFormData({...formData, imageUrl:data.secure_url});
  
    }
  
    const handleSubmit = async(e) =>{
      e.preventDefault();
      
      dispatch(createReview(
          formData.name,
          formData.rating,
          formData.job,
          formData.imageUrl,
          formData.reviewText,
          navigate,
      ));
  
    }
  
    return (
      <div className='mt-10' >
      <form className='flex flex-col gap-10 ' onSubmit={handleSubmit} >
           <div className='grid grid-cols-1 md:grid-cols-2 gap-5 ' >
           <div className=' flex flex-col gap-2  ' >
                  <label for='name' className=' font-semibold' >Name</label>
                 <input type='text' placeholder='Full Name' name='name' value={formData.name} onChange={handleInputChange}
                 className=' w-full px-4 py-3 border-b border-red-500 focus:outline-none focus:border-b-red-500  
                 text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer ' 
                 required
                 />
             </div>
             <div className='flex flex-col gap-2 ' >
             <label for='job' className=' font-semibold' >Job Designation</label>
             <input type='text' placeholder='Enter your job' name='job' value={formData.job} onChange={handleInputChange}
              className=' w-full px-4 py-3 border-b border-red-500 focus:outline-none focus:border-b-red-500 
                 text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer '  
             />
            </div>
            <div className=' flex flex-col gap-2 ' >  
                  <label for='rating' className=' font-semibold' >Rating (out of 5.0)</label>
                 <input type='text' placeholder='Enter Rating' name='rating' value={formData.rating} onChange={handleInputChange}
                 className=' w-full px-4 py-3 border-b border-red-500 focus:outline-none focus:border-b-red-500
                 text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer ' 
                 required
                 />
             </div>
             <div className=' flex items-center gap-3 ' >
           {
             formData.imageUrl && <figure className='w-[60px] h-[60px] rounded-full border-2 border-red-500 focus:outline-none focus:border-b-red-500 flex items-center justify-center ' >
             <img src={formData.imageUrl} alt='User image' loading='lazy' className='w-full h-full rounded-full ' />
           </figure>
           }
  
           <div className='relative w-[130px] h-[50px] ' >
             <input 
               type='file'
               name='imageUrl'
               id='imageUrl'
               onChange={handleFileInputChange}
               accept='.jpg, .png'
               className=' absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer '
              />
              <label htmlFor='imageUrl' className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] 
              text-[15px] leading-6 overflow-hidden bg-red-500 hover:bg-red-400 text-white font-semibold rounded-lg truncate cursor-pointer '
               >
                 {
                   selectedFile ? selectedFile.name : "Upload Photo"
                 }
               </label>
           </div>
         </div>
             <div className='flex flex-col gap-2 ' > 
                  <label for='reviewText' className='font-semibold' >Review Text</label> 
                 <textarea name='reviewText' rows={5} value={formData.reviewText} placeholder='Write your views' 
                onChange={handleInputChange} className=' w-full px-4 py-3 border-b border-solid border-red-500 focus:outline-none focus:border-b-red-500
               text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer ' ></textarea>
             </div>     
           </div>
  
         <div>
           <button disabled={loading && true }
            className='w-full  font-semibold text-white px-6 py-3 rounded-md
            bg-red-500 hover:bg-red-400 transition-all duration-300' type='submit' >
            {
             loading ? <Loader/> : 'Create Review'
            }</button>
         </div>
  
       </form>
  </div>
    )
}

export default ReviewForm