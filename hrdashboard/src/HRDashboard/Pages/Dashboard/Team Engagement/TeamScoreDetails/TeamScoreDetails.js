import React, { useEffect, useState } from 'react'
import SideBar from '../../../../Navigaction/SideBar'
import { Col, Row, Container } from 'react-bootstrap'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import TeamDataScore from './TeamDataScore'
import DemographicsReport from '../DemographicsReport/DemographicsReport'
import StatusReport from './StatusReport'
import RedZoneEmp from './RedZoneEmp'
import Header from '../../../../Header/Header'
import { useMediaQuery } from 'react-responsive'

export default function TeamScoreDetails() {

    const [teamScoreData, setTeamScoreData] = useState();
    useEffect(() => {
        // var config = {
        //     method: 'get',
        //     url: '',
        //     headers: {}
        // };

        // axios(config)
        //     .then(function (response) {
        const response = {

            "success": true,

            "data": {
                "team_name": "UXUI Designer",
                "team_id": 1,

                "engagement_score_data": {

                    "engagement_score": "7.4",

                    "total_engagement": "10",

                    "engagement_percentage": "0.2",

                    "engagement_status": "increased"

                },

                "last_three_months_engagement_score": {

                    "engagement_score": "7.4",

                    "total_engagement": "10",

                    "engagement_percentage": "0.2",

                    "engagement_status": "increased"

                },

                "engagement_score_graph": [{

                    "name": "Jan",

                    "value": 2

                }, {

                    "name": "Feb",

                    "value": 9

                }, {

                    "name": "Mar",

                    "value": 4

                }, {

                    "name": "Apr",

                    "value": 6

                }, {

                    "name": "May",

                    "value": 8

                }],

                "team_engagement_graph": [{

                    "name": "Workout1",

                    "value": 5.3

                }, {

                    "name": "Mental Wellness",

                    "value": 3.2

                }, {

                    "name": "Kids Nutrition",

                    "value": 5.3

                }, {

                    "name": "Nutrition",

                    "value": 2.80

                }, {

                    "name": "General",

                    "value": 1.90

                }],

                "team_health_status_data": {

                    "label": ["low risk", "at risk", "moderate risk"],

                    "value": [20, 50, 70]

                },

                "team_redzone_data": {

                    "total_emp_count": 20,

                    "total_emp_atrisk_count": 4,

                    "team_redzone_graph_data": [{

                        "name": "Jan",

                        "value": 2

                    }, {

                        "name": "Feb",

                        "value": 9

                    }, {

                        "name": "Mar",

                        "value": 4

                    }, {

                        "name": "Apr",

                        "value": 6

                    }, {

                        "name": "May",

                        "value": 8

                    }]

                }

            },

            "message": "Success"

        }

        const htmlData = <Row >
            <Col>
                <TeamDataScore teamEngagementData={response.data.data.engagement_score_data}
                    teamThreeMonthEngagementData={response.data.data.last_three_months_engagement_score}
                    teamGraphData={response.data.data.engagement_score_graph} />

                <Row>
                    <DemographicsReport teamEngagementGraphData={response.data.data.team_engagement_graph} />
                </Row>
                <Row>
                    <StatusReport teamHealthData={response.data.data.team_health_status_data} />
                    <RedZoneEmp teamRedzoneData={response.data.data.team_redzone_data} />
                </Row>
            </Col>
            {/* <Col>
                        <TeamDataScore teamEngagementData={response.data.data.engagement_score_data}
                            teamThreeMonthEngagementData={response.data.data.last_three_months_engagement_score}
                            teamGraphData={response.data.data.engagement_score_graph} />
                        <DemographicsReport teamEngagementGraphData={response.data.data.team_engagement_graph} />
                    </Col>


                    <StatusReport teamHealthData={response.data.data.team_health_status_data} />
                    <RedZoneEmp teamRedzoneData={response.data.data.team_redzone_data} /> */}

        </Row>

        setTeamScoreData(htmlData)

        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }, [])
    return (
        <>
            <SideBar />
            <Header />
            <Container className='performanceContainer'>
                <Row className="events-performance">
                    <Col>
                        <div className='backButton'> {/* Arrow Button*/}
                            <MdOutlineArrowBackIosNew />
                            <span>Back</span>
                        </div>
                        <div className='Dashboard_Main_Headding mt-3'>
                            <h1>Team Reports</h1>
                        </div>
                    </Col>
                    {/* Team Data */}

                    {teamScoreData}
                </Row>
            </Container>

        </>
    )
}
