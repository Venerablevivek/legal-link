import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import {getPasswordResetToken} from "../services/authAPI";
import Spinner from '../components/Common/Spinner';

const ForgotPassword = () => {

    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const {loading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent));
    }

  return (
    <div className='w-full h-full relative bg-gray-100 flex flex-col gap-[100px] overflow-x-hidden font-poppins' >
         <div className='absolute' >
            <Header/>
    </div>

        <div className=' w-11/12 mx-auto flex text-richblack-5 justify-center items-center mt-[120px] ' >
        {
            loading ? (
                <Spinner/>
            ) : (
                <div className='flex flex-col gap-3 justify-center w-[370px] ' >
                    <h1 className='font-semibold text-3xl ' >
                        {
                            !emailSent ? "Reset your Password" : "Check Your Email"
                        }
                    </h1>
                    
                    <p className='text-richblack-100 text-md' >
                    {
                        !emailSent ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery" 
                                    : `We have sent the reset email to ${email}`
                    }
                    </p>

                    <form onSubmit={handleOnSubmit} >
                        {
                            !emailSent && (
                                <div className='flex flex-col gap-4 ' >
                                    <div>
                                        <label htmlFor='email' >
                                            <p className=' text-sm text-richblack-5 mb-1 leading-[1.375rem]' >Email Address <sup className='text-[#FF0000] ' >*</sup> </p>  </label>
                                            <input
                                                required
                                                type='email'
                                                name='email'
                                                value={email}
                                                onChange={ (e) => setEmail(e.target.value)}
                                                className="w-full rounded-[0.5rem] bg-gray-200 p-[12px] pr-10 text-black border-b-2 border-gray-500"
                                                placeholder='Enter Your Email Address'
                                            />
                                    </div>
                                </div>
                            )
                        }
                        {
                            <button  className=" w-full mt-5 rounded-[8px] bg-red-500 transition-all duration-200 hover:bg-red-600 py-[8px] px-[12px] font-bold text-richblack-900"
                                        type='submit'
                                        >
                                        {
                                                !emailSent ? "Reset Password" : "Resend Email"
                                        }
                                        </button>
                        }
                    </form>

                    <div>
                        <Link to="/login" >
                            <div className='flex flex-row items-center gap-1 ' >
                                 <IoArrowBackCircleSharp />
                                <p> Back to Login</p>
                            </div>
                        </Link>
                    </div>

                </div>
            )
        }
    </div>

    <div className='w-full mx-auto ' >
        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>
          <Footer/>
        </div>
    </div>
  )
}

export default ForgotPassword