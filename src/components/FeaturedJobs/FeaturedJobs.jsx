import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [numJobs, setNumJobs] = useState(4);
    const jobsToShow = jobs.slice(0, numJobs);

    const handleSeeAllClick = () => {
        setNumJobs(jobs.length);
    }

    useEffect(() => {
        fetch('JobsData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className='my-10 text-center'>
            <h1 className='text-5xl font-bold text-center'>Featured Jobs</h1>
            <p className='text-center text-[#757575] my-5 text-lg '>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2  mt-20 gap-8 py-5 '>

                {
                    jobsToShow.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            {numJobs < jobs.length && (
               
                <button onClick={handleSeeAllClick}  className='rounded-lg px-10 py-5 my-7  text-white text-lg font-semibold  bg-[#7E90FE] '>See all jobs </button>
            )}
            
        </div>
    );
};

export default FeaturedJobs;