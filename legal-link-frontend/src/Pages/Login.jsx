import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../services/authAPI';
import LoginImg from '../assets/login.png';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

const Login = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFormData({...formData,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = async (e) =>{
    e.preventDefault();
    dispatch(login(formData.email, formData.password, navigate))

  }

  return (
    <div className='w-full h-full relative bg-[#FFEBE6] flex flex-col gap-[100px] overflow-x-hidden font-poppins' >
     <div className='absolute' >
            <Header/>
    </div>
    <div className='w-full h-full relative flex justify-between gap-[100px] mt-[100px] items-center ' >
    {/* image */}
    {/* <div className='absolute w-[450px] h-[450px] top-[25%] left-[2%] rounded-full bg-[#DC1F27] ' ></div> */}
    <div className='hidden lg:flex items-center mx-auto justify-center ' >
        <img src={LoginImg} width="450px" className='scale-x scale-x-[-1]' loading='lazy' alt='Side Image' />
    </div>
    {/* Content */}
    <div className='w-full lg:w-[50%] h-[100%] mx-auto bg-white rounded-md flex flex-col px-10 py-5 ' >
        <p className='font-medium text-[24px]' >Welcome Back🎉</p>
        <h2 className='font-bold text-3xl text-[#DC1F27] font-poppins '
        >Start your Journey !</h2>
        <div className='w-full h-[1px] bg-[#FFEBE6] mt-7 mb-10 ' ></div>
        <form className='flex flex-col gap-5 text-gray-700  '>
                <div className='grid gap-5 grid-cols-1' >
            <div className='flex gap-8 bg-[#FFEBE6] px-6 py-4 rounded-md' >
                <div className='w-[100%] flex flex-col gap-1' >
                    <label id='email' className=' font-poppins text-black font-semibold  ' >Email</label>
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
                    <label id='password' className=' font-poppins text-black font-semibold  ' >Password</label>
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
                </div>
         
            <button onClick={submitHandler}
            className='w-full mt-5 bg-[#DC1F27] font-semibold text-white px-2 py-3 rounded-md
            hover:bg-[#e46168] transition-all duration-300' >Login</button>
        </form>
        <p className='mt-5 text-center text-[16px] text-black ' >Don&apos;t have an account? {" "}
            <Link to="/register">
                <span className="text-[#DC1F27]" >Register</span>
            </Link>
        </p>
    </div>
    </div>
    <div className='w-full mx-auto ' >
        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>
          <Footer/>
        </div>
    </div>
  )
}

export default Login