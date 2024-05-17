import React, { useState } from 'react'
import RegisterImg from '../assets/loginBg.png';
import uploadImageToCloudinary from "../utils/uploadCloudinary.js";
import {Link, useNavigate} from "react-router-dom";
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import {useDispatch } from "react-redux";

import { setSignupData } from '../slices/authSlice.js';
import { register } from '../services/authAPI.js';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewURL, setPreviewURL] = useState('');

    const [formData, setFormData] = useState({
        fullName:'',
        email:'',
        password:'',
        confirmPassword:'',
        phoneNumber:'',
        gender:'',
        imageUrl:'',
        accountType:"User",
    });

    const handleInputChange = (e) =>{
        setFormData({...formData,
            [e.target.name]: e.target.value
    })}

    const handleFileInputChange = async (e)=>{
        const file = e.target.files[0];
        
        const data = await uploadImageToCloudinary(file);

        setPreviewURL(data.secure_url);
        setSelectedFile(data.secure_url);
        setFormData({...formData, imageUrl:data.secure_url});
    
      }

      const handleSubmit = (e) =>{
        e.preventDefault()

        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords Do Not Match")
            return
        }
       
        dispatch(register(formData.fullName, 
            formData.email, 
            formData.password,
            formData.confirmPassword,
            formData.phoneNumber,
            formData.gender,
            formData.imageUrl,
            formData.accountType,
             navigate));
        dispatch(setSignupData(formData));

        //Reset 
        setFormData({
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            phoneNumber:"",
            gender:"",
            imageUrl:"",
            accountType:"",
        })
    }


  return (
    <>
    <div className='w-full h-full relative bg-[#FFEBE6] flex justify-between gap-[100px] pb-10 overflow-x-hidden font-poppins ' >
    {/* image */}
    <div className='absolute' >
            <Header/>
    </div>
    <div className='hidden lg:flex items-center ' >
        <img src={RegisterImg} width="450px" className='scale-x scale-x-[-1]' loading='lazy' alt='Side Image' />
    </div>
    {/* Content */}
    <div className='w-full lg:w-[50%] h-[100%] mt-[80px] mx-auto bg-white rounded-md flex flex-col px-10 py-5 ' >
        <p className='font-medium text-[24px]' >Welcome 🎉</p>
        <h2 className='font-bold text-3xl text-[#DC1F27] font-poppins '
        >Register with us</h2>
        <div className='w-full h-[1px] bg-[#FFEBE6] mt-7 mb-10 ' ></div>
        <form className='flex flex-col gap-5 text-gray-700 '>
                <div className='grid md:grid-cols-2 gap-5 grid-cols-1' >
                <div className='flex gap-6 bg-[#FFEBE6] px-6 py-4 rounded-md' >
                    <div className='w-[100%] flex flex-col gap-1' >
                        <label id='fullName' className=' font-poppins text-black font-semibold ' >Full Name</label>
                        <input
                            type='text'
                            id='fullName'
                            name='fullName'
                            placeholder='Enter your full name'
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className=' w-[100%] rounded-md bg-transparent font-bold text-[16px] outline-none placeholder:text-[#ec9883] '
                        />
                    </div>
                </div>
            <div className='flex gap-8 bg-[#FFEBE6] px-6 py-4 rounded-md' >
                <div className='w-[100%] flex flex-col gap-1' >
                    <label id='email' className=' font-poppins text-black font-semibold ' >Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='abc@gmail.com'
                        value={formData.email}
                        onChange={handleInputChange}
                        className=' w-[100%] rounded-md bg-transparent font-bold text-[16px] outline-none placeholder:text-[#ec9883] '
                    />
                </div>
            </div>
            <div className='flex gap-8 bg-[#FFEBE6] px-6 py-4 rounded-md ' >
                <div className='w-[100%] flex flex-col gap-1' >
                    <label id='password' className=' font-poppins text-black font-semibold ' >Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Enter your password'
                        value={formData.password}
                        onChange={handleInputChange}
                        className=' w-[100%] rounded-md bg-transparent font-bold text-[16px] outline-none placeholder:text-[#ec9883] '
                    />
                </div>
            </div>

            <div className='flex gap-8 bg-[#FFEBE6] px-6 py-4 rounded-md ' >
                <div className='w-[100%] flex flex-col gap-1' >
                    <label id='confirmPassword' className=' font-poppins text-black font-semibold ' >Confirm Password</label>
                    <input
                        type='password'
                        id='confirmPassword'
                        name='confirmPassword'
                        placeholder='Confirm your password'
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className=' w-[100%] rounded-md bg-transparent font-bold text-[16px] outline-none placeholder:text-[#ec9883]  '
                    />
                </div>
            </div>

                <div className='flex gap-6 bg-[#FFEBE6] px-6 py-4 rounded-md' >
                    <div className='w-[100%] flex flex-col gap-1' >
                        <label id='phoneNumber' className=' font-poppins text-black font-semibold' >Phone Number</label>
                        <input
                            type='number'
                            id='phoneNumber'
                            name='phoneNumber'
                            placeholder='Enter mobile number'
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className=' w-[100%] rounded-md bg-transparent font-bold text-[16px] outline-none placeholder:text-[#ec9883] '
                        />
                    </div>
                </div>
                <div className='flex gap-6 bg-[#FFEBE6] px-6 py-4 rounded-md' >
                    <div className='w-[100%] flex flex-col gap-1' >
                        <label id='gender' className='text-black font-semibold ' >Gender</label>
                                <select
                                    id='gender'
                                    name='gender'
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    className=' w-[100%] rounded-md bg-transparent text-[16px] outline-none text-[#ec9883] '
                                >
                                <option value="" >Select Gender</option>
                                <option value="male" >Male</option>
                                <option value="female" >Female</option>
                                <option value="other" >Other</option>
                                </select>
                    </div>
                </div>
                <div className='flex gap-6 bg-[#FFEBE6] px-6 py-4 rounded-md' >
                    <div className='w-[100%] flex flex-col gap-1' >
                        <label id='accountType' className='text-black font-semibold font-poppins ' >Are you a</label>
                                <select
                                    id='accountType'
                                    name='accountType'
                                    value={formData.accountType}
                                    onChange={handleInputChange}
                                    className=' w-[100%] rounded-md bg-transparent text-[16px] outline-none text-[#ec9883] '
                                >
                                <option value="User" >User</option>
                                <option value="Lawyer" >Lawyer</option>
                                </select>
                    </div>
                </div>
                </div>
            
                <div className='flex w-[50%] gap-6  px-6 py-4 rounded-md' >
                    <div className=' flex items-center justify-between gap-5' >
                {
                  selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-[#DC1F27] flex items-center justify-center ' >
                  <img src={previewURL} alt='User image' loading='lazy' className='w-full h-full rounded-full ' />
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
                   text-[15px] leading-6 overflow-hidden text-white bg-[#DC1F27]
                    font-semibold rounded-lg truncate cursor-pointer hover:bg-[#e46168] transition-all duration-300 '
                    >Upload Photo</label>
              </div>
                    </div>
                </div>
         
            <button onClick={handleSubmit}
            className='w-full bg-[#DC1F27] font-semibold text-white px-2 py-3 rounded-md
            hover:bg-[#e46168] transition-all duration-300' >Register</button>
        </form>
        <p className='mt-5 text-center text-[16px] text-black ' >Already Have an account ? {" "}
            <Link to="/login">
                <span className="text-[#DC1F27]" >Login</span>
            </Link>
        </p>
    </div>
    </div>
    <div className='w-[90%] mx-auto ' >
        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>
          <Footer/>
        </div>
    </>
  )
}

export default Register