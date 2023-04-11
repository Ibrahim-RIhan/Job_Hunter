import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faLocationPin } from '@fortawesome/free-solid-svg-icons'


const AppliedJobsPage = ({ appliedJobs }) => {
    const { id, img, jobTitle, company, type1, type2, salary, location } = appliedJobs
    return (
        <div className='md:flex items-center justify-evenly w-auto mb-10 ms-7 overflow-x-hidden'>
            <div className='md:flex items-center  gap-10'>
                <img className='w-1/5' src={img} alt="" />
                <div>
                    <h3 className='text-2xl font-bold my-3 '>{jobTitle}</h3>
                    <p className='font-medium text-lg my-3 text-[#757575]'>{company}</p>
                    <div className='flex gap-4 my-3'>
                        <button className='btn-outline btn btn-info '>{type1}</button>
                        <button className='btn-outline btn  btn-info '>{type2}</button>
                    </div>
                    <div className='flex gap-5 text-lg  text-[#757575] font-medium my-3'>
                        <p><FontAwesomeIcon className='fonticon' icon={faLocationPin} />     {location}</p>
                        <p><FontAwesomeIcon className='fonticon' icon={faDollar} />   Salary {salary}</p>
                    </div>
                </div>
            </div>

            <button className='rounded-lg px-5 py-4 text-white text-lg font-semibold  bg-[#7E90FE] '><Link to={`/jobDetails/${id}`}>View Details</Link> </button>

        </div>

    );
};

export default AppliedJobsPage;