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
import Applied_Jobs from './components/Applied_Jobs/Applied_Jobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children :[
    
      {
        path : "/statistics",
        element : <Statistics></Statistics>
      
      },
      {
        path : "/applied-jobs",
        element : <Applied_Jobs></Applied_Jobs>
      
      },
      {
        path : "/blogs",
        element : <Applied_Jobs></Applied_Jobs>,
      
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
