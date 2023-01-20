import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import MentalStress from './History of MentalStress/MentalStress'
import JobSatisfaction from './Job satisfaction/JobSatisfaction'
import StressMeter from './Stress Meter/StressMeter'

export default function MentalHealth() {
    const [htmlData, setHtmlData] = useState();
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

                // "team_stress_data": {

                //     "stress_percent": "70",

                //     "stress_mood": "Happy"

                // },

                "team_job_satisfaction_data": {

                    "label": ["satisfied", "average", "unsatisfied"],

                    "value": [70, 20, 10]

                },

                "team_mental_stress_graph_data": {

                    "label": ["Self/Family physical health", "Work Task and Deadlines", "Self/Family Mental health", "Performance appraisal", "Social Distancing / Isolation", "Relationship issues", "Being Laid Off", "Children education", "Others"],

                    "value": [65, 59, 80, 81, 56, 55, 40, 100, 20]

                }

            },
            "message": "Success"
        }


        const html =
            <Row>
                <Col className='col-lg-4 col-md-12 col-sm-12'>
                    <JobSatisfaction data={response.data.team_job_satisfaction_data} />
                </Col>
                {/* <Col>
                    <StressMeter data={response.data.team_stress_data} />
                </Col> */}
                <Col className='col-lg-8 col-md-12 col-sm-12'>
                    <MentalStress data={response.data.team_mental_stress_graph_data} />
                </Col>
            </Row>

        setHtmlData(html)

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

    }, [])
    return (
        <section className="homepageDashboard">
            <Container className='performanceContainer'>
                {htmlData}
                {/* <Row>
                    <Col>
                    </Col>
                </Row> */}
            </Container>
        </section>
    )
}
