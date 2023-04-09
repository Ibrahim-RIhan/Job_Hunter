import React from 'react';
import HeaderImage from './../../assets/All Images/HeaderImage.png'

const Header = () => {
    return (
        <div className=' flex flex-col-reverse md:flex-row justify-around items-center my-10 gap-10 '>
          
           <div className='ms-3'>
            <h1 className='text-7xl font-bold leading-normal'>One Step <br /> Closer To Your <span className='text-[#7E90FE]'> Dream Job</span></h1>
            <p className='text-[#757575] font-bold text-lg my-7 leading-loose '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='rounded-lg px-7 py-5 text-white text-xl font-bold bg-[#7E90FE]'>Get Started</button>
           </div>
           <img src={HeaderImage} alt="" />
        </div>
    );
};

export default Header;