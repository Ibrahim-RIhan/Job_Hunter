import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import Applied_Jobs from './components/Applied_Jobs/Applied_Jobs';
import LandingPage from './components/LandingPage/LandingPage';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>

      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('statisticsData.json')

      },

      {
        path: "/applied-jobs",
        element: <Applied_Jobs></Applied_Jobs>,
        loader: () => fetch('/JobsData.json')

      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/jobDetails/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch('/JobsData.json')

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
