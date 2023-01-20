import React from 'react'
// import { PieChart } from "react-minimal-pie-chart";
import './ScoreofCompliance.moudle.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function ScoreofCompliance(complianceScore) {
    const percentage = complianceScore.complianceScore;

    return (
        <div>
            <CircularProgressbar value={percentage * 10} text={percentage}
                styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'butt',
                    textSize: '27px',
                    pathTransitionDuration: 0.5,
                    pathColor: `#08BE80, ${percentage * 10})`,
                    textColor: '#08BE80',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#08BE80',
                })}
            />
        </div>
    )
}