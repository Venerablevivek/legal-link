import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { resetPassword } from '../services/authAPI';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import Spinner from '../components/Common/Spinner';

const UpdatePassword = () => {
     const dispatch = useDispatch();
     const location = useLocation();
     const navigate = useNavigate();
    const [formData,setFormData] = useState({
        password:"",
        confirmPassword:"",
    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {loading} = useSelector( (state) => state.auth );

    const {password, confirmPassword} = formData;

    const handleOnChange = (e) => {
        setFormData( (prevData) => (
        {
            ...prevData,
            [e.target.name] : e.target.value,
        }
        ) )
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password, confirmPassword, token, navigate));
    }

  return (
    <div className='w-full h-full relative bg-gray-100 flex flex-col gap-[100px] overflow-x-hidden font-poppins' >
    <div className='absolute' >
       <Header/>
</div>
    <div className=' w-11/12 mx-auto flex text-richblack-5 justify-center items-center mt-[120px] '>
    {
        loading ? (
            <Spinner/>
        ) : (
            <div  className='flex flex-col gap-3 justify-center w-[370px] '>
                <h1 className='font-semibold text-3xl '>Choose new Password</h1>
                <p className='text-richblack-100 text-md'>Almost done. Enter your new password and you're all set.</p>

                <form onSubmit={handleOnSubmit} >
                    <div className='flex flex-col gap-4 ' >
                    <div className='relative' >
                        <label for='password' >
                            <p className=' text-sm text-richblack-5 mb-1 leading-[1.375rem]'>New Password <sup className='text-[#FF0000] ' >*</sup> </p> </label>
                            <input 
                                required
                                type={showPassword ? "text" : "password"}
                                name='password'
                                value={password}
                                onChange={handleOnChange}
                                placeholder='Enter New Password'
                                className="w-full rounded-[0.5rem] bg-gray-200 p-[12px] pr-10 text-black  border-b-2 border-gray-500"
                            />
                            <span className='absolute top-[50%] right-[5%] '
                            onClick={ ()=> setShowPassword((prev) => (!prev)) }
                            >
                                {
                                    showPassword ? <AiFillEyeInvisible fontSize={24} /> : <AiFillEye fontSize={24} />
                                }
                            </span>
                    </div>

                   <div className='relative' >
                    <label for='confirmPassword' >
                            <p className=' text-sm text-richblack-5 mb-1 leading-[1.375rem]' >Confirm New Password <sup className='text-[#FF0000] ' >*</sup> </p></label>
                            <input 
                                required
                                type={showConfirmPassword ? "text" : "password"}
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={handleOnChange}
                                placeholder='Confirm Password'
                                className="w-full rounded-[0.5rem] bg-gray-200 p-[12px] pr-10 text-black  border-b-2 border-gray-500"
                            />
                            <span className='absolute top-[50%] right-[5%] '
                            onClick={ ()=> setShowConfirmPassword((prev) => (!prev)) }
                            >
                                {
                                    showConfirmPassword ? <AiFillEyeInvisible fontSize={24} /> : <AiFillEye fontSize={24} />
                                }
                            </span>
                   </div>

                    <button className="mt-5 rounded-[8px] bg-red-500 transition-all duration-200 hover:bg-red-600 py-[8px] px-[12px] font-bold text-richblack-900"
                    type='submit' >
                        Reset Password
                    </button>
                    </div>
                    
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

export default UpdatePassword