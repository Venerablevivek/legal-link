import React from 'react'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'
import contactBGImg from "../assets/contactbg.png";
import contactImg from "../assets/contact.png";
import emailImg from "../assets/email.png";
import mobileImg from "../assets/mobile.png";
import locationImg from "../assets/location.png";
import ContactFormImg from "../assets/formbg.png";
import Testimonials from '../components/Common/Testimonials';

const ContactUs = () => {
  return (
    <div className=' w-full h-full overflow-x-hidden flex flex-col relative font-poppins' >
         <div className='absolute' >
            <Header/>
        </div>
       <div className=' w-full mx-auto flex mt-[70px] justify-between   ' >
            {/* left */}
            <div className=' w-[40%] mx-auto flex flex-col gap-[100px] mt-8 ' >
                <div>
                    <h2 className=' font-bold text-[65px] font-inter text-[#2B2B39] ' >Hola, <span className='text-[#DC1F27]'>What's up</span></h2>
                    <p className=' text-[18px] font-bold font-inter text-[#5F5F75] ' >Conikal build the Powerful Platform base on WordPress with latest technology. We offers the fastest way for Webmaster start their Platforms.</p>
                </div>
                <div className=' flex flex-col gap-8  ' >
                    <div className=' flex gap-5  ' >
                        <img src={locationImg} className=' w-[64px] h-[64px] ' />
                        <div className='flex flex-col justify-center ' >
                            <p className='font-bold text-[24px] ' >Address</p>
                            <p className='text-[18px] font-bold font-inter' >Mathura, Uttar Pradesh, India</p>
                        </div>
                    </div>
                    <div className=' flex gap-5  ' >
                        <img src={mobileImg} className=' w-[64px] h-[64px] ' />
                        <div className='flex flex-col justify-center ' >
                            <p className='font-bold text-[24px] ' >Mobile</p>
                            <p className='text-[18px] font-bold font-inter' >+919528740650</p>
                        </div>
                    </div>
                    <div className=' flex gap-5  ' >
                        <img src={emailImg} className=' w-[64px] h-[64px] ' />
                        <div className='flex flex-col justify-center ' >
                            <p className='font-bold text-[24px] ' >Email</p>
                            <p className='text-[18px] font-bold font-inter' >legallink@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className='w-[50%] flex items-center justify-center relative ' >
                <img src={contactBGImg} />
                <div className='absolute top-[10%] ' >
                    <img src={contactImg} className=' w-[500px] ' />
                </div>
            </div>
       </div>

       <div className=' w-full relative mb-[200px] ' >
            <img src={ContactFormImg} />
            <div className='absolute top-[10%] left-[30%] flex flex-col gap-5 ' >
                <div className='flex flex-col text-[48px] font-bold text-center text-white ' >
                    <p>Feel free to contact us.</p>
                    <p>We’ll glad to hear from you.</p>
                </div>
            <div >
                <div className="w-[600px] px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                    <form>
                        <div class="flex-1">
                            <label class="block mb-2 text-[18px] font-bold font-inter text-gray-600 dark:text-gray-200">Full Name</label>
                            <input type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600  outline-none " />
                        </div>

                        <div class="flex-1 mt-6">
                            <label class="block mb-2 text-[18px] font-bold font-inter text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600  outline-none " />
                        </div>

                        <div class="w-full mt-6">
                            <label class="block mb-2 text-[18px] font-bold font-inter text-gray-600 dark:text-gray-200">Message</label>
                            <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 outline-none " placeholder="Message"></textarea>
                        </div>

                        <button class="w-full px-6 py-3 mt-6 text-[18px] font-bold font-inter tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#DC1F27] rounded-md hover:bg-[#ff4b54] focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                            get in touch
                        </button>
                    </form>
                </div>
            </div>

            </div>
       </div>

       <div className='w-[90%] mx-auto flex flex-col font-poppins items-center ' >
             <Testimonials/>


        </div>

        <div className='w-[90%] mx-auto ' >
        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>
          <Footer/>
        </div>
    </div>
  )
}

export default ContactUs