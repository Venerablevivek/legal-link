import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { useSelector } from 'react-redux';
import UserHead from './UserHead';

const Header = () => {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className='w-[100vw] h-[70px] font-poppins bg-white border-b-[1px] border-b-[#DDDDDD] z-100 ' >
        <div className='flex items-center justify-between px-6 py-4 ' >
            
                {/* logo */}
                <Link to="/" >
                  <div className='flex gap-3 items-center ' >
                      <img src={Logo} width="50px" />
                      <p className='text-[#DC1F27] text-[25px] font-semibold ' >Legal-Link</p>
                  </div>
                </Link>

                {/* links */}
                <div className='flex gap-8 text-[#425066] text-[15px] font-medium  ' >
                    <Link  to="/" >
                    <p className='flex items-center gap-1 cursor-pointer transition-all duration-200 hover:text-[#DC1F27] hover:font-medium ' >Home</p>
                    </Link>
                    <Link to="/search-lawyer" >
                    <p className='flex items-center gap-1 cursor-pointer transition-all duration-200 hover:text-[#DC1F27] hover:font-medium '>
                      Search Lawyer <IoIosSearch/> </p>
                    </Link>
                    <Link to="/legal-knowledge" >
                    <p className='flex items-center gap-1 cursor-pointer transition-all duration-200 hover:text-[#DC1F27] hover:font-medium '>
                      Legal Documentation </p>
                    </Link>
                    <Link  to="https://legal-link-storage.netlify.app/" >
                    <p className='flex items-center gap-1 cursor-pointer transition-all duration-200 hover:text-[#DC1F27] hover:font-medium '>
                      Secure Storage</p>
                    </Link>
                    <Link to="/about-us" >
                    <p className='flex items-center gap-1 cursor-pointer transition-all duration-200 hover:text-[#DC1F27] hover:font-medium '>
                      About Us </p>
                    </Link>
                    <Link to="/contact-us" >
                    <p className='flex items-center gap-1 cursor-pointer transition-all duration-200 hover:text-[#DC1F27] hover:font-medium '>
                      Contact Us </p>
                    </Link>
                </div>

                {/* button */}
                {
                  user && (
                    <UserHead/>
                  )
                }
                {
                  !user && (
                    <Link to="/login" >
                <button className=' outline-none bg-[#D8232A] rounded-md text-[16px] text-white
                 px-3 py-1 drop-shadow-lg transition-all duration-200 hover:scale-105 '
                >
                    Login
                </button>
                </Link>
                  )
                }
        </div>
    </div>
  )
}

export default Header