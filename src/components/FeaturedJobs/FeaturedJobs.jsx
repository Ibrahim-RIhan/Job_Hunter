import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
   const [jobs, setJobs] =useState([])
    useEffect(() => {
        fetch('JobsData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    },[])
    return (
        <div className='my-10'>
            <h1 className='text-5xl font-bold text-center'>Featured Jobs</h1>
            <p className='text-center text-[#757575] my-5 text-lg '>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2  mt-20 gap-8 py-5 '>

                {
                    jobs.map(job => <Job
                    key={job.id}
                    job={job}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;