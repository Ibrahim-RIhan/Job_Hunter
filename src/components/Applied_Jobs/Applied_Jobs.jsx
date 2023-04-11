import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJobsPage from '../AppliedJobsPage/AppliedJobsPage';
import vector1 from '../../assets/All Images/Vector.png'
import vector2 from '../../assets/All Images/Vector-1.png'

const Applied_Jobs = () => {

    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);


    const JobsData = useLoaderData()
    useEffect(() => {
        let newArray = [];
        const storageData = getShoppingCart()

        for (const id in storageData) {
            const appliedJobs = JobsData.find(job => job.id === id);
            if (appliedJobs) {
                newArray.push(appliedJobs);
            }
        }

        setJobs(newArray)
        setFilteredJobs(newArray)
    }, [])

    const handleFilterChange = (event) => {
        const filterValue = event.target.value;
        if (filterValue === 'Remote') {
            setFilteredJobs(jobs.filter((job) => job.type1 === 'Remote'));
        } else if (filterValue === 'Onsite') {
            setFilteredJobs(jobs.filter((job) => job.type1 === 'Onsite'));
        } else {
            setFilteredJobs(jobs);
        }
    }



    // const remoteButtonHandler = () => {
    //     const filteredData = filteredJobs.filter((jobs) => jobs.type1 === 'Remote');
    //     setJobs(filteredData)
    // }
    // const onSiteButtonHandler = () => {
    //     const filteredData = filteredJobs.filter((jobs) => jobs.type1 === 'Onsite');
    //     setJobs(filteredData)
    // }

    return (
        <div>
            <header className='details-header md:flex justify-between mb-16 items-center'>
                <img src={vector1} alt="" />
                <h1 className='text-center text-3xl font-bold'>AppliedJobs</h1>
                <img src={vector2} alt="" />
            </header>
            <div className='  absolute end-16 text-2xl p-5 bg-slate-300 '>
                <select className='bg-slate-300' onChange={handleFilterChange}>
                    <option value='All Jobs'>All Jobs</option>
                    <option value='Remote'>Remote</option>
                    <option value='Onsite'>Onsite</option>
                </select>
            </div>

            <div className=''>
                {
                    filteredJobs.map(job => <AppliedJobsPage
                        key={job.id}
                        appliedJobs={job}
                    ></AppliedJobsPage>)
                }
            </div>
        </div>
    )
};


export default Applied_Jobs;