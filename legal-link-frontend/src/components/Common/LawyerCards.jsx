import React from 'react'
import LawyerImg from "../../assets/vivek.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Link } from 'react-router-dom';

function ShortenedParagraph({ paragraph }) {
    if (!paragraph) return null;
    const words = paragraph.split(' ');
    // Take only the first 20 words and join them back into a string
    const shortenedText = words.slice(0, 15).join(' ');
  
    return (
      <p>{shortenedText}</p>
    );
  }

  function ShortenedBio({ paragraph }) {
    if (!paragraph) return null;
    const words = paragraph.split(' ');
    // Take only the first 20 words and join them back into a string
    const shortenedText = words.slice(0, 5).join(' ');
  
    return (
      <p>{shortenedText}</p>
    );
  }

const LawyerCards = ({filteredData}) => {
  return (
    <div className='w-full grid grid-cols-3 gap-[30px] font-poppins ' >
        {
            filteredData?.map((item,index)=>(
                <>
                {
                    item.isApproved === 'approved' && (<div key={index} className=' flex flex-col bg-white shadow-xl rounded-xl relative ' >
                    <img src={item.imageUrl} className=' w-full h-[250px] object-cover rounded-tl-xl rounded-tr-xl ' />
                    <div className='flex flex-col gap-2 px-6 py-5 ' >
                    <div className=' absolute top-2 right-4 flex gap-1 items-center justify-center bg-blue-200 px-4 py-2 rounded-full ' >
                            <p className=' text-blue-500 text-[12px] font-semibold ' >{item.specialization}</p>
                    </div>
                    <div className=' absolute right-4 flex gap-1 items-center justify-center bg-green-200 px-4 py-2 rounded-full ' >
                            <p className=' text-green-500 text-[12px] font-semibold ' >{item.isApproved}</p>
                    </div>
                    <p className=' text-red-500 font-bold  text-[20px] text-start mb-5 ' >{item.fullName}</p>
                        <p className=' text-[#5F5F75] flex gap-1 justify-center font-semibold text-sm text-center ' > 
                    <RiDoubleQuotesL/> <p> < ShortenedBio paragraph={item.bio} /></p> <RiDoubleQuotesR/>
                    </p>
                    <p className='text-[#5F5F75] mt-3 text-justify text-[16px] ' 
                    >
                        <ShortenedParagraph paragraph={item.about} />
                    </p>
                    <div className=' flex items-center justify-between gap-8 mt-4 ' >
                    <Link to={`/book-lawyer/${item._id}`} >
                    <button className=' bg-red-500 px-3 py-1 text-md rounded-md text-white transition-all duration-200 hover:bg-red-600 '
                        >Book Now</button>
                    </Link>
                        <p className=' text-green-600 bg-green-200 px-3 py-1 rounded-md text-xl font-bold cursor-pointer ' >₹ {item.ticketPrice}</p>
                    </div>
                    </div>
                    </div>)
                }
                </>
            ))
        }
    </div>
  )
}

export default LawyerCards