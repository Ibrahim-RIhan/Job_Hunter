import React from 'react';
import { getShoppingCart } from '../../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Applied_Jobs = () => {
    const data = getShoppingCart()
    const loaderData = useLoaderData()
 
    console.log(data);
 
    return (
        <div>
            <h1>Applied Jobs Page </h1>
        </div>
    );
};

export default Applied_Jobs;