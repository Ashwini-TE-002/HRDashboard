import React from 'react'
import './PerformanceComponent.moudle.css'
import { RadialBarChart, RadialBar } from "recharts";
import LowScore from './LowScore';

const PerformanceComponent = (props) => {

    console.log(props)
    const data = [
        {
            name: "topScore",
            value: props.performanceData.top_performance_score,
            // pv: 10,
            fill: "#106CF6"
        },
    ];

    return (
        <div className='Perfo-Box'>
            <div className='Perfo-text'>
                <h1>Performance</h1>
            </div>
            <div className='flex justify-content-between align-items-center mt-3'>
                <div className='flex align-items-center'>
                    <RadialBarChart
                        width={90}
                        height={90}
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
                        <span className='redialScore-label'>Top Score</span>
                        <h6 className='redialScore'>{props.performanceData.top_performance_score}%</h6>
                    </div>
                </div>
                <div className='flex align-items-center'>
                    <LowScore lowscoreData={props.performanceData.low_performance_score} />
                </div>
            </div>
        </div>
    )
}

export default PerformanceComponent