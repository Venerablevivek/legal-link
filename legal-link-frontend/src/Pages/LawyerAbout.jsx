import React from 'react'
import { formateDate } from '../utils/formateDate'

const LawyerAbout = ({name, about, qualifications, experiences}) => {
  return (
    <div>
        <div>
            {/* <h3 className='text-2xl leading-[30px] text-headingColor font-semibold flex items-center gap-2 '
            > 
            <span className=' text-[#DC1F27] font-bold text-2xl leading-9 ' >{name}</span>
            </h3> */}
            <p className='text-lg text-slate-800 ' >
            {about}
            </p>
        </div>

        <div className='mt-12' >
            <h3 className='leading-[30px] text-3xl font-semibold' >Education</h3>

            <ul className='pt-4 md:p-5 ' >
            {
                qualifications?.map((item,index)=>
                    (<li key={index} className=' bg-white px-8 py-6 rounded-md flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ' >
                    <div>
                        <span className=' text-[#DC1F27] text-[15px] leading-6 font-semibold ' >
                        {formateDate(item.startingDate)} -  {formateDate(item.endingDate)}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor '
                        >{item.degree}</p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor ' >
                    {item.university}</p>
                </li>)
                )
            }
            </ul>

        </div>

        <div className='mt-12' >
             <h3 className='text-3xl leading-[30px] font-semibold' >Experience</h3>

            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 ' >
                {
                    experiences?.map((item, index) =>(
                        <li key={index} className='p-4 rounded-md bg-white ' >
                        <span className=' text-[#DC1F27] text-[15px] leading-6 ' >
                            {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor '
                            >{item.position}</p>
                        <p className='text-[14px] leading-5 font-medium text-textColor ' >{item.hospital}</p>
                </li>
                    ))
                }
              
            </ul>
        
        </div>

    </div>
  )
}

export default LawyerAbout