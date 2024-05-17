import React from 'react'
import LawyerImg from "../../assets/vivek.png";
import { MdOutlineBadge } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Link } from 'react-router-dom';

function ShortenedParagraph({ paragraph }) {
    if (!paragraph) return null;
    const words = paragraph.split(' ');
    // Take only the first 20 words and join them back into a string
    const shortenedText = words.slice(0, 20).join(' ');
  
    return (
      <p>{shortenedText}</p>
    );
  }

const LawyerCards = ({filteredData}) => {
  return (
    <div className='w-full grid grid-cols-3 gap-[30px] font-poppins ' >
        {
            filteredData?.map((item,index)=>(
                <div key={index} className=' flex flex-col bg-white shadow-xl rounded-lg ' >
                <img src={item.imageUrl} className=' w-full h-[400px] object-cover rounded-tl-lg rounded-tr-lg ' />
                <div className='flex flex-col gap-2 px-6 py-5 ' >
                <p className=' text-red-500 font-bold  text-[30px] text-center ' >{item.fullName}</p>
                    <div className=' flex gap-2 items-center justify-center ' >
                        <MdOutlineBadge className='w-[25px] h-[25px]  ' />
                        <p className=' text-gray-600 text-[18px] ' >{item.specialization}</p>
                    </div>
                    <p className=' text-[#5F5F75] flex gap-1 justify-center font-semibold ' > 
                <RiDoubleQuotesL/> <p>{item.bio}</p> <RiDoubleQuotesR/>
                </p>
                <p className='text-[#5F5F75] mt-3 ' 
                >
                    <ShortenedParagraph paragraph={item.about} />
                </p>
                <div className=' flex items-center justify-between gap-8 mt-6 ' >
                <Link to={`/book-lawyer/${item._id}`} >
                <button className=' bg-red-500 px-3 py-2 rounded-md text-white transition-all duration-200 hover:bg-red-600 '
                    >Book Now</button>
                </Link>
                    <p className=' text-green-900 bg-green-300 px-3 py-2 rounded-md text-2xl font-bold cursor-pointer ' >₹ {item.ticketPrice}</p>
                </div>
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default LawyerCards