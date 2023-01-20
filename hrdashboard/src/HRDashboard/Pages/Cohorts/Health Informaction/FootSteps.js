import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function FootSteps(props) {


    return (
        <div className='p-4'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Average Foot steps</h6>
            </div>

            {/* <Line options={options} width={30} height={16} data={data} /> */}
            <LineChart
                width={500}
                height={300}
                data={props.data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical="" stroke="#fff" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip contentStyle={{ backgroundColor: "#006CFF", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={true} />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="value" stroke="#006CFF" strokeWidth="2" dot={{ fill: "#006CFF", stroke: "#006CFF", strokeWidth: 2, r: 2 }} activeDot={{ fill: "#006CFF", stroke: "#006CFF", strokeWidth: 3, r: 10 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
        </div>
    )
}
