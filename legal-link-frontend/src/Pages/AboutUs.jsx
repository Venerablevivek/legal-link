import React from 'react'
import Header from '../components/Common/Header'
import Testimonials from '../components/Common/Testimonials'
import Footer from '../components/Common/Footer'
import AboutImg from "../assets/about.png";
import AboutImg1 from "../assets/about1.png";

const AboutUs = () => {
  return (
    <div className=' w-full h-full overflow-x-hidden flex flex-col relative font-poppins' >
        <div className='absolute' >
            <Header/>
        </div>

        <div className=' w-[100%] mt-[70px] flex flex-col gap-[50px] ' >
           <div className=' bg-[#F5EFE0] pt-10 pb-10 ' >
           <div className='w-[90%] mx-auto flex flex-col gap-10 items-center ' >
                <h1 className=' font-bold font-inter text-6xl text-[#2B2B39] ' >Book Your Legal Consultation with Ease!</h1>
                <p className=' text-[#5F5F75] text-[18px] text-center ' >Schedule your lawyer appointments effortlessly with our user-friendly booking system. Select your preferred date and time, receive instant confirmation, and manage your bookings online. Enjoy a seamless experience that saves you time and ensures you get the legal help you need promptly.</p>
                <img src={AboutImg} className=' w-[60%] ' />
            </div>
           </div>
            <div className='w-[90%] mx-auto flex gap-[200px] justify-between items-center mt-[50px] mb-[50px] ' >
                <div className=' w-[60%] flex flex-col gap-10 ' >
                    <h2 className=' text-[#5F5F75] text-[24px] ' >Who use platfrom?</h2>
                    <p className=' text-[30px] text-[#2B2B39] font-bold text-justify ' >Individuals, small business owners, corporations, and legal professionals utilize our platform for efficient and easy legal consultation bookings.</p>
                </div>
                <div>
                    <img src={AboutImg1} className=' w-[90%] ' />
                </div>
            </div>
        </div>

        <div className='w-[100%] mx-auto bg-white pt-6 flex flex-col font-poppins items-center ' >
             <Testimonials/>
        </div>

        <div className='w-[100%] mx-auto ' >
        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>
          <Footer/>
        </div>
    </div>
  )
}

export default AboutUs