import React from 'react'
// import starIcon from '../../assets/images/Star.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const LawyerCard = ({Lawyer}) => {

    const {fullName, averageRating, totalRating, imageUrl, specialization,ticketPrice, experiences, hospital} = Lawyer;

    const rates = Math.round (averageRating * 100) / 100;

  return (
    <div className=' bg-white rounded-md shadow-2xl cursor-pointer ' >
     <Link to={`/book-lawyer/${Lawyer._id}`}  >
        <div>
            <img src={imageUrl} className='w-full h-[200px] object-cover rounded-tl-md rounded-tr-md ' alt='Lawyer Image' loading='lazy' />
        </div>

        <div className=' px-5 py-4 ' >
        <h2 className='text-[18px] leading-[30px] lg:text-[22px] lg:leading-9 text-[#DC1F27] text-center font-[700]' >
            {fullName}
        </h2>

        
        <div className=' lg:mt-3 flex items-center justify-center ' >
            <div>
                <p className=' bg-indigo-300 text-indigo-950 py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4
            lg:text-[14px] lg:leading-7 font-semibold rounded  ' >
                    Booking Completed
                </p>
            </div>

        </div>

        <div className='mt-2 lg:mt-4 flex items-center justify-between ' >
            <span className='bg-[#CCF0F3] text-blue-900 py-1 px-2 lg:py-1 lg:px-3 text-[12px] leading-4
            lg:text-[14px] lg:leading-7 font-semibold rounded ' >
                {specialization}
            </span>


            <div className='flex items-center gap-[6px] ' >
               <p className=' bg-green-300 text-green-800 py-1 px-2 lg:py-1 lg:px-3 text-[12px] leading-4
            lg:text-[14px] lg:leading-7 font-semibold rounded ' >₹{ticketPrice}</p>

            </div>

        </div>
        </div>
        </Link>
    </div>
  )
}

export default LawyerCard