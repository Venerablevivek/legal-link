import React, { useEffect, useState } from 'react'
// import DoctorCard from './../../components/Doctors/DoctorCard';
import {toast} from "react-hot-toast";
import { BASE_URL } from '../../BASE_URL';
import { useSelector } from 'react-redux';
import LawyerCard from '../Cards/LawyerCard';

const MyBookings = () => {
    const [appointments, setAppointments] = useState([]);
    const { token } = useSelector((state) => state.auth);

    const getAppointments = async() =>{
      try {
            const url = `${BASE_URL}/user/appointments/my-appointments`;
            const res = await fetch(url, {
              method:'get',
              headers: {Authorization:`Bearer ${token}`}
          })

          const result = await res.json();

          if(!res.ok){
              throw new Error(result.message);
          }
            toast.success('Appointments fetched Successfully');
            setAppointments(result.data);

      } catch (error) {
        console.log(`Error while fetching appointments`, error.message);
        toast.error("Can't Fetch Appointments, TRY AGAIN");
      }
    }

    useEffect(()=>{
      getAppointments();
    },[])

  return (
    <div className='' >
            {
              (<div className=' grid grid-cols-2 lg:grid-cols-3 gap-5 ' >
                  { 
                    appointments?.map(Lawyer =>(
                      <LawyerCard Lawyer={Lawyer} key={Lawyer._id} />
                    ))
                  }
              </div>)
            }

            {
              appointments.length === 0 && (
                <h2 className='mt-[100px] text-center leading-7 text-[20px] font-semibold text-primaryColor '
                >You did not book any Lawyer yet!</h2>
              )
            }

    </div>
  )
}

export default MyBookings