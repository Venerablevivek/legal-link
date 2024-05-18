import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../BASE_URL';
import { Link } from 'react-router-dom';

const Testimonials = () => {  
    const [data, setData] = useState([]);
  const [topSix, setTopSix] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    getData();
  }, []);

  const getData = async() =>{
    try {
        const response = await axios.get(`${BASE_URL}/user/review/get-all`);

        if(!response.data.success){
            throw new Error(response.data.message)
        }

        setData(response.data.data);
    } catch (error) {
        console.log("error", error);
    }
}

  useEffect(() => {
    // Filter the top 6 results
    if (data.length > 0) {
      const topResults = data.slice(0, 6);
      setTopSix(topResults);
    }
  }, [data]);      


    return (
     <>
       <section class="py-12 bg-white sm:py-16 lg:py-20 mt-[-20px] ">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex flex-col items-center">
            <div class="text-center">
                <p class="text-lg font-medium text-gray-600 font-pj">{data?.length} people have said how good Legal-Link</p>
                <h2 class="mt-4 text-3xl font-bold text-[#DC1F27] sm:text-4xl xl:text-5xl font-pj">Our happy clients say about us</h2>
            </div>

            <div class="mt-8 text-center md:mt-16 md:order-3">
                <Link to="/all-reviews" >
                <p title="" class="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"> Check all {data?.length} reviews </p>
                </Link>
            </div>
            <div class="relative mt-10 md:mt-24 md:order-2">
            <div class="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                    <div class="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{
                        background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
                    }} ></div>
                </div>

                <div class="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                {
                topSix?.map((item,ind)=>(
                    <div key={ind} class="flex flex-col overflow-hidden shadow-xl">
                        <div class="flex flex-col justify-between rounded-md flex-1 p-6 bg-white lg:py-8 lg:px-7">
                            <div class="flex-1">
                                <div class="flex items-center font-bold text-md ">
                                    <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    {item.rating}
                                </div>

                                <blockquote class="flex-1 mt-8">
                                    <p class="text-lg leading-relaxed text-gray-900 font-pj">“{item.reviewText}”</p>
                                </blockquote>
                            </div>

                            <div class="flex items-center mt-8">
                                <img class="flex-shrink-0 object-cover rounded-full w-11 h-11" src={item.imageUrl} alt="" />
                                <div class="ml-4">
                                    <p class="text-base font-bold text-gray-900 font-pj">{item.name}</p>
                                    <p class="mt-0.5 text-sm font-pj text-gray-600">{item.job}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
                </div>
            </div>
        </div>
    </div>
</section>
     </>
    )
}

export default Testimonials;