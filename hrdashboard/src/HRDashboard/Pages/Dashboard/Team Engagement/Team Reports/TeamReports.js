import React, { useEffect, useState } from 'react'
import SideBar from '../../../../Navigaction/SideBar'
import '../TeamEngagement.moudle.css'
import { Container, Col, Row } from "react-bootstrap"
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import TeamScore from '../TeamScore/TeamScore'
import axios from 'axios'
import Header from '../../../../Header/Header'

export default function TeamReports() {
    const [reportCard, setReportCard] = useState();

    // This needs to be made dynamic and change the URL
    useEffect(() => {
        var config = {
            method: 'get',
            url: 'http://localhost:3000/TeamReports',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data.data.team_engagement_list));
                if (response.data.data.team_engagement_list.length > 0) {

                    const reportCardHTML = response.data.data.team_engagement_list.map((item, i) =>
                        <TeamScore teamEngagementList={item} key={i} />
                    )
                    setReportCard(reportCardHTML)
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (
        <>
            <SideBar />
            <Header />
            <section>
                <Container className='performanceContainer'>
                    <Row className='events-performance'>
                        <Col>
                            <div className='backButton' > {/* Arrow Button*/}
                                <MdOutlineArrowBackIosNew />
                                <span>Back</span>
                            </div>
                            <div className='Dashboard_Main_Headding mt-3'>
                                <h1>Team Reports</h1>
                            </div>
                            <Col>

                                <div>
                                    {reportCard}
                                </div>

                            </Col>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
