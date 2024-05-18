import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../assets/successful-payment.png';
import Footer from '../components/Common/Footer';
import Testimonials from '../components/Common/Testimonials';
import Header from '../components/Common/Header';

const CheckoutSuccess = () => {
  return (
    <div className=' w-full h-full overflow-x-hidden  flex flex-col relative font-poppins' >
         <div className='absolute' >
            <Header/>
        </div>
        <div className=' h-screen mt-[70px] '>
        <div className='bg-gray-200 flex justify-center items-center flex-col p-6 md:mx-auto ' >
            {/* SVG Image */}
            <img src={Image} alt='Thankyou Image' width='300px' style={
                {
                    alignSelf:"center",
                }} loading='lazy' />
            <div className='text-center' >
                <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center ' >
                    Payment Done!
                </h3>
                <p className='py-10 text-center ' >
                    Thank you for completing your secure online Payment.
                </p>
                <p>Have a great day! </p>
                <div className='py-10 text-center ' >
                    <Link
                        to="/search-lawyer"
                        className='px-12 bg-primaryColor text-red-700 font-semibold py-3 '
                    >
                        Go Back to Home
                    </Link>
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

export default CheckoutSuccess