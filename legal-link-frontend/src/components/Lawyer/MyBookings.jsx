import React, { useEffect, useState } from 'react'
import { formateDate } from '../../utils/formateDate'
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../BASE_URL';
import {toast} from "react-hot-toast";
import Spinner from '../Common/Spinner';

const MyBookings = () => {

    const [appointments, setAppointments] = useState([]);
    const { token } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);

    const getAppointments = async() =>{
        setLoading(true);
      try {
            const url = `${BASE_URL}/lawyer/profile/me`;
            const res = await fetch(url, {
              method:'get',
              headers: {Authorization:`Bearer ${token}`}
          })

          const result = await res.json();

          if(!res.ok){
              throw new Error(result.message);
          }
            setAppointments(result.data);
            setLoading(false);
      } catch (error) {
        console.log(`Error while fetching appointments`, error.message);
        setLoading(false);
      }
    }

    useEffect(()=>{
      getAppointments();
    },[])

  return (
    <div className='overflow-hidden rounded-lg  mt-[10px] ' >
        {
            loading && (<div className=' mt-[100px] mb-[100px] ' >
                <Spinner/>
            </div>)
        }
    {
        !loading && (<table className='w-full text-left text-sm min-w-full divide-y divide-gray-200 mt-5 ' >
        <thead className='text-xs  uppercase bg-[#5D59D9] text-white rounded-lg ' >
            <tr className='rounded-md' >
                <th scope='col' className='px-6 py-3 ' >
                    General Info
                </th>
                <th scope='col' className='px-6 py-3 ' >
                    Phone Number
                </th>
                <th scope='col' className='px-6 py-3 ' >
                    Gender
                </th>
                <th scope='col' className='px-6 py-3 ' >
                    Payment
                </th>
                <th scope='col' className='px-6 py-3 ' >
                    Price
                </th>
                <th scope='col' className='px-6 py-3 ' >
                    Booked On
                </th>
            </tr>
        </thead>

        <tbody className='divide-y divide-gray-200 rounded-md ' >
          {
            !appointments && (
            <div className=' w-full flex flex-col ml-[300px] mt-[50px] ' >
                <h1 class=" mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Data not Present</h1>
               <p class="mt-4 text-gray-500 dark:text-gray-400">You do not have any Booking yet.</p>
            </div>
            )
          }
            { 
                appointments.appointments?.map((item)=>(
                    <tr key={item._id} className='bg-gray-50' >
                        <th scope='row' className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ' >
                            <img src={item.user.imageUrl} className='w-10 h-10 rounded-full'  alt='User Booking Image' loading='lazy' />
                            <div className='pl-3' >
                                <div className='text-base font-semibold ' >
                                {item.user.fullName}
                                </div>
                                <div className='text-normal text-gray-500 ' >
                                    {item.user.email}
                                </div>
                            </div>
                        </th>
                        <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap ' >{item.user.phoneNumber}</td>
                        <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap ' >{item.user.gender}</td>
                        <td className='px-6 py-4 ' >
                        {
                            item.isPaid && (
                                <div className='flex items-center ' >
                                    <div className='h-2.5 w-2.5 rounded-full bg-green-500 mr-2 ' >
                                    </div>
                                    Paid
                                </div>
                            )
                        }
                        {
                            !item.isPaid && (
                                <div className='flex items-center ' >
                                    <div className='h-2.5 w-2.5 rounded-full bg-red-500 mr-2 ' >
                                    </div>
                                    Unpaid
                                </div>
                            )
                        }
                        </td>
                        <td className='px-6 py-4 ' >₹ {item.ticketPrice}</td>
                        <td className='px-6 py-4 ' >{formateDate(item.createdAt)}</td>

                    </tr>
                ))
            }
        </tbody>

    </table>)
    }
    </div>
  )
}

export default MyBookings