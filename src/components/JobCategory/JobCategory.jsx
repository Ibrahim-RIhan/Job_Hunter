import React from 'react';
import './JobCategory.css'
import financeImg from './../../assets/Icons/accounts 1.png'
import creativeImg from './../../assets/Icons/business 1.png'
import marketingImg from './../../assets/Icons/social-media 1.png'
import engineerImg from './../../assets/Icons/chip 1.png'

const JobCategory = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-20'>Job Category List </h1>
            <p className='text-center text-lg text-[#757575] mt-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:flex justify-between items-center gap-6'>
                <div className='ps-5 py-5  category-containers rounded-lg container my-10 hover:bg-yellow-300  '>
                    <img src={financeImg} alt="" />
                    <h4 className='mt-5  text-xl font-semibold '>Account and Finance</h4>
                    <p className='text-lg text-[#757575]'>300 jobs available</p>
                </div>
                <div className='ps-5 py-5 category-containers rounded-lg container  hover:bg-yellow-300    '>
                    <img src={creativeImg} alt="" />
                    <h4 className='mt-5  text-xl font-semibold '>Creative Design</h4>
                    <p className='text-lg text-[#757575]'>100 jobs available</p>
                </div>
                <div className='ps-5 py-5 category-containers rounded-lg container  hover:bg-yellow-300    '>
                    <img src={marketingImg} alt="" />
                    <h4 className='mt-5  text-xl font-semibold '>Marketing and Sales</h4>
                    <p className='text-lg text-[#757575]'>150+ jobs available</p>
                </div>
                <div className='ps-5 py-5 category-containers rounded-lg container   hover:bg-yellow-300   '>
                    <img src={engineerImg} alt="" />
                    <h4 className='mt-5  text-xl font-semibold '>Engineering Job</h4>
                    <p className='text-lg text-[#757575]'>50 jobs available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;