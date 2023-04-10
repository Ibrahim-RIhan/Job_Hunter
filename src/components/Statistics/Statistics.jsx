import React from 'react';
import './Statistics.css'
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const data = useLoaderData()
    return (
        <div className='overflow-x-hidden' >
            <h1 className='text-5xl font-bold my-10 text-center mb-5 '>My Assignment marks data in area Chart</h1>
            <hr className='mb-10' />
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 30,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis dataKey="score" />
                        <Tooltip />
                        <Area type="monotone" dataKey="score" stroke="#ff0000" fill=" #ffff66" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default Statistics;