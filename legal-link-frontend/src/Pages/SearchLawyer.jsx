import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'
import { CiSearch } from "react-icons/ci";
import { BASE_URL } from '../BASE_URL';
import homeImg from "../assets/home.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import LawyerCards from '../components/Common/LawyerCards';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchLawyer = () => {

    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
  const [instructorData, setInstructorData] = useState();


  const handleSearch = () =>{
    setQuery(query.trim());
  }

useEffect(()=>{
    getData();
},[])

const getData = async() =>{
    setLoading(true);
    try {
        const response = await axios.get(`${BASE_URL}/lawyer/get-all`);

        if(!response.data.success){
            throw new Error(response.data.message)
        }

        setInstructorData(response.data.data);
        setLoading(false);
    } catch (error) {
        console.log("error", error);
        setLoading(false);
    }
}

  const filteredData = instructorData?.filter((item) =>
    Object.values(item)
      .join("")
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  console.log("filter data is ", filteredData);



  return (
    <div className='w-full h-full overflow-x-hidden flex flex-col gap-10 relative font-poppins bg-gray-200 ' >
         <div className='absolute' >
            <Header/>
        </div>

        {/* main */}
        <div className=' w-[85%] mx-auto mt-[150px] flex flex-col gap-[20px] ' >
            {/* up */}
            <div className=' w-full ' >
                <h3 className=' text-[36px] font-inter font-bold ' >Lawyers</h3>
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

            <div className=' flex justify-between mt-[50px] ' >
                <div className='flex gap-3 items-center cursor-pointer ' >
                <Link to="/" >
                    <img src={homeImg} className=' w-[30px] h-[30px] ' />
                    </Link>
                    < MdOutlineKeyboardArrowRight className=' w-[25px] h-[25px] text-gray-500 ' />
                    <Link to="/search-lawyer" >
                    <p className=' text-lg font-semibold text-gray-600 ' >Lawyers</p>
                    </Link>
                </div>
            </div>

            <div className=' w-full h-[1px] bg-slate-300 ' >

            </div>

            <div className=' mt-[30px] ' >
                <LawyerCards filteredData={filteredData} />
            </div>

            {/* down */}
        </div>

        <div className='w-[100%] mx-auto ' >
        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>
          <Footer/>
        </div>
    </div>
  )
}

export default SearchLawyer