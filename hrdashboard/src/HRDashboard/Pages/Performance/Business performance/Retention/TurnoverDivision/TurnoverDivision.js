import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlineCaretDown } from 'react-icons/ai'
import ProgressBar from "@ramonak/react-progress-bar";
import './turnoverDivision.moudle.css'


const TurnoverDivision = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <div className='topTeams_box'>
                            <div className='hrDashboard-HeaddingTxt'>
                                <h6>Turnover Rate by Division</h6>
                            </div>
                            <div>
                                <div>
                                    <div className='TurnoverRateDatas'>
                                        <span className='Percentages'>UI UX Team</span>
                                        <div className='topTeams-progressbar'>
                                            <div className='flex items-center justify-content-end'>
                                                <AiOutlineCaretDown style={{ color: '#FA3B4E' }} />
                                                <span>20%</span>
                                                <span>Since last month</span>
                                            </div>
                                            <ProgressBar baseBgColor='#fdb4bc' bgColor='#FA3B4E' borderRadius={3} completed={20} />
                                        </div>
                                        <span className='Percentages'>80%</span>
                                    </div>

                                    <div className='mt-4 TurnoverRateDatas'>
                                        <span className='Percentages'>UI UX Team</span>
                                        <div className='topTeams-progressbar'>
                                            <div className='flex items-center justify-content-end'>
                                                <AiOutlineCaretDown style={{ color: '#FA3B4E' }} />
                                                <span>20%</span>
                                                <span>Since last month</span>
                                            </div>
                                            <ProgressBar baseBgColor='#fdb4bc' bgColor='#FA3B4E' borderRadius={3} completed={16} />
                                        </div>
                                        <span className='Percentages'>80%</span>
                                    </div>

                                    <div className='mt-4 TurnoverRateDatas'>
                                        <span className='Percentages'>UI UX Team</span>
                                        <div className='topTeams-progressbar'>
                                            <div className='flex items-center justify-content-end'>
                                                <AiOutlineCaretDown style={{ color: '#FA3B4E' }} />
                                                <span>20%</span>
                                                <span>Since last month</span>
                                            </div>
                                            <ProgressBar baseBgColor='#fdb4bc' bgColor='#FA3B4E' borderRadius={3} completed={18} />
                                        </div>
                                        <span className='Percentages'>80%</span>
                                    </div>

                                    <div className='mt-4 TurnoverRateDatas'>
                                        <span className='Percentages'>UI UX Team</span>
                                        <div className='topTeams-progressbar'>
                                            <div className='flex items-center justify-content-end'>
                                                <AiOutlineCaretDown style={{ color: '#FA3B4E' }} />
                                                <span>20%</span>
                                                <span>Since last month</span>
                                            </div>
                                            <ProgressBar baseBgColor='#fdb4bc' bgColor='#FA3B4E' borderRadius={3} completed={13} />
                                        </div>
                                        <span className='Percentages'>80%</span>
                                    </div>
                                    <div className='mt-4 TurnoverRateDatas'>
                                        <span className='Percentages'>UI UX Team</span>
                                        <div className='topTeams-progressbar'>
                                            <div className='flex items-center justify-content-end'>
                                                <AiOutlineCaretDown style={{ color: '#FA3B4E' }} />
                                                <span>20%</span>
                                                <span>Since last month</span>
                                            </div>
                                            <ProgressBar baseBgColor='#fdb4bc' bgColor='#FA3B4E' borderRadius={3} completed={15} />
                                        </div>
                                        <span className='Percentages'>80%</span>
                                    </div>

                                    <div className='mt-4 TurnoverRateDatas'>
                                        <span className='Percentages'>UI UX Team</span>
                                        <div className='topTeams-progressbar'>
                                            <div className='flex items-center justify-content-end'>
                                                <AiOutlineCaretDown style={{ color: '#FA3B4E' }} />
                                                <span>20%</span>
                                                <span>Since last month</span>
                                            </div>
                                            <ProgressBar baseBgColor='#fdb4bc' bgColor='#FA3B4E' borderRadius={3} completed={9} />
                                        </div>
                                        <span className='Percentages'>80%</span>
                                    </div>

                                    <div className='mt-4 TurnoverRateDatas'>
                                        <span className='Percentages'>UI UX Team</span>
                                        <div className='topTeams-progressbar'>
                                            <div className='flex items-center justify-content-end'>
                                                <AiOutlineCaretDown style={{ color: '#FA3B4E' }} />
                                                <span>20%</span>
                                                <span>Since last month</span>
                                            </div>
                                            <ProgressBar baseBgColor='#fdb4bc' bgColor='#FA3B4E' borderRadius={3} completed={8} />
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

export default TurnoverDivision