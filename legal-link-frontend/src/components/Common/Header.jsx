import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { useSelector } from 'react-redux';
import UserHead from './UserHead';
import './Header.css';

const Header = () => {
  const { user } = useSelector((state) => state.profile);
  const [toggle, setToggle] = useState('home');

  const handleHome = () =>{
    setToggle('home')
  }

  const handleSearch= () =>{
    setToggle('search-lawyer')
  }

  const handledocument= () =>{
    setToggle('legal-knowledge')
  }

  const handleAbout= () =>{
    setToggle('about-us')
  }

  const handleContact= () =>{
    setToggle('contact-us')
  }

  return (
    <div className='w-[100vw] h-[70px] font-poppins bg-white border-b-[1px] border-b-[#DDDDDD] z-100 ' >
        <div className='flex items-center justify-between px-6 py-4 ' >
            
                {/* logo */}
                <NavLink to="/" >
                  <div className='flex gap-3 items-center ' >
                      <img src={Logo} width="50px" />
                      <p >Legal-Link</p>
                  </div>
                </NavLink>

                {/* NavLinks */}
                <div className='flex gap-8 text-[#425066] text-[15px] font-medium  ' >
                    <NavLink  to="/" activeClassName="active"  >
                    <p 
                    className={`flex items-center gap-1 cursor-pointer transition-all duration-200 hover:text-[#DC1F27] hover:font-medium `} >Home</p>
                    </NavLink>
                    <NavLink to="/search-lawyer" activeClassName="active"  >
                    <p 
                    className={`flex items-center gap-1 cursor-pointer transition-all duration-200 hover:text-[#DC1F27] hover:font-medium `}
                    >
                      Search Lawyer <IoIosSearch/> </p>
                    </NavLink>
                    <NavLink to="/legal-knowledge" activeClassName="active"  >
                    <p 
                    className={`flex items-center gap-1 cursor-pointer transition-all duration-200 hover:text-[#DC1F27] hover:font-medium `}>
                      Legal Documentation </p>
                    </NavLink>
                    <NavLink  to="https://legal-NavLink-storage.netlify.app/" >
                    <p className='flex items-center gap-1 cursor-pointer transition-all duration-200 hover:text-[#DC1F27] hover:font-medium '>
                      Secure Storage</p>
                    </NavLink>
                    <NavLink to="/about-us" activeClassName="active"  >
                    <p 
                    className={`flex items-center gap-1 cursor-pointer transition-all duration-200 hover:text-[#DC1F27] hover:font-medium `}>
                      About Us </p>
                    </NavLink>
                    <NavLink to="/contact-us" activeClassName="active"  >
                    <p 
                    className={`flex items-center gap-1 cursor-pointer transition-all duration-200 hover:text-[#DC1F27] hover:font-medium `}>
                      Contact Us </p>
                    </NavLink>
                </div>

                {/* button */}
                {
                  user && (
                    <UserHead/>
                  )
                }
                {
                  !user && (
                    <NavLink to="/login" >
                <button className=' outline-none bg-[#D8232A] rounded-md text-[16px] text-white
                 px-3 py-1 drop-shadow-lg transition-all duration-200 hover:scale-105 '
                >
                    Login
                </button>
                </NavLink>
                  )
                }
        </div>
    </div>
  )
}

export default Header