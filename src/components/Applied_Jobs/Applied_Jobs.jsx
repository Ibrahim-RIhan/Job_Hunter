import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJobsPage from '../AppliedJobsPage/AppliedJobsPage';
import vector1 from '../../assets/All Images/Vector.png'
import vector2 from '../../assets/All Images/Vector-1.png'

const Applied_Jobs = () => {
    const [cart, setCart] = useState([])
    const loaderData = useLoaderData()
    useEffect(() => {
        let newArray = []
        const storageData = getShoppingCart()
        for (const id in storageData) {
            const appliedJobs = loaderData.find(job => job.id === id)
            if (appliedJobs) {
                newArray.push(appliedJobs)
            }
            setCart(newArray)
        }
    }, [])



    return (
        <div>
            <header className='details-header md:flex justify-between items-center'>
                <img src={vector1} alt="" />
                <h1 className='text-center text-3xl font-bold'>AppliedJobs</h1>
                <img src={vector2} alt="" />
            </header>
            <div className='w-96'>
            {
                cart.map(job => <AppliedJobsPage
                    key={job.id}
                    appliedJobs={job}

                ></AppliedJobsPage>)
            }
            </div>
        </div>
    );
};

export default Applied_Jobs;