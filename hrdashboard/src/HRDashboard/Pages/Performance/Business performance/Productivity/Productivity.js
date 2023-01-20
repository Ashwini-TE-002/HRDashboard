import React from 'react'
import './Productivity.moudle.css'
import { Container, Col, Row } from 'react-bootstrap'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../../../Navigaction/SideBar'
import ProductivityRate from './Productivity Rate/ProductivityRate'
import TopTeams from './Top Teams/TopTeams'
import ProductivityOverview from './Productivity Overview/ProductivityOverview'

export default function Productivity() {


    // page navigate
    let goBack = useNavigate();
    function backToPerformancePage(e) {
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
                                <Col>
                                    <div>
                                        <div className='backButton' onClick={backToPerformancePage}> {/* Arrow Button*/}
                                            <MdOutlineArrowBackIosNew />
                                            <span>Back</span>
                                        </div>
                                    </div>
                                </Col>

                                {/* Productivity headding */}
                                <div className='Dashboard_Main_Headding mt-3'>
                                    <h1>Energy and workplace</h1>
                                </div>
                                <div className='flex'>
                                    <div className='mr-2'>
                                        <ProductivityRate />
                                        <ProductivityOverview />
                                    </div>
                                    <div >
                                        <TopTeams />
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
