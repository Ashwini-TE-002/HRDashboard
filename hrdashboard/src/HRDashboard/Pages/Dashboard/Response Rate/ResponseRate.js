import React from 'react'
import './ResponseRate.moudle.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { TiArrowSortedUp } from 'react-icons/ti'
import { TiArrowSortedDown } from "react-icons/ti"

export default function ResponseRate(teamResponse) {
    const teamResponseData = teamResponse.teamResponse;
    const percentage = teamResponseData?.response;

    return (
        <div className='ResponseRate_sectionWrap mt-4'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Response Rate</h6>
            </div>
            <div className='ResponseRate_Ratio flex justify-center flex-column'>
                <CircularProgressbar value={percentage} text={percentage}
                    styles={buildStyles({
                        textColor: "#08BE80",
                        pathColor: "#08BE80",
                        trailColor: "transparent",
                        rotation: 0.25,
                        strokeLinecap: 'butt',
                        textSize: '27px',
                        pathTransitionDuration: 0.5,
                    })}
                />
            </div>
            <div>
                <div className='ResponseRatio-contbox'>
                    {
                        (teamResponseData?.response_status === "increased") ? <TiArrowSortedUp size={20} color={'#49DEB2'} />
                            : <TiArrowSortedDown size={30} color={'#FA3B4E'} />

                    }

                    <span className='energy_score'>{teamResponseData?.response_percentage}</span>
                    <span>Since last month</span>
                </div>
            </div>
            <div>
                <span className='RatioTxt'>{teamResponseData?.total_responded_count} out of {teamResponseData?.total_team_count} employees have responded.</span>
            </div>
        </div>

    )
}