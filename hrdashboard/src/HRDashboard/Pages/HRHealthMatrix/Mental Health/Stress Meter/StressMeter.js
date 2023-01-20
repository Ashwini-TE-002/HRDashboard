import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './StressMeter.moudle.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useMediaQuery } from 'react-responsive';

const StressMeter = (props) => {
    // const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });

    const percentage = props.data.stress_percent;
    return (
        <section>
            <Container>
                <Row>
                    <Col className='stressMeter-Col'>
                        <div className='stressMeter'>
                            <div className='hrDashboard-HeaddingTxt'>
                                <h6>Stress Meter</h6>
                            </div>
                            {/* content */}
                            <div>
                                {/* range meter */}
                                <div className='circularProgressdiv '>
                                    <div className='circularProgressdiv-processorbar'>
                                        <CircularProgressbar value={percentage} text={percentage}
                                            styles={{
                                                rotation: 0.25,
                                                strokeLinecap: 'butt',
                                                textSize: '30px',
                                                pathTransitionDuration: 0.5,
                                                pathColor: `#3ECE80, ${percentage / 100})`,
                                                textColor: '#08BE80',
                                                trailColor: '#d6d6d6',
                                                // backgroundColor: '#08BE80',
                                                background: "#3ECE80",

                                            }}
                                        />
                                    </div>
                                    <div className='stressMeterContent'>
                                        <div>
                                            <button className='stressStatus'>{props.data.stress_mood}</button>
                                        </div>
                                        <div className='mt-4'>
                                            <h6>
                                                {props.data.stress_percent}% people feel {props.data.stress_mood} working here.
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default StressMeter