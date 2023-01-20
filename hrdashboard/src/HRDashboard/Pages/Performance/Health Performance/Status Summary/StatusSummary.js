import React from 'react'
import './StatusSummary.moudle.css'
import { LineChart, Line } from 'recharts';

export default function StatusSummary(props) {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
    ];

    return (
        <div className='StatusSummary-Graph'>
            <div className="StatusSummaryTxt">
                <h2>Status Summary</h2>
                <span>Respondents</span>
                <h1>{props.performanceData.total_emp_responded}</h1>
            </div>
            <LineChart width={100} height={100} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#ffffff" strokeWidth={2} />
            </LineChart>
        </div>
    )
}
