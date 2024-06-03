import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

const ResetComplete = () => {
  return (
    <div className='w-full h-full relative bg-gray-100 flex flex-col gap-[100px] overflow-x-hidden font-poppins' >
    <div className='absolute' >
       <Header/>
</div>
    <div  className=' w-11/12 mx-auto flex text-richblack-5 justify-center items-center mt-[120px] ' >
        <div className='flex flex-col gap-3 justify-center w-[370px] ' > 
            <h1 className='font-semibold text-3xl '>Reset Complete !</h1>
            <p className='text-richblack-100 text-md' >{`All done! We have sent an email to your registered email to confirm`}</p>

            <button className="mt-5 rounded-[8px] bg-red-500 transition-all duration-200 hover:bg-red-600 py-[8px] px-[12px] font-bold text-richblack-900"
                    >
                    <Link to="/login" >
                            <p>Return to Login</p>
                    </Link>
            </button>
            <div>
                        <Link to="/login" >
                            <div className='flex flex-row items-center gap-1 ' >
                                 <IoArrowBackCircleSharp />
                                <p> Back to Login</p>
                            </div>
                        </Link>
            </div>
        </div>
    </div>
    <div className='w-full mx-auto ' >
        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>
          <Footer/>
        </div>
    </div>
  )
}

export default ResetComplete