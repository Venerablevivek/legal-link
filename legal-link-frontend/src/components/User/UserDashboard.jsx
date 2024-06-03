import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/authAPI.js';
import { useNavigate } from 'react-router-dom';
import Header from '../Common/Header.jsx';
import Footer from '../Common/Footer.jsx';
import MyBookings from './MyBookings.jsx';
import UserProfile from './UserProfile.jsx';
import ReviewForm from './ReviewForm.jsx';

const UserDashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [tab, setTab] = useState('dashboard');
    const { user } = useSelector((state) => state.profile);
    const {loading} = useSelector( (state) => state.auth );

    const [userData, setUserData] = useState();

    useEffect(()=>{
         setUserData(user);
    },[])
  return (

    <div className='w-full h-full overflow-x-hidden bg-gray-50 flex flex-col relative font-poppins' >
        <div className='absolute' >
            <Header/>
        </div>

        <div class=" flex gap-10 bg-red-100 mt-[70px] ">
    <div class=" w-full hidden md:flex flex-col md:flex-row justify-between gap-[100px] ">
        <div class=" w-[15%] flex flex-col flex-grow pt-5 pb-10 overflow-y-auto bg-white">

        <div className=' px-[30px] rounded-md' >
        <div className='flex items-center justify-center ' >
            <figure className='w-[80px] h-[80px] rounded-full border-2 border-solid border-[#8582e7] ' >
                <img src={userData?.imageUrl} alt='User-Image' className='rounded-full w-full h-full ' loading='lazy' />
            </figure>
        </div>

        <div className='text-center mt-4 ' >
            <h3 className='text-[18px] leading-[30px] text-headingColor font-bold ' >
                {userData?.fullName}
            </h3>
            <p className='text-textColor text-[15px] leading-6 font-medium '
            >{userData?.email}</p>
            {/* <p  className='text-textColor text-[15px] leading-6 font-medium '
            >
                Blood Type: <span className='ml-2 text-headingColor text-[22px] leading-8 ' >
                   
                </span>
            </p> */}
        </div>
    </div>
            

            <div class="flex flex-col flex-2 px-3 mt-5 ">
                <div class="space-y-4">
                    
                <hr class="border-gray-200" />

                    <nav class="flex-1 space-y-2">
                        <a onClick={()=> setTab('dashboard')} href="#" title="" className={` ${tab ==='dashboard' ? 'bg-red-500 text-white' : ' bg-white font-normal text-gray-900 ' } flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white cursor-pointer rounded-lg hover:bg-red-500 group`}>
                            <svg class="flex-shrink-0 w-5 h-5 mr-4 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Dashboard
                        </a>
                        <a onClick={()=> setTab('bookings')} href='#'
                        className={` ${tab ==='bookings' ? 'bg-red-500 text-white' : ' bg-white font-normal' } flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white cursor-pointer rounded-lg hover:bg-red-500 group`}  
                        >
                            <svg class="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            My Bookings
                        </a>
                    </nav>


                    <hr class="border-gray-200" />

                    <nav class="flex-1 space-y-2">
                        <a onClick={()=> setTab('settings')} className={` ${tab ==='settings' ? 'bg-red-500 text-white' : ' bg-white font-normal' } flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white cursor-pointer rounded-lg hover:bg-red-500 group`} >
                            <svg class="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Profile Settings
                        </a>
                        <a onClick={() => {
        dispatch(logout(navigate))
      }} className="flex items-center px-4 cursor-pointer bg-yellow-200 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-yellow-500 group gap-[14px] ">
                            <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon">
  <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"/>
</svg>
                            Logout
                        </a>
                        {/* <a href="#" class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white bg-red-200  rounded-lg hover:bg-red-500 group">
                            <svg class='flex-shrink-0 w-5 h-5 mr-4' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
</svg>
                            Delete Account
                        </a> */}
                    </nav>
                </div>
            </div>
        </div>

        <div className=' w-[70%] md:col-span-2 md:px-[30px] pb-[60px] '  >

        {
            tab === 'bookings' && <MyBookings />
        }
        {
            tab === 'settings' && <UserProfile />
        }
        {
            tab === 'dashboard' && (
                <ReviewForm/>
            )
        }

    </div>

    </div>
        </div>

<div className='w-[100%] mx-auto ' >
        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>
          <Footer/>
        </div>
    </div>

  )
}

export default UserDashboard