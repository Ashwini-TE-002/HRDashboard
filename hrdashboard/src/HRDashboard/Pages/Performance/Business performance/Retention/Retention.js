import React from 'react'
import './Retention.moudle.css'
import { useNavigate } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import SideBar from '../../../../Navigaction/SideBar';
import RetentionRate from './RetentionRate/RetentionRate';
import TurnoverDivision from './TurnoverDivision/TurnoverDivision';
import RetentionOverview from './Retention Overview/RetentionOverview';

export default function Retention() {

    // navigate
    let goBack = useNavigate();
    function backToRetention(e) {
        e.preventDefault();
        let pathUrl = "/Performance"
        goBack(pathUrl)
    }

    return (
        <>
            <SideBar />
            <section>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <div className='backButton' onClick={backToRetention}> {/* Arrow Button*/}
                                    <MdOutlineArrowBackIosNew />
                                    <span>Back</span>
                                </div>
                                {/* EnergyAndWorkplace headding */}
                                <div className='Dashboard_Main_Headding mt-3'>
                                    <h1>Employee Retention</h1>
                                </div>
                                {/* content */}
                                <div className='flex'>
                                    <div>
                                        <RetentionRate />
                                        <RetentionOverview />
                                    </div>
                                    <div>
                                        <TurnoverDivision />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
