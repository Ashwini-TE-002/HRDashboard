import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AllHealthStatus from '../Over all Health Status/AllHealthStatus'
import LifestyleManagement from '../Lifestyle_Management/LifestyleManagement'
import HistoryDiseases from '../History of Diseases/HistoryDiseases'

export default function PhysicalHealth() {
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

                "team_health_status_data": {

                    "risk": "70",

                    "lowRisk": "20",

                    "moderateRisk": "10"

                },

                "team_lifestyle_graph_data": [{

                    "name": "Nutrition and Weight",

                    "value": 100

                }, {

                    "name": "Smoking",

                    "value": 90

                }, {

                    "name": "Fitness",

                    "value": 40

                }, {

                    "name": "Alchohol and Drugs",

                    "value": 60

                }, {

                    "name": "Stress Management",

                    "value": 80

                }],

                "team_disease_history_graph_data": {

                    "label": ["Diabetes", "Asthma", "Conary artery Disease", "Heart Failure", "Depression", "Cancer", "COPD / emphysema", "Back pain", "Non disease specific", "Others"],

                    "value": [65, 59, 80, 81, 56, 55, 40, 100, 20, 48]

                }

            },

            "message": "Success"

        }


        const html = <div>
            <Row>
                <AllHealthStatus data={response.data.team_health_status_data} />
                <LifestyleManagement data={response.data.team_lifestyle_graph_data} />
            </Row>
            <Row>
                <Col>
                    <HistoryDiseases data={response.data.team_disease_history_graph_data} />
                </Col>
            </Row>
        </div>

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

            </Container>
        </section>
    )
}
