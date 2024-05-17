import Hero1img from "../../assets/hero1.png";
import VideoImg from "../../assets/video.png";
import PhoneImg from "../../assets/phone.png";
import AppointImg from "../../assets/appoint.png";
import LawyerImg from "../../assets/hero-lawyer.png";
import { ImProfile } from "react-icons/im";
import { GiInjustice } from "react-icons/gi";
import { BsFillAwardFill } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { HiOutlineSearchCircle } from "react-icons/hi";

import React, { useState, useEffect, useRef } from 'react';

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF385C"];
const delay = 2500;

// Define your components here
const Component1 = () => (
  <div className="slide h-[300px] w-full rounded-xl flex items-center justify-center font-poppins ">
    <div className="z-50 flex flex-col gap-5 " >
    <div className="w-[280px] bg-white rounded-lg px-4 py-1 flex gap-5 items-center shadow-md   " >
            <img src={AppointImg} className="w-[40px]" />
            <div className="flex flex-col text-md " >
                <p className=" font-bold text-lg ">Appointment Booking </p>
                <p>Flexible booking for legal <br/> consultations.</p>
            </div>
        </div>
        <div className="w-[280px] bg-white rounded-lg px-4 py-1 flex gap-5 items-center shadow-md   " >
            <HiOutlineSearchCircle className=" w-[40px] h-[40px] text-green-500 " />
            <div className="flex flex-col text-md " >
                <p className=" font-bold text-lg ">Search Lawyers </p>
                <p>Search for legal <br/> experts</p>
            </div>
        </div>
        <div className="w-[280px] bg-white rounded-lg px-4 py-1 flex gap-5 items-center shadow-md   " >
        <RiSecurePaymentLine className=" w-[40px] h-[40px] text-blue-500 " />
            <div className="flex flex-col text-md " >
                <p className=" font-bold text-lg " >Secure Payments</p>
                <p>Safe and encrypted <br/> payment methods.</p>
            </div>
        </div>
    </div>
  </div>
);

const Component2 = () => (
  <div className="slide h-[300px] w-full rounded-xl flex flex-col items-center justify-center relative ml-[-20px] font-poppins ">
    <div className=" h-64 w-64 px-5 py-3 rounded-md shadow-md  " >
        <img src={LawyerImg} className="h-64 w-64"  />
    </div>
    <div className=" absolute shadow-md  top-0 left-[-50%] w-[230px] bg-white rounded-lg px-3 py-2 flex gap-3 items-center  " >
                        <ImProfile className="w-[40px] h-[40px] text-violet-500   " />
            <div className="flex flex-col text-[14px] " >
                <p className=" font-bold text-md " >Detailed Profiles</p>
                <p>Comprehensive detailed <br/> Lawyer Profiles</p>
            </div>
        </div>
  </div>
);

const Component3 = () => (
  <div className="slide h-[300px] w-full rounded-xl flex items-center justify-center relative ml-[-50px] ">
    <div className="circle bg-white h-64 w-64 rounded-full flex items-center justify-center">
      <img src={Hero1img} className=" h-60 w-60  " />
    </div>
    <div className=" absolute bottom-0 left-[-10%] shadow-md  w-[280px] bg-white rounded-lg px-3 py-2 flex gap-3 items-center  " >
                        <GiInjustice  className="w-[60px] h-[60px] text-red-500   " />
            <div className="flex flex-col text-md " >
                <p className=" font-bold text-lg " >Legal-Link</p>
                <p>where justice meets <br/> convenience </p>
            </div>
        </div>
  </div>
);

const Component4 = () => (
<div className="slide h-[300px] w-full rounded-xl flex items-center justify-center font-poppins ">
    <div className="z-50 flex flex-col gap-5 " >
    <div className="w-[280px] bg-white rounded-lg px-4 py-1 flex gap-5 items-center shadow-md  " >
            <img src={VideoImg} className="w-[40px]" />
            <div className="flex flex-col text-md " >
                <p className=" font-bold text-lg " >Video Calls</p>
                <p>Real-time lawyer-client <br/> discussions online.</p>
            </div>
        </div>
        <div className="w-[280px] bg-white rounded-lg px-4 py-1 flex  gap-5 items-center shadow-md  " >
            <img src={PhoneImg} className="w-[40px]" />
            <div className="flex flex-col text-md " >
                <p className=" font-bold text-lg " >Audio Calls</p>
                <p>Instant legal advice over <br/> phone.</p>
            </div>
        </div>
        <div className="w-[280px] bg-white rounded-lg px-4 py-1 flex  gap-5 items-center  " >
        <BsFillAwardFill className=" w-[40px] h-[40px] text-pink-500 " />
            <div className="flex flex-col text-md " >
                <p className=" font-bold text-lg " >Legal Education</p>
                <p>Rich repository of <br/> legal information</p>
            </div>
        </div>
    </div>
  </div>
);

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

    const components = [Component1, Component2, Component3, Component4];

  return (
    <div className="w-full h-full slideshow mx-auto overflow-hidden max-w-lg ">
      <div
        className="slideshowSlider whitespace-nowrap flex gap-[200px] ml-[100px] transition-transform ease-in-out duration-1000"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {components.map((Component, idx) => (
          <Component key={idx} />
        ))}
      </div>

      <div className="slideshowDots text-center">
        {components.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot inline-block h-[6px] w-10 rounded-full cursor-pointer mx-1 ${index === idx ? 'bg-[#FF385C]' : 'bg-white'}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
