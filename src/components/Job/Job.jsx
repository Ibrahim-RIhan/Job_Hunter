import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import JobDetails from '../JobDetails/JobDetails';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
   
    const { id, img, location, jobTitle, salary, company, type1, type2 } = job;
    return (
        <div className=" grid  items-center w-full bg-base-100 shadow">
            <figure className=" ">
                <img src={img} className="px-10" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{jobTitle}</h2>
                <p className='text-lg font-semibold text-[#757575]'>{company}</p>
                <div className='flex gap-4 my-3'>
                    <button className='btn-outline btn btn-info '>{type1}</button>
                    <button className='btn-outline btn  btn-info '>{type2}</button>
                </div>
                <div className='flex gap-5 text-lg text-[#757575] font-medium my-3'>
                    <p><FontAwesomeIcon icon={faLocationPin} />     {location}</p>
                    <p><FontAwesomeIcon icon={faDollar} />   Salary {salary}</p>
                </div>
                <div className="card-actions">
                <button className='rounded-lg px-5 py-4 text-white text-lg font-semibold  bg-[#7E90FE] '><Link to={`/jobDetails/${id}`}>View Details</Link> </button>
                  
                </div>
            </div>
        </div>
    );
};

export default Job;