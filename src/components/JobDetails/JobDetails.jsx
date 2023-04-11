import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faDollar, faLocationPin, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import vector1 from '../../assets/All Images/Vector.png'
import vector2 from '../../assets/All Images/Vector-1.png'
import { addToDb } from '../../../utilities/fakedb';

const JobDetails = () => {
    const DetailsData = useLoaderData()
    const { jobId } = useParams()
    const [jobDetails, setJobDetails] = useState({})
    useEffect(() => {
        const jobData = DetailsData.find((item) => item.id === jobId);
        setJobDetails(jobData)
    }, [DetailsData, jobId])
    const applyBtnHandler = (jobId) => {
        addToDb(jobId)
        
    }
    return (
        <div>
            <header className='details-header md:flex justify-between items-center'>
                <img src={vector1} alt="" />
                <h1 className='text-center text-3xl font-bold'>Job Details</h1>
                <img src={vector2} alt="" />
            </header>
            <section className='md:flex justify-between gap-5 my-28 '>
                <div className='w-3/5'>
                    <p className='text-[#757575] text-lg my-5'><span className='text-lg text-black font-bold '>Job Description: </span>{jobDetails.description}</p>
                    <p className='text-[#757575] text-lg my-5'><span className='text-lg text-black font-bold '>Job Responsibility: </span> {jobDetails.responsibility}</p>
                    <h5 className='text-lg font-bold my-5 '>Educational Requirement </h5>
                    <p className='text-[#757575] my-5 text-lg'>{jobDetails.eduRequirement}</p>
                    <h6 className='text-lg font-bold my-5 '>Experience </h6>
                    <p className='text-[#757575] text-lg my-5 '>{jobDetails.experience}</p>
                </div>
                <div className='rightContainer p-8 rounded-lg'>
                    <div >
                        <h4 className='text-xl font-bold my-3'>Job Details</h4>
                        <hr className='my-3' />
                        <p className='my-3 text-[#757575] text-lg'><FontAwesomeIcon className='fonticon' icon={faDollar} />  <span className='text-lg font-bold text-black'>Salary :</span> {jobDetails.salary}</p>
                        <p className='my-3 text-[#757575] text-lg'><FontAwesomeIcon className='fonticon' icon={faCalendar} />  <span className='text-lg font-bold  text-black'>Job Title  : </span >{jobDetails.jobTitle}</p>
                        <h4 className='text-xl font-bold my-3'>Contact Information</h4>
                        <hr className='my-3' />
                        <p className='my-3 text-[#757575] text-lg'><FontAwesomeIcon className='fonticon' icon={faPhone} />
                            <span className='text-lg font-bold  text-black'> Phone : </span>{jobDetails.phone}</p>
                        <p className='my-3 text-[#757575] text-lg'><FontAwesomeIcon className='fonticon' icon={faMailBulk} />
                            <span className='text-lg font-bold  text-black'> Email : </span>{jobDetails.email}</p>
                        <p className='my-3 text-[#757575] text-lg'><FontAwesomeIcon className='fonticon' icon={faLocationPin} />
                            <span className='text-lg  font-bold text-black'> Address : </span>{jobDetails.address}</p>
                    </div>
                    <button onClick={() => applyBtnHandler(jobId) } className='rounded-lg px-10 py-5 my-7 w-full  text-white text-lg font-semibold  bg-[#7E90FE] '>APPLY NOW</button>
                </div>
            </section>


        </div>
    );
};

export default JobDetails;