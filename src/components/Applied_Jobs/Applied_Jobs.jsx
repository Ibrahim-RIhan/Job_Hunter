import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJobsPage from '../AppliedJobsPage/AppliedJobsPage';
import vector1 from '../../assets/All Images/Vector.png'
import vector2 from '../../assets/All Images/Vector-1.png'

const Applied_Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    let newArray = [];
    const storageData = getShoppingCart()
    const JobsData = useLoaderData()

    useEffect(() => {
        for (const id in storageData) {
            const appliedJobs = JobsData.find(job => job.id === id);
            if (appliedJobs) {
                newArray.push(appliedJobs);
            }
        }
        setJobs(newArray)
        setFilteredJobs(newArray)
    }, [])
    


    const remoteButtonHandler = () => {
        const filteredData = filteredJobs.filter((jobs) => jobs.type1 === 'Remote');
        setJobs(filteredData)
    }
    const onSiteButtonHandler = () => {

        const filteredData = JobsData.filter((jobs) => jobs.type1 === 'Onsite');
        setJobs(filteredData)
    }







    return (
        <div>
            <header className='details-header md:flex justify-between mb-16 items-center'>
                <img src={vector1} alt="" />
                <h1 className='text-center text-3xl font-bold'>AppliedJobs</h1>
                <img src={vector2} alt="" />
            </header>
            <div className=' flex gap-5 absolute end-10 '>
                <button onClick={() => { remoteButtonHandler() }} className="btn btn-outline btn-error relative">Remote</button>
                <button onClick={() => { onSiteButtonHandler() }} className="btn btn-outline btn-error relative">Onsite</button>
            </div>

            <div className=''>
                {
                    jobs.map(job => <AppliedJobsPage
                        key={job.id}
                        appliedJobs={job}

                    ></AppliedJobsPage>)
                }
            </div>
        </div>
    )
};


export default Applied_Jobs;