import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti'
import './EngagementScore.moudle.css'

export default function EngagementScoredetails(props) {

    const scoreDetails = props.scoreDetails;
    const benchmarkDetails = props.benchmarkDetails;
    return (
        <Col className='col-lg-5 col-md-12 col-sm-12'>
            <Row className='flex justify-content-evenly'>
                <Col className='EngagementScore-Wrapper'>
                    <div className='EngagementScoreTxt text-center'>
                        <h4>Engagement score</h4>
                    </div>
                    <div className='text-center'>
                        <div className='EngagementScoreDetails flex justify-content-center align-items-baseline'>
                            <h1>{scoreDetails.engagement_score}</h1>
                        </div>
                        <div>
                            <div>
                                {
                                    (scoreDetails.engagement_status === "increased") ?
                                        <TiArrowSortedUp color='#FA3B4E' size={20} />
                                        : <TiArrowSortedDown color='#FA3B4E' size={20} />
                                }

                                <span>{scoreDetails.engagement_percentage}</span>
                            </div>
                            <span style={{ "font-size": "10px" }}>Since last month</span>
                        </div>
                    </div>
                </Col>
                <Col className='EngagementScore-Wrapper'>
                    <div className='EngagementScoreTxt text-center'>
                        <h4>Industry bench mark</h4>
                    </div>
                    <div className='text-center'>
                        <div className='benchmark flex justify-content-center align-items-baseline'>
                            <h1>{benchmarkDetails.engagement_score}</h1>
                            {/* <span>/ 10</span> */}
                        </div>
                        <div>
                            <div>
                                {
                                    (benchmarkDetails.engagement_status === "increased") ?
                                        <TiArrowSortedUp color='#FA3B4E' size={20} />
                                        : <TiArrowSortedDown color='#FA3B4E' size={20} />
                                }

                                <span>{benchmarkDetails.engagement_percentage}</span>
                            </div>
                            {/* <span>Since last month</span> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}
