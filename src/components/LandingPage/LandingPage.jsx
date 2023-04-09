import React from 'react';
import Header from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const LandingPage = () => {
    return (
        <div>
            <Header></Header>
           <JobCategory></JobCategory>
           <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default LandingPage;