import React, { useState } from 'react'
import './EngagementScore.moudle.css'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { TiArrowSortedDown } from 'react-icons/ti'
import { TiArrowSortedUp } from "react-icons/ti"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EngagementScoredetails from './EngagementScoredetails';
import { GrClose } from 'react-icons/gr'
import EngagementScoreGraph from './EngagementScoreGraph';
import EngagementVaries from './EngagementVaries';
import { Row } from 'react-bootstrap';

export default function EngagementScore(teamEngagement) {
    const teamEngagementData = teamEngagement.teamEngagement;

    const percentage = teamEngagementData.engagement;

    // modelpopup
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);

        // This needs to be made dynamic and change the URL
        // var config = {
        //     method: 'get',
        //     url: '',
        //     headers: {}
        // };

        // axios(config)
        //     .then(function (response) {

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

        const response = {
            "success": true,
            "data": {
                "engagement_score_data": {
                    "engagement_score": "7.4",
                    "engagement_percentage": "0.2",
                    "engagement_status": "increased"
                },
                "last_three_months_engagement_score": {
                    "engagement_score": "7.4",
                    "engagement_percentage": "0.2",
                    "engagement_status": "increased"
                },
                "team_monthly_engagement_graph": [{
                    "name": "Jan",
                    "people": 4
                }, {
                    "name": "Feb",
                    "people": 3
                }, {
                    "name": "Mar",
                    "people": 4
                }, {
                    "name": "Apr",
                    "people": 2
                }, {
                    "name": "May",
                    "people": 5
                }],
                "team_engagement_graph": [{
                    "name": "Fitness",
                    "value": 5.3
                }, {
                    "name": "Mental Wellbeing",
                    "value": 3.2
                }, {
                    "name": "Nutrition",
                    "value": 5.3
                }
                    // , {
                    //     "name": "Nutrition",
                    //     "value": 2.80
                    // }, {
                    //     "name": "General",
                    //     "value": 1.90
                    // }
                ]

            },
            "message": "Success"
        }
        const scoreDetails = response.data.engagement_score_data;
        const benchmarkDetails = response.data.last_three_months_engagement_score;
        const monthlyGraphData = response.data.team_monthly_engagement_graph;
        const engagementGraphData = response.data.team_engagement_graph;

        const modalHTML = <div className='event-moudlePopupbody'>
            <div className='Dashboard_Main_Headding mt-3'>
                <h1>Engagement Score Details</h1>
            </div>
            <Row className='d-flex justify-content-around pt-4 align-items-center engagement-score-wrapper'>
                <EngagementScoredetails scoreDetails={scoreDetails} benchmarkDetails={benchmarkDetails} />
                <EngagementScoreGraph monthlyGraphData={monthlyGraphData} />
            </Row>
            <EngagementVaries engagementGraphData={engagementGraphData} />
        </div>

        setModalData(modalHTML);

    }

    return (
        <>
            <div className='EngagementScore_sectionWrap mt-4 ml-3'>
                <div className='hrDashboard-HeaddingTxt'>
                    <h6>Engagement Score</h6>
                </div>
                <div className='EngagementScore_Ratio flex justify-center flex-column'>
                    <CircularProgressbar value={percentage} text={percentage}
                        styles={buildStyles({
                            textColor: "#FFC727",
                            pathColor: "#FFC727",
                            trailColor: "transparent",
                            rotation: 0.25,
                            strokeLinecap: 'butt',
                            textSize: '27px',
                            pathTransitionDuration: 0.5,
                        })}
                    />
                </div>
                <div>
                    <div className='ResponseRatio-contbox pb-3'>

                        {
                            teamEngagementData?.engagement_status === "increased" ? <TiArrowSortedUp size={20} color='#FF5151' />
                                : <TiArrowSortedDown size={20} color='#FF5151' />
                        }

                        <span className='energy_score'>{teamEngagementData?.engagement_percentage}</span>
                        <span>Since last month</span>
                    </div>
                </div>
                <div>
                    <span className='updateData'>Updated {teamEngagementData?.engagement_updated_on}</span>
                </div>
                <div className='flex justify-content-end'>
                    <button className='Engagementscore-Details' onClick={handleShow}>View details <MdOutlineKeyboardArrowRight /></button>
                </div>
            </div>

            {/* events Views */}
            <Modal show={show} onHide={handleClose} className="eventManagementPopup" size="lg">
                {/* <Modal.Header closeButton className='eventHeader'>
                    {/* <Modal.Title>Modal heading</Modal.Title> 
                </Modal.Header> */}
                <Modal.Body className='eventmoudleBody'>
                    <div className='flex justify-content-end'>
                        <button className='eventMoudleCloseBtn' onClick={handleClose}>
                            <GrClose color='#FA3B4E' size={20} /></button>
                    </div>

                    {modalData}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
