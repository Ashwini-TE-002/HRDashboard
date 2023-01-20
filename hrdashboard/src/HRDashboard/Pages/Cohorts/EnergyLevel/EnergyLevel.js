import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../Cohorts.moudle.css'
// import './Cohorts.moudle.css'

export default function EnergyLevel(props) {

    const percentage = props.data;

    return (
        <div className='energyPieChart'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Energetic</h6>
            </div>
            {/* react chat */}
            <div>
                <div className='energyProgressbar'>
                    <div className='energyProgressbarCharts mt-5'>
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                                textColor: "red",
                                pathColor: "#FF3A29",
                                trailColor: "#d6d6d6",
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '27px',
                                pathTransitionDuration: 0.5,
                            })}
                        />
                    </div>
                </div>
                <div className='flex mt-3 justify-content-center'>
                    <div className='flex'>
                        <div className='Energetic'></div>
                        <span>Energetic</span>
                    </div>
                    <div className='flex ml-2'>
                        <div className='Lethargy'></div>
                        <span>Lethargy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

