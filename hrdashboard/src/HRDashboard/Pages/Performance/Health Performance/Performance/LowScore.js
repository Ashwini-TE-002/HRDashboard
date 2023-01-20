import React from 'react'
// import './LowScore.moudle.css'
import { RadialBarChart, RadialBar } from "recharts";

export default function LowScore(props) {

    const data = [
        {
            name: "Low Score",
            value: props.lowscoreData,
            // pv: 10,
            fill: "#FA3B4E"
        },
    ];

    return (
        <div className='flex align-items-center'>
            <RadialBarChart
                width={70}
                height={80}
                cx={30}
                cy={40}
                innerRadius={25}
                outerRadius={80}
                barSize={9}
                data={data}
            >
                <RadialBar
                    minAngle={15}
                    // label={{ position: "insideStart", fill: "#fff" }}
                    background
                    clockWise
                    dataKey="value"
                />

            </RadialBarChart>
            <div>
                <span className='redialScore-label'>Low Score</span>
                <h6 className='redialScore'>{props.lowscoreData}%</h6>
            </div>
        </div>
    )
}
