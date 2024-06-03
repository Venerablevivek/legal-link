import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserHead = () => {
    const { user } = useSelector((state) => state.profile);

  return (
    <div className='' >
        { user.accountType === "User" && (
          <Link to={`/dashboard/user/my-profile`} className='flex justify-between gap-2 items-center cursor-pointer ' >
          <p className=' font-inter text-[18px] font-semibold text-[#DC1F27] transition-all duration-200
          hover:text-[#4190a3] ' >{user?.fullName}</p>
          <img src={user?.imageUrl} className='w-[45px] h-[45px] rounded-full border-2 border-black' />
      </Link>)
        }
        { user.accountType === "Lawyer" && (
          <Link to={`/dashboard/lawyer/my-profile`} className='flex justify-between gap-2 items-center cursor-pointer ' >
          <p className=' font-inter text-[18px] font-semibold text-[#DC1F27] transition-all duration-200
          hover:text-[#4190a3] ' >{user?.fullName}</p>
          <img src={user?.imageUrl} className='w-[45px] h-[45px] rounded-full border-2 border-black' />
      </Link>)
        }
        { user.accountType === "Admin" && (
          <Link to={`/admin-dashboard`} className='flex justify-between gap-2 items-center cursor-pointer ' >
          <p className=' font-inter text-[18px] font-semibold text-[#DC1F27] transition-all duration-200
          hover:text-[#4190a3] ' >{user?.fullName}</p>
          <img src={user?.imageUrl} className='w-[45px] h-[45px] rounded-full border-2 border-black' />
      </Link>)
        }
    </div>
  )
}

export default UserHead