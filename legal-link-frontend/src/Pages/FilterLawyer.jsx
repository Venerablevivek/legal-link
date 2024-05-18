import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../BASE_URL';
import axios from 'axios';
import LawyerCards from '../components/Common/LawyerCards';

const FilterLawyer = () => {
    const [data, setData] = useState([]);
  const [topSix, setTopSix] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    getData();
  }, []);

  const getData = async() =>{
    try {
        const response = await axios.get(`${BASE_URL}/lawyer/get-all`);

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
    <div>
        <div className=' mt-[30px] ' >
                <LawyerCards filteredData={topSix} />
            </div>
    </div>
  )
}

export default FilterLawyer