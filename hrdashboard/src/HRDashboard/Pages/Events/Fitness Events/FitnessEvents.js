import React, { useEffect, useState } from 'react';
import SideBar from '../../../Navigaction/SideBar'
import { Container, Col, Row } from 'react-bootstrap'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import FitnessEventsOverview from './Fitness Events overview/FitnessEventsOverview'
import ActivityRespondentsComponent from './Activity Respondents Component/ActivityRespondentsComponent'
import EventsGraphComponent from './Events Graph Component/EventsGraphComponent'
import Header from '../../../Header/Header';

export default function FitnessEvents() {
    const [htmlData, setHtmlData] = useState();
    //navigate-previouspage
    let goBack = useNavigate();
    function backToEvents(e) {
        e.preventDefault();
        let url = "/Events"
        goBack(url)
    }

    useEffect(() => {
        // This needs to be made dynamic and change the URL

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

                "team_events_data": [{

                    "event_date": "22/12/2022",

                    "event_time": "10 : 00 Am To 05 : 00 Pm",

                    "event_name": "Fitness challenge",

                    "event_type": "fitness",

                    "event_status": "completed",

                    "responded_emp_count": 50,

                    "responded_emp_count_percent": 20



                }, {

                    "event_date": "24/12/2022",

                    "event_time": "10 : 00 Am To 05 : 00 Pm",

                    "event_name": "Fitness challenge",

                    "event_type": "fitness",

                    "event_status": "completed",

                    "responded_emp_count": 50,

                    "responded_emp_count_percent": 20



                }, {

                    "event_date": "23/12/2022",

                    "event_time": "10 : 00 Am To 05 : 00 Pm",

                    "event_name": "Fitness challenge",

                    "event_type": "fitness",

                    "event_status": "completed",

                    "responded_emp_count": 50,

                    "responded_emp_count_percent": 20



                }],

                "activity_respondent_data": {

                    "emp_respondent_count_percent": 36,

                    "emp_respondent_count_status": "increased",

                    "respondent_graph_data": [{
                        "name": "Jun",
                        "value": 40
                    }, {
                        "name": "Jul",
                        "value": 30
                    }, {
                        "name": "Aug",
                        "value": 20
                    }, {
                        "name": "Sep",
                        "value": 27
                    },
                    {
                        "name": "Oct",
                        "value": 18
                    }, {
                        "name": "Nov",
                        "value": 23

                    }, {
                        "name": "Dec",
                        "value": 34
                    }]

                },

                "monthly_events_count_data": {

                    "total_current_event_count": 7,

                    "events_count_percent": 36,

                    "events_count_status": "increased",

                    "events_count_graph_data": [{
                        "name": "Jun",
                        "eventCount": 9
                    }, {
                        "name": "Jul",
                        "eventCount": 8
                    }, {
                        "name": "Aug",
                        "eventCount": 5
                    }, {
                        "name": "Sep",
                        "eventCount": 7
                    }, {
                        "name": "Oct",
                        "eventCount": 12
                    }, {
                        "name": "Nov",
                        "eventCount": 10
                    }, {
                        "name": "Dec",
                        "eventCount": 14
                    }]

                }

            },

            "message": "Success"

        }
        const html = <Row>
            <Col className='col-lg-7'>
                <FitnessEventsOverview data={response.data.team_events_data} />
            </Col>

            <Col className="col-lg-4">
                <ActivityRespondentsComponent data={response.data.activity_respondent_data} />
                <EventsGraphComponent data={response.data.monthly_events_count_data} />
            </Col>

            {/* <Col className='mt-3 class="col-lg-4"'>
            </Col> */}
        </Row>
        setHtmlData(html)

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

    }, [])


    return (
        <>
            <SideBar />
            <Header />
            <section>
                <Container className='performanceContainer'>
                    <Row>
                        <Col>
                            <div className='backButton' onClick={backToEvents}> {/* Arrow Button*/}
                                <MdOutlineArrowBackIosNew />
                                <span>Back</span>
                            </div>
                            {/* EnergyAndWorkplace headding */}
                            <div className='Dashboard_Main_Headding mt-3'>
                                <h1>Fitness Events</h1>
                            </div>
                            {/* content */}
                            {htmlData}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
