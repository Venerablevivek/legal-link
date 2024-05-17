import React from 'react'
import Header from '../components/Common/Header'
import HeroBg from "../assets/hero-bg.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import SlideShow from '../components/slideshow/SlideShow';
import ImmiImg from "../assets/immi.png";
import personalImg from "../assets/personal.png";
import MatriImg from "../assets/matrimonial.png";
import propertyImg from "../assets/property.png";
import section3Img from "../assets/bg3.png";
import one from "../assets/img/one.png";
import two from "../assets/img/two.png";
import three from "../assets/img/three.png";
import four from "../assets/img/four.png";
import five from "../assets/img/five.png";
import six from "../assets/img/six.png";
import Footer from '../components/Common/Footer';
import Testimonials from '../components/Common/Testimonials';

const HomePage = () => {
  return (
    <div className=' w-full h-full overflow-x-hidden flex flex-col gap-10 relative font-poppins ' >
        {/* image */}
        <div className='w-full h-full ' >
            <img src={HeroBg} />
        </div>

        <div className='absolute' >
            <Header/>
        </div>

        {/* hero-section */}
        <div className=' left-[10%] absolute top-[5%] w-[90%] mx-auto flex justify-between ' >
                {/* Left Side  */}
                <div className=' w-[40%] flex flex-col gap-[16px] ' >
                  <p className=' text-[18px] text-white ' >Online Legal Aid Platform</p>
                  <p className=' text-[36px] font-semibold text-white ' >Simplify your legal <br/> journey with LegalLink.</p>
                  <p className=' text-white text-[18px] font-inter ' >Consult a Lawyer now.</p>
                  <div className='flex gap-5 items-center ' >
                    <div className='relative flex ' >
                      <div className='w-[40px] h-[40px] bg-white rounded-full ' >
                        <img src={user1}  />
                      </div>
                      <div className='absolute left-8 w-[40px] h-[40px] bg-white rounded-full ' >
                        <img src={user2}  />
                      </div>
                      <div className=' absolute left-[4rem] w-[40px] h-[40px] bg-white rounded-full ' >
                        <img src={user3}  />
                      </div>
                    </div>
                    <p className=' absolute left-[116px] flex gap-2 items-center text-white text-[16px] ' >+222 Registered Lawyers 
                    <div className=' w-[10px] h-[10px] bg-[#00FB0C] rounded-full ' ></div> </p>
                  </div>
                  <button className='outline-none bg-[#DC1F27] rounded-[4px] text-[18px] text-white font-medium self-start
                 px-[30px] py-[15px] drop-shadow-lg transition-all duration-200 hover:scale-105 ' >Talk to Lawyer</button>
                </div>

                {/* right side */}
                <div className='w-[60%]' >
                  <SlideShow/>
                </div>
        </div>

        {/* section -2 */}

        <div className=' w-[90%] mx-auto flex justify-between font-poppins ' >
              {/* left */}
              <div className=' w-[35%] flex flex-col gap-2 ' >
                <h2 className=' text-[40px] font-poppins text-[#425066] ' >Trust your future & </h2>
                <p className=' text-[48px] text-[#DC1F27] font-semibold mt-[-20px] ' >Peaceful life</p>
                <p  className='text-[#425066] text-justify ' > Secure your tomorrow with our trusted network of legal experts. From navigating complex legal processes to ensuring peace of mind, our platform connects you with experienced attorneys dedicated to safeguarding your rights and paving the way for a brighter future.</p>
              </div>

              {/* right */}
              <div className=' w-[55%] flex gap-5 mt-[50px] ' >
                <div className=' grid grid-rows-2 gap-5 ' >
                    <div className=' flex flex-col gap-5 bg-[#E6F9FF] rounded-lg px-5 py-3 items-center justify-center shadow-md ' >
                        <div className=' w-[75px] h-[75px] bg-white rounded-full flex items-center justify-center ' >
                          <img src={ImmiImg} className=' w-[38px] h-[40px]  ' />
                        </div>
                        <div className=' flex flex-col justify-center items-center gap-2 ' >
                          <p className=' text-xl font-semibold ' >Immigration</p>
                          <p className='text-center text-[#777777] '>Legal assistance for immigration matters provided by experienced attorneys.</p>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5 bg-[#FFEBE6] rounded-lg px-5 py-3 items-center justify-center shadow-md ' >
                        <div className=' w-[75px] h-[75px] bg-white rounded-full flex items-center justify-center ' >
                          <img src={MatriImg} className=' w-[38px] h-[40px]  ' />
                        </div>
                        <div className=' flex flex-col justify-center items-center gap-2 ' >
                          <p className=' text-xl font-semibold ' >Matrimonial</p>
                          <p className='text-center text-[#777777] ' >Professional guidance for matrimonial issues offered by specialized lawyers.</p>
                        </div>
                    </div>
                </div>
                <div className=' grid grid-rows-2 gap-5 mt-[-130px] mb-[100px] ' >
                    <div className=' flex flex-col gap-5  bg-[#FFEBE6] rounded-lg px-5 py-3 items-center justify-center shadow-md  ' >
                        <div className=' w-[75px] h-[75px] bg-white rounded-full flex items-center justify-center ' >
                          <img src={propertyImg} className=' w-[38px] h-[40px]  ' />
                        </div>
                        <div className=' flex flex-col justify-center items-center gap-2 ' >
                          <p className=' text-xl font-semibold ' >Property</p>
                          <p className='text-center text-[#777777] '>Expert advice on property affairs delivered by seasoned legal professionals.</p>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5 bg-[#E6F9FF] rounded-lg px-5 py-3 items-center justify-center shadow-md ' >
                        <div className=' w-[75px] h-[75px] bg-white rounded-full flex items-center justify-center ' >
                          <img src={personalImg} className=' w-[38px] h-[40px]  ' />
                        </div>
                        <div className=' flex flex-col justify-center items-center gap-2' >
                          <p className=' text-xl font-semibold ' >Personal</p>
                          <p className='text-center text-[#777777] '>Legal support for personal matters provided by knowledgeable attorneys.</p>
                        </div>
                    </div>
                </div>
              </div>
        </div>

        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>

        {/* section-3 */}
        <div className=' w-[90%] mx-auto flex gap-[50px] justify-between items-center ' >
          <div className=' w-[55%] flex cursor-pointer  ' >
            <img src={section3Img} />
          </div>

          <div className=' w-[35%] flex flex-col gap-2 ' >
                <h2 className=' text-[40px] font-poppins text-[#425066] ' >Connect with our </h2>
                <p className=' text-[48px] text-[#DC1F27] font-semibold mt-[-20px] ' >Legal Advisors</p>
                <p  className='text-[#425066] text-justify ' >Connect with our legal advisors: Access reliable legal counsel at your fingertips. Our platform offers seamless connectivity to a diverse pool of legal experts, ensuring personalized guidance tailored to your unique needs. From consultations to case assessments, our advisors are here to support you every step of the way..</p>
                <button className='outline-none bg-[#DC1F27] rounded-[4px] text-[18px] text-white font-medium self-start
                 px-[30px] py-[15px] drop-shadow-lg transition-all duration-200 hover:scale-105 ' >Talk to Lawyer</button>
          </div>



        </div>

        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>

        {/* section-4 */}
        {/* lawyer profiles from backend */}
        <div className=' w-[90%] mx-auto flex flex-col gap-5  ' >
              <h2 className=' text-[40px] font-poppins text-[#425066] text-center ' >Book the slot with<span className='text-[42px] text-[#DC1F27] font-bold mt-[-20px] ' > expert Lawyers</span> </h2>
        </div>

        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>
        {/* section-5 */}
        <div className=' w-[90%] mx-auto flex flex-col gap-5 font-poppins items-center ' >
              <h2 className=' text-[40px] font-poppins text-[#425066] text-center ' >Experience a smarter</h2>
              <h2 className=' text-center text-[42px] text-[#DC1F27] font-bold mt-[-25px] '  >legal solution platform in your hand</h2>

              <div className=' grid grid-cols-3 ' >
                  <div className=' flex flex-col gap-5 px-8 py-6 border-r-[#DDDDDD] border-r-[1px] border-b-[#DDDDDD] border-b-[1px] ' >
                      <div className=' w-[60px] h-[60px] bg-[#FFF4E2] flex items-center justify-center rounded-md ' >
                         <img src={one} className=' w-[30px] h-[35px] ' />
                      </div>
                      <div className='flex gap-2 flex-col ' >
                        <h4 className=' text-[18px] font-semibold ' >Immigration assistance</h4>
                        <p className=' text-[16px] ' >Navigate immigration processes with expert legal guidance.</p>
                      </div>
                  </div>
                  <div className=' flex flex-col gap-5 px-8 py-6 border-r-[#DDDDDD] border-r-[1px] border-b-[#DDDDDD] border-b-[1px] ' >
                      <div className=' w-[60px] h-[60px] bg-[#E7FBF9] flex items-center justify-center rounded-md ' >
                         <img src={two} className=' w-[30px] h-[35px] ' />
                      </div>
                      <div className='flex gap-2 flex-col ' >
                        <h4 className=' text-[18px] font-semibold ' >Intellectual Property</h4>
                        <p className=' text-[16px] ' >Protect your creations with specialized legal assistance.</p>
                      </div>
                  </div>
                  <div className=' flex flex-col gap-5 px-8 py-6  border-b-[#DDDDDD] border-b-[1px] ' >
                      <div className=' w-[60px] h-[60px] bg-[#FDE0F6] flex items-center justify-center rounded-md ' >
                         <img src={three} className=' w-[30px] h-[35px] ' />
                      </div>
                      <div className='flex gap-2 flex-col ' >
                        <h4 className=' text-[18px] font-semibold ' >Complaince lawyer</h4>
                        <p className=' text-[16px] ' >Ensure adherence to regulations with compliance-focused legal support.</p>
                      </div>
                  </div>
                  <div className=' flex flex-col gap-5 px-8 py-6 border-r-[#DDDDDD] border-r-[1px]  ' >
                      <div className=' w-[60px] h-[60px] bg-[#C8C4E9] flex items-center justify-center rounded-md ' >
                         <img src={four} className=' w-[30px] h-[35px] ' />
                      </div>
                      <div className='flex gap-2 flex-col ' >
                        <h4 className=' text-[18px] font-semibold ' >Making a will</h4>
                        <p className=' text-[16px] ' >Secure your legacy with professional will drafting services.</p>
                      </div>
                  </div>
                  <div className=' flex flex-col gap-5 px-8 py-6 border-r-[#DDDDDD] border-r-[1px] ' >
                      <div className=' w-[60px] h-[60px] bg-[#E0C1F4] flex items-center justify-center rounded-md ' >
                         <img src={five} className=' w-[30px] h-[35px] ' />
                      </div>
                      <div className='flex gap-2 flex-col ' >
                        <h4 className=' text-[18px] font-semibold ' >Legal documentation</h4>
                        <p className=' text-[16px] ' >Obtain accurate legal documents through specialized attorney assistance.</p>
                      </div>
                  </div>
                  <div className=' flex flex-col gap-5 px-8 py-6  ' >
                      <div className=' w-[60px] h-[60px] bg-[#C8C4E9] flex items-center justify-center rounded-md ' >
                         <img src={six} className=' w-[30px] h-[35px] ' />
                      </div>
                      <div className='flex gap-2 flex-col ' >
                        <h4 className=' text-[18px] font-semibold ' >Estate planning</h4>
                        <p className=' text-[16px] ' >Safeguard your assets with strategic estate planning solutions.</p>
                      </div>
                  </div>
                 
              </div>

              <button className='outline-none bg-[#DC1F27] rounded-[4px] text-[18px] text-white  font-medium self-center mt-[20px]
                 px-[30px] py-[15px] drop-shadow-lg transition-all duration-200 hover:scale-105 ' >Talk to Lawyer</button>
        </div>

        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>
        {/* section - 6 */}
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

export default HomePage