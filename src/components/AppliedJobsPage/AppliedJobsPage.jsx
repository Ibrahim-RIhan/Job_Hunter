import React from 'react';
import { Link } from 'react-router-dom';


const AppliedJobsPage = ({ appliedJobs }) => {
    const { id, img, jobTitle, company, type1, type2, salary, location } = appliedJobs
    return (
        <div className='flex justify-between gap-24'>
            <div className='flex justify-between gap=10'>
                <img src={img} alt="" />
                <div>
                    <h3>{jobTitle}</h3>
                    <p>{company}</p>
                    <div>
                        <button>{type1}</button>
                        <button>{type2}</button>
                    </div>
                    <div>
                        <p>{location}</p>
                        <p>Salary {salary}</p>
                    </div>
                </div>
            </div>
            <button className='rounded-lg px-5 py-4 text-white text-lg font-semibold  bg-[#7E90FE] '><Link to={`/jobDetails/${id}`}>View Details</Link> </button>

        </div>

    );
};

export default AppliedJobsPage;