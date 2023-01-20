import React from 'react'
import '../Energy level/EnergyLevel.moudle.css'
import Settings from '../../../../../assets/HrDahsboard/Settings.png'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ArrowDown from '../../../../../assets/HrDahsboard/DownArrow.png'
import { useNavigate } from 'react-router-dom';

export default function RetentionCompo() {

    const EnergyValue = 60;

    // navigate
    let goToRetention = useNavigate();
    function goToRetentionPage(e) {
        e.preventDefault();
        let pathUrl = "/Retention"
        goToRetention(pathUrl)
    }

    return (
        <div className='progressEnergy-pBar' onClick={goToRetentionPage}>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Retention</h6>
            </div>
            {/* <div className='flex'>
                <div className='energyProgressBar'>
                    <CircularProgressbar value={EnergyValue} text={Settings}

                        styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: 'butt',
                            textSize: '10px',
                            pathTransitionDuration: 0.5,
                            pathColor: `#08BE80, ${EnergyValue / 100})`,
                            textColor: '#08BE80',
                            trailColor: '#d6d6d6',
                            backgroundColor: '#08BE80',
                        })} />
                </div>
                <div className='progressBar_txt'>
                    <div className='progressbar-BoxTxt'>
                        <span>Average Turnover rate</span>
                        <h1>5%</h1>
                    </div>
                    <div>
                        <img src={ArrowDown} className="avrageProScore" alt='/' />
                        <span className='energy_score'>20%</span>
                        <span>Since last month</span>
                    </div>
                </div>
            </div> */}

            <Button>Check</Button>
        </div>
    )
}
