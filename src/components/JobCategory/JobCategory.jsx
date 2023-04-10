import React, { useEffect, useState } from 'react';
import './JobCategory.css'

const JobCategory = () => {
    const [JobCategory , setJobCategory] = useState([])
    useEffect(()=>{
        fetch('JobsCount.json')
        .then(res => res.json())
        .then(data => setJobCategory(data))
    },[])
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-20'>Job Category List </h1>
            <p className='text-center text-lg text-[#757575] mt-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:flex justify-between items-center gap-6'>
                {
                    JobCategory.map(jobCategory=> <div
                    key={jobCategory.id}
                    className='ps-5 py-5  category-containers rounded-lg container my-10 hover:bg-yellow-300  '>
                    <img src={jobCategory.img} alt="" />
                    <h4 className='mt-5  text-xl font-semibold '>{jobCategory.type}</h4>
                    <p className='text-lg text-[#757575]'>{jobCategory.available} jobs available</p>
                </div>)
                }
                
            
            </div>
        </div>
    );
};

export default JobCategory;