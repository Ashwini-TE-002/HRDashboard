import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import './TopTeams.moudle.css'
import { IoMdArrowDropup } from 'react-icons/io'
import { Container, Col, Row } from 'react-bootstrap';

export default function TopTeams() {
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <div className='topTeams_box'>
                            <div className='hrDashboard-HeaddingTxt'>
                                <h6>Top Teams</h6>
                            </div>
                            <div>
                                <div>
                                    <div className=' TurnoverRateDatas'>
                                        <span>UI UX Team</span>
                                        <div className='topTeams-progressbar'>
                                            <div className=' items-center justify-content-end'>
                                                <IoMdArrowDropup />
                                                <span>20%</span>
                                                <span>Since last month</span>
                                            </div>
                                            <ProgressBar baseBgColor='#DAF5EC' bgColor='#08BE80' labelSize={0} borderRadius={3} completed={80} />
                                        </div>
                                        <span className='Percentages'>80%</span>
                                    </div>

                                    <div className=' mt-4 TurnoverRateDatas'>
                                        <span>UI UX Team</span>
                                        <div className='topTeams-progressbar'>
                                            <div className=' items-center justify-content-end'>
                                                <IoMdArrowDropup />
                                                <span>20%</span>
                                                <span>Since last month</span>
                                            </div>
                                            <ProgressBar baseBgColor='#DAF5EC' bgColor='#08BE80' labelSize={0} borderRadius={3} completed={80} />
                                        </div>
                                        <span className='Percentages'>80%</span>
                                    </div>

                                    <div className=' mt-4 TurnoverRateDatas'>
                                        <span>UI UX Team</span>
                                        <div className='topTeams-progressbar'>
                                            <div className=' items-center justify-content-end'>
                                                <IoMdArrowDropup />
                                                <span>20%</span>
                                                <span>Since last month</span>
                                            </div>
                                            <ProgressBar baseBgColor='#DAF5EC' bgColor='#08BE80' labelSize={0} borderRadius={3} completed={80} />
                                        </div>
                                        <span className='Percentages'>80%</span>
                                    </div>

                                    <div className=' mt-4 TurnoverRateDatas'>
                                        <span>UI UX Team</span>
                                        <div className='topTeams-progressbar'>
                                            <div className=' items-center justify-content-end'>
                                                <IoMdArrowDropup />
                                                <span>20%</span>
                                                <span>Since last month</span>
                                            </div>
                                            <ProgressBar baseBgColor='#DAF5EC' bgColor='#08BE80' labelSize={0} borderRadius={3} completed={80} />
                                        </div>
                                        <span className='Percentages'>80%</span>
                                    </div>
                                    <div className=' mt-4 TurnoverRateDatas'>
                                        <span>UI UX Team</span>
                                        <div className='topTeams-progressbar'>
                                            <div className=' items-center justify-content-end'>
                                                <IoMdArrowDropup />
                                                <span>20%</span>
                                                <span>Since last month</span>
                                            </div>
                                            <ProgressBar baseBgColor='#DAF5EC' bgColor='#08BE80' labelSize={0} borderRadius={3} completed={80} />
                                        </div>
                                        <span className='Percentages'>80%</span>
                                    </div>

                                    <div className=' mt-4 TurnoverRateDatas'>
                                        <span>UI UX Team</span>
                                        <div className='topTeams-progressbar'>
                                            <div className=' items-center justify-content-end'>
                                                <IoMdArrowDropup />
                                                <span>20%</span>
                                                <span>Since last month</span>
                                            </div>
                                            <ProgressBar baseBgColor='#DAF5EC' bgColor='#08BE80' labelSize={0} borderRadius={3} completed={80} />
                                        </div>
                                        <span className='Percentages'>80%</span>
                                    </div>

                                    <div className=' mt-4 TurnoverRateDatas'>
                                        <span>UI UX Team</span>
                                        <div className='topTeams-progressbar'>
                                            <div className=' items-center justify-content-end'>
                                                <IoMdArrowDropup />
                                                <span>20%</span>
                                                <span>Since last month</span>
                                            </div>
                                            <ProgressBar baseBgColor='#DAF5EC' bgColor='#08BE80' labelSize={0} borderRadius={3} completed={80} />
                                        </div>
                                        <span className='Percentages'>80%</span>
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
