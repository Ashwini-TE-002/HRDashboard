import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../Cohorts.moudle.css'

export default function AlchoholConsumers(props) {

    return (
        <div className='AlchoholChat'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Smoking & Alchohol consumers</h6>
            </div>
            {/* react chat */}
            <div>
                <div className='m-0'>
                    <div className='AlchoholConsumers'>
                        <CircularProgressbar
                            value={props.alcoholData}
                            text={`${props.alcoholData}%`}
                            styles={buildStyles({
                                textColor: "red",
                                pathColor: "#8956F8",
                                trailColor: "#D7C5FC",
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '27px',
                                pathTransitionDuration: 0.5,
                            })}
                        />
                    </div>
                    <div className='flex mt-3 justify-content-center'>
                        <div className='Alchohol'></div>
                        <span>{props.alcoholData}% Alchohol</span>
                    </div>
                </div>
                <div className='mt-3'>
                    <div className='AlchoholConsumers'>
                        <CircularProgressbar
                            value={props.smokingData}
                            text={`${props.smokingData}%`}
                            styles={buildStyles({
                                textColor: "red",
                                pathColor: "#FF85C0",
                                trailColor: "#FFD5E9",
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '27px',
                                pathTransitionDuration: 0.5,
                            })}
                        />
                    </div>
                    <div className='flex mt-3 justify-content-center'>
                        <div className='Alchohol'></div>
                        <span>{props.smokingData}% Alchohol</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
