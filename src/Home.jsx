import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container mx-auto mt-12 '>
            <Navbar></Navbar>
            <Outlet></Outlet>
         
        </div>
    );
};

export default Home;