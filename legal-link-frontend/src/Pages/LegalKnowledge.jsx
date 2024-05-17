import React, { useState } from 'react'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'
import {LegalData} from '../data/constitution_of_india.js';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import homeImg from "../assets/home.png";
import { Link } from 'react-router-dom';
import LogoImg from "../assets/logo.png";

const LegalKnowledge = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [instructorData, setInstructorData] = useState();

    const handleSearch = () =>{
        setQuery(query.trim());
    }

    const filteredData = LegalData?.filter((item) =>
        Object.values(item)
        .join("")
        .toLowerCase()
        .includes(query.toLowerCase())
    );

    console.log("filter data is ", filteredData);

  return (
    <div className=' w-full h-full overflow-x-hidden flex bg-gray-200 flex-col relative font-poppins' >
        <div className='absolute' >
            <Header/>
        </div>

        <div className=' w-[85%] mx-auto mt-[150px] mb-[50px] flex flex-col gap-8 ' >
        <div className=' w-full  ' >
                <h3 className=' text-[36px] font-inter font-bold ' >Legal Knowledge</h3>
            </div>

            <div className=' flex gap-5 justify-between items-center ' >
                <div className='w-full mx-auto bg-white rounded-md flex items-center justify-between relative ' >
                    <input 
                    type='search'
                    className='py-3 px-6 bg-transparent rounded-[10px] text-gray-800 w-full focus:outline-none cursor-pointer border-gray-300 border-2 '
                    placeholder='Search a Keyword ' 
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)}
                    />
                </div>
                <button className='bg-red-500 mr-4 font-semibold text-white px-6 py-3 rounded-md
                hover:bg-red-600 transition-all duration-300' onClick={handleSearch} >Search</button>
            </div>

            <div className=' flex justify-between mt-[30px] ' >
                <div className='flex gap-3 items-center cursor-pointer ' >
                    <Link to="/" >
                    <img src={homeImg} className=' w-[30px] h-[30px] ' />
                    </Link>
                    < MdOutlineKeyboardArrowRight className=' w-[25px] h-[25px] text-gray-500 ' />
                    <Link to="/legal-knowledge" >
                        <p className=' text-lg font-semibold text-gray-600 ' >Legal Documentation</p>
                    </Link>
                </div>
            </div>

            <div className=' w-full h-[1px] bg-slate-300 ' >

            </div>
            
        <div className='grid grid-cols-3 gap-[50px] ' >
        {
            filteredData?.map((item,ind)=>(
                <div key={ind} class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-lg dark:bg-gray-800">
    <div class="flex items-center justify-between">
        <span class="text-sm font-light text-gray-800 dark:text-gray-400">Constitution of India</span>
        <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 font-bold rounded-full dark:bg-blue-300 dark:text-blue-900">Article {item.article}</span>
    </div>

    <div>
        <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 text-justify ">{item.description}</p>
    </div>

    <div>

        <div class="flex items-center justify-center mt-4">
            <a class="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" tabindex="0" role="link" aria-label="twitter link">
                <img src={LogoImg} className=' w-5 h-5 ' />
            </a>

            <a class="mr-2 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-red-600 " tabindex="0" role="link" aria-label="share link">
                <svg aria-hidden="true" class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                    <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                    <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                </svg>
            </a>
        </div>
    </div>
        </div>
            ))
        }
        </div>
        </div>

        <div className='w-[100%] mx-auto ' >
        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>
          <Footer/>
        </div>
    </div>
  )
}

export default LegalKnowledge
