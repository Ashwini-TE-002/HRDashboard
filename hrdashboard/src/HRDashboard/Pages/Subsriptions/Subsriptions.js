import React, { useEffect, useState } from 'react'
import './Subsriptions.moudle.css'
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from '../../Navigaction/SideBar'
import ActiveSubscription from './ActiveSubscription/ActiveSubscription'
import SubscriptionPlanOverview from './Subscription Plan Overview/SubscriptionPlanOverview'
import SubscriptionPerformance from './Subscription Performance/SubscriptionPerformance'
import Header from '../../Header/Header'
import NoDataFound from '../../../Components/NoDataFound/NoDataFound'

export default function Subsriptions() {

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

                "team_subscriptions_data": {
                    "label": ["subscribers", "unSubscribers"],
                    "value": [60, 40]
                },

                // "team_plan_graph_data": [{

                //     "name": "Jan",

                //     "no": 5,

                //     "yes": 20
                // }, {

                //     "name": "Feb",

                //     "yes": 20,

                //     "no": 50

                // }, {

                //     "name": "Mar",

                //     "yes": 20,

                //     "no": 40,


                // }, {

                //     "name": "Apr",

                //     "yes": 20,

                //     "no": 60,

                // }, {

                //     "name": "May",

                //     "yes": 80,

                //     "no": 1,

                // }, {

                //     "name": "Jun",

                //     "yes": 80,

                //     "no": 20

                // }, {

                //     "name": "Jul",

                //     "yes": 80,

                //     "no": 20

                // }, {

                //     "name": "Aug",

                //     "yes": 80,

                //     "no": 20

                // }, {

                //     "name": "Sep",

                //     "yes": 80,

                //     "no": 20

                // }, {

                //     "name": "Oct",

                //     "yes": 80,

                //     "no": 20

                // }, {

                //     "name": "Nov",

                //     "yes": 80,

                //     "no": 20

                // }, {

                //     "name": "Dec",

                //     "yes": 80,

                //     "no": 80

                // }],

                "team_performance_score": [{
                    "team_id": 1,

                    "team_name": "UI UX Team",

                    "subscribed_emp_count": 60,

                    "unsubscribed_emp_count": 20,

                    "subscription_createdAt": "22/12/2022"

                }, {

                    "team_name": "Frontend Developer Team",

                    "subscribed_emp_count": 85,

                    "unsubscribed_emp_count": 5,

                    "subscription_createdAt": "22/12/2022"

                }, {

                    "team_name": "Backend Developer Team",

                    "subscribed_emp_count": 35,

                    "unsubscribed_emp_count": 20,

                    "subscription_createdAt": "22/12/2022"

                }]

            },

            "message": "Success"

        }


        const html =
            <div>
                <Row className='Subsriptions-Row'>
                    <Col className='col-lg-4 col-md-6 ActiveSubscription-Col'>
                        <ActiveSubscription data={response.data.team_subscriptions_data} />
                    </Col>
                    {/* <Col className='col-md-7'>
                        <SubscriptionPlanOverview data={response.data.team_plan_graph_data} />
                    </Col> */}
                    <Col className='col-lg-8 col-md-12 .subscriptionPlan-Col'>
                        <SubscriptionPerformance data={response.data.team_performance_score} />
                    </Col>
                </Row>
                <div>
                </div>
            </div>

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
            <section className="homepageDashboard">
                <Container className='performanceContainer'>
                    {
                        localStorage.getItem('showStatistics') === "true" ?
                            <Row>
                                <Col>
                                    <div className='HealthMetrics-Body'>
                                        <div className='Dashboard_Main_Headding'>
                                            <h6>Subscription</h6>
                                        </div>
                                    </div>
                                    {htmlData}
                                </Col>
                            </Row>
                            : <div className='pt-2 text-center hr-nodata-wrapper'> <NoDataFound className="pt-5" type="bioOptimal" /><div className='blink'>Atleast three users has to complete the survey to show the statistics</div></div>

                    }
                </Container>
            </section>
        </>
    )
}
