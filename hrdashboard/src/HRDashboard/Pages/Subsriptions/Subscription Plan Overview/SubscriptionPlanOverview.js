import React, { useState } from 'react'
import '../Subsriptions.moudle.css'
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';

export default function SubscriptionPlanOverview(props) {

    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });

    return (
        <div className='SubscriptionPlan'>
            <div className='flex align-items-center justify-content-between'>
                <div className='hrDashboard-HeaddingTxt'>
                    <h6>Plan Overview</h6>
                </div>
            </div>
            <div className='flex justify-content-end mt-2 mb-3 mr-2'>
                <div className='flex align-items-center mr-4'>
                    <div className='greencolor'></div>
                    <span>Yes</span>
                </div>
                <div className='flex align-items-center'>
                    <div className='redcolor'></div>
                    <span>No</span>
                </div>
            </div>

            <div>
                <ResponsiveContainer height={265} width={isMobileDevice ? 325 : 650}>
                    <BarChart
                        // width={650}
                        height={265}
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip cursor={false} />
                        {/* <Legend /> */}
                        <Bar dataKey="yes" barSize={8} fill="#49DEB2" background={{ fill: '#eee' }} radius={20} />
                        <Bar dataKey="no" barSize={8} fill="#FA3B4E" radius={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
