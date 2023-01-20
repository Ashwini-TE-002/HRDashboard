import React from 'react'
import './SidebarComponent.moudle.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ProgressBar from "@ramonak/react-progress-bar";
import { useMediaQuery } from 'react-responsive'

export default function SidebarHealthScore(props) {

    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });

    return (
        <div className='mt-3'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Health score</h6>
            </div>
            <div className='ProgressbarEngagementScore'>
                <CircularProgressbar value={(props.data.team_health_score / 10) * 100} text={props.data.team_health_score + " / " + 10}
                    styles={buildStyles({
                        textColor: "#08BE80",
                        pathColor: "#FA3B4E",
                        trailColor: "#FDADB5",
                        rotation: 0.25,
                        strokeLinecap: 'butt',
                        textSize: '27px',
                        pathTransitionDuration: 0.5,
                    })}
                />
            </div>
            <div className='eventsScoreTxt'>
                <h6>Focus on</h6>
                <div>
                    {
                        (props.data.team_focus_on.length > 0) ?
                            props.data.team_focus_on.map((item, i) =>
                                <button className="btn-events mr-2" key={i}>{item}</button>
                            )
                            : ""
                    }
                </div>
                <div className='mt-3 flex align-items-center'>
                    <ProgressBar labelSize={0} width={isMobileDevice ? 110 : 210} height={18} baseBgColor='#FFE5D3' bgColor='#FF3A29' borderRadius={2}
                        completed={(props.data.team_health_score / 10) * 100} />
                    <span className='ProgressBarLabel'>{props.data.team_health_score}</span>
                </div>
            </div>
        </div>
    )
}
