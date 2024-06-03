import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { BASE_URL } from '../../BASE_URL';
import { apiConnector } from '../../services/apiConnector';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {updateLawyerStatus} from "../../services/authAPI";

const AdminUpdate = () => {

    const [data, setData] = useState();
    const [status, setStatus] = useState();
    const Id = useParams();
    const id = Id.id;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        getLawyerDetails();
      },[])
    
      const getLawyerDetails = async(req,res) =>{
        try {
      
          const response = await apiConnector("GET", `${BASE_URL}/lawyer/get-lawyer-detail/${id}`);
    
    
          if(!response.data.success){
            throw new Error(response.data.message)
          }
          
          setData(response.data.data);
        } catch (error) {
          console.log("Cannot fetch verify data", error)  
        }
      }

      useEffect(()=>{
        setStatus(data?.id.isApproved);
      },[data])

      const submitHandler = async(e)=>{
        e.preventDefault();
        const newId = data?.id._id;
        dispatch(updateLawyerStatus(newId,
            status,
            navigate,))
      }

  return (
    <div className='w-full h-full overflow-x-hidden flex flex-col relative font-poppins bg-gray-100 '>
        <div className='absolute' >
            <Header/>
        </div>

        <div className=' w-[90%] mx-auto mt-[100px] flex flex-col gap-10 mb-[100px] ' >
            <div class="flex items-center justify-center gap-x-3">
                <h2 class="text-2xl font-bold text-red-600 ">Update Status</h2>
            </div>
            <div className=' w-full flex justify-between ' >
            <div class="bg-blue-200 max-w-xl mx-auto overflow-hidden sm:rounded-lg drop-shadow-lg ">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-semibold text-red-700">
            Lawyer information
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Details and informations about Lawyer.
        </p>
    </div>
    <div class="border-t border-gray-200">
        <dl>
            <div class="bg-blue-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-semibold text-gray-500">
                    Full name
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {data?.fullName}
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-semibold text-gray-500">
                    Specialization
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {data?.specialization}
                </dd>
            </div>
            <div class="bg-blue-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-semibold text-gray-500">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {data?.email}
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-semibold text-gray-500">
                    Lawyer Price
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                ₹ {data?.id.ticketPrice}
                </dd>
            </div>
            <div class="bg-blue-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-semibold text-gray-500">
                    About
                </dt>
                <dd class="mt-1 text-sm text-justify text-gray-900 sm:mt-0 sm:col-span-2">
                    {data?.id.about}
                </dd>
            </div>
        </dl>
    </div>
            </div>
            <div className=' flex flex-col gap-4 ' >
                <div className='flex gap-2 items-center ' >
                    <p className=' text-lg font-semibold ' >Current Status</p>
                    {
                        data?.id.isApproved === 'approved' && (<div className='flex items-center gap-2 bg-emerald-100 text-green-500 px-3 py-2 font-bold rounded-full ' >
                        <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <p>{data?.id.isApproved}</p>
                        </div>)
                    }
                    {
                        data?.id.isApproved === 'pending' && (<div className='flex items-center gap-2 bg-orange-100 text-orange-500 px-3 py-2 font-bold rounded-full ' >
                        <span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                        <p>{data?.id.isApproved}</p>
                        </div>)
                    }
                    {
                        data?.id.isApproved === 'cancelled' && (<div className='flex items-center gap-2 bg-red-100 text-red-500 px-3 py-2 font-bold rounded-full ' >
                        <span class="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                        <p>{data?.id.isApproved}</p>
                        </div>)
                    }
                </div>
                <div className='flex flex-col gap-1' >
                    <p className=' text-lg font-semibold text-red-600 ' >Change Status</p>
                    <form className=' w-full flex flex-col gap-4  ' onSubmit={submitHandler} >
                        <select 
                        onChange={e => setStatus(e.target.value)}
                        value={status}
                        className=' w-full px-1 py-2 outline-none border-none bg-red-200 rounded-md text-black font-semibold ' >
                            <option value="approved" >Approved</option>
                            <option value="pending" >Pending</option>
                            <option value="cancelled" >Cancelled</option>
                        </select>
                        <button className=' w-full bg-red-500 hover:bg-red-400 font-semibold text-white px-6 py-3 rounded-md
                 transition-all duration-300 '
                        >Submit</button>
                    </form>
                </div>
            </div>
            </div>
            <div className='w-[90%] mx-auto' >
                <div className=' w-full flex justify-between items-center gap-[100px] ' >
                    <div className='w-[50%] flex flex-col gap-2 items-center  ' >
                        <img src={data?.Document1} className='  '  />
                        <p className=' font-semibold ' >Document 1</p>
                    </div>
                    <div className=' w-[50%] flex flex-col gap-2 items-center ' >
                        <img src={data?.Document2} />
                        <p className=' font-semibold ' >Document 2</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-[100%] mx-auto ' >
        <div className=' w-[100%] h-[1px] bg-[#DDDDDD] ' ></div>
          <Footer/>
        </div>
    </div>
  )
}

export default AdminUpdate