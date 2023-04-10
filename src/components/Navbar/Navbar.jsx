import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
   
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-normal dropdown-content mt-3 p-10 shadow bg-gray-400 rounded-box w-96 text-2xl">
                    <Link className=' hover:text-[#7E90FE]' to="/">Home</Link>
                    <Link className=' hover:text-[#7E90FE]' to="/statistics">Statistics</Link>
                    <Link className=' hover:text-[#7E90FE]' to="/applied-jobs">Applied Jobs</Link>
                    <Link className=' hover:text-[#7E90FE]' to="/blogs">Blogs</Link>
                    </ul>
                </div>
                <h1 className='text-3xl font-bold '>Job Hunter</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-500 gap-10 text-xl font-semibold ">
                    <Link className=' hover:text-[#7E90FE]' to="/">Home</Link>
                    <Link className=' hover:text-[#7E90FE]' to="/statistics">Statistics</Link>
                    <Link className=' hover:text-[#7E90FE]' to="/applied-jobs">Applied Jobs</Link>
                    <Link className=' hover:text-[#7E90FE]' to="/blogs">Blogs</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <button className='rounded-lg px-7 py-5 text-white text-xl font-bold bg-[#7E90FE]'>Start Applying</button>
            </div>
        </div>
    );
};

export default Navbar;