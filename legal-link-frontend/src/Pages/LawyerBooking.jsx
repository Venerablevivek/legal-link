import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../BASE_URL';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import SidePanel from './SidePanel';
import LawyerAbout from './LawyerAbout';
import Testimonials from '../components/Common/Testimonials';

function ShortenedParagraph({ paragraph }) {
    if (!paragraph) return null;
    const words = paragraph.split(' ');
    // Take only the first 20 words and join them back into a string
    const shortenedText = words.slice(0, 30).join(' ');
  
    return (
      <p>{shortenedText}</p>
    );
  }

const LawyerBooking = () => {
    const[tab, setTab] = useState('about');
    const {id} = useParams();
    const {loading} = useSelector((state)=>state.auth);
      const [LawyerData, setLawyerData] = useState();
  
      const getUserData = async() =>{
        try {
          const response = await axios.get(`${BASE_URL}/auth/get-lawyer/${id}`);
          setLawyerData(response.data.data);
    
        } catch (error) {
          console.log("Error", error.message);
        }
      }
    
      useEffect(()=>{
        getUserData();
      },[])

  return (
    <div className='w-full h-full overflow-x-hidden flex flex-col relative font-poppins bg-gray-200 ' >
          <div className='absolute' >
            <Header/>
        </div>

        <section className=' w-[90%] mx-auto mt-[100px] flex flex-col gap-[45px] ' >
        <div class="bg-gray-200 dark:bg-gray-800">
    <div class="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
        <a href="#" class="text-gray-600 dark:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
        </a>

        <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </span>

        <a href="#" class="flex items-center text-gray-600 -px-2 dark:text-gray-200 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>

            <span class="mx-2">Lawyers</span>
        </a>

        <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </span>

        <a href="#" class="flex items-center text-blue-600 -px-2 dark:text-gray-200 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>

            <span class="mx-2">Lawyer Info</span>
        </a>
    </div>
    <div className='w-full h-[1px] bg-gray-400 ' ></div>
</div>
    <div className=' w-[90%] mx-auto font-poppins ' >

       { !loading  &&  
       (
        <div className='w-full flex flex-col gap-[40px] ' >
            {/* one */}
            <div className=' w-full flex justify-between gap-5 ' >
                <div className=' w-[65%] bg-white px-[25px] py-[30px] flex gap-10 rounded-md ' >
                    <img src={LawyerData?.imageUrl} className=' w-[40%] h-[300px] object-cover rounded-lg shadow-xl ' />
                    <div className=' w-[50%] flex flex-col gap-2 justify-center ' >
                        <p className=' text-xl font-bold bg-[#DC1F27] shadow-lg px-4 py-2 rounded-md text-white self-center mb-9 ' >{LawyerData?.fullName}</p>
                        <p className=' text-[#5F5F75] flex text-center gap-1 items-center font-semibold text-lg self-center  ' > 
                <RiDoubleQuotesL/> <p>{LawyerData?.bio}</p> <RiDoubleQuotesR/> </p>
                        <p className='text-[#5F5F75] mt-1 text-justify ' >  <ShortenedParagraph paragraph={LawyerData?.about} /> </p>
                        <div className=' flex justify-between gap-10 items-center  mt-4 ' >
                            <p className=' self-start text-md font-semibold bg-indigo-500 shadow-lg px-3 py-2 rounded-md text-white ' > {LawyerData?.specialization} </p>
                            {
                                LawyerData?.isApproved === 'approved' && (<p className=' shadow-lg text-md font-bold bg-green-400 px-3 py-2 rounded-md text-white ' >Approved</p>)
                            }
                            {
                                LawyerData?.isApproved === 'pending' && (<p className='shadow-lg text-md font-bold bg-red-400 px-3 py-2 rounded-md text-white ' >Pending</p>)
                            }
                            {
                                LawyerData?.isApproved === 'cancelled' && (<p className='shadow-lg text-md font-bold bg-orange-400 px-3 py-2 rounded-md text-white ' >Cancelled</p>)
                            }
                        </div>
                    </div>
                </div>
                <div>
              <SidePanel doctorId={LawyerData?._id} ticketPrice={LawyerData?.ticketPrice} timeSlots={LawyerData?.timeSlots} />
            </div>
            </div>

            <div>
            <LawyerAbout name={LawyerData?.fullName} about={LawyerData?.about} 
                  qualifications={LawyerData?.qualifications} 
                  experiences={LawyerData?.experiences} />
            </div>
        </div>
       )}
    </div>
</section>

<div className='w-[100%] mx-auto flex flex-col font-poppins items-center bg-white mt-[50px] pt-20 ' >
             <Testimonials />


        </div>

        <div className='w-[100%] mx-auto ' >
        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>
          <Footer/>
        </div>
    </div>
  )
}

export default LawyerBooking