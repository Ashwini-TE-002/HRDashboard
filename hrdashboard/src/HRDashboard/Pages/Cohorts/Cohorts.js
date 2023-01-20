import React, { useEffect, useState } from 'react'
import SideBar from '../../Navigaction/SideBar'
import { Container, Col, Row } from 'react-bootstrap'
import './Cohorts.moudle.css'
import MoodMeterScore from './Mood Meter Score/MoodMeterScore';
import EnergyLevel from './EnergyLevel/EnergyLevel';
import AlchoholConsumers from './Alchohol Consumers/AlchoholConsumers';
import HealthInformaction from './Health Informaction/HealthInformaction';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '../../Header/Header';
import { useMediaQuery } from 'react-responsive'
import NoDataFound from '../../../Components/NoDataFound/NoDataFound';

export default function Cohorts() {

    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });


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

                "team_mood_data": {

                    "team_mood_percentage": "80",

                    "team_mood": "Happy",

                    "team_monthly_mood_graph": [{

                        "name": "Jan",

                        "people": 4,

                        "mood": "happy"

                    }, {

                        "name": "Feb",

                        "people": 3,

                        "mood": "unhappy"

                    }, {

                        "name": "Mar",

                        "people": 4,

                        "mood": "happy"

                    }, {

                        "name": "Apr",

                        "people": 2,

                        "mood": "happy"

                    }, {

                        "name": "May",

                        "people": 5,

                        "mood": "happy"

                    }]

                },

                "engagement_trending_score": {
                    "current_trending_score": 7.4,

                    "engagement_trending_score_graphdata": [{

                        "name": "Jan",

                        "value": 7.3

                    }, {

                        "name": "Feb",

                        "value": 7.8

                    }, {

                        "name": "Mar",

                        "value": 8

                    }, {

                        "name": "Apr",

                        "value": 10

                    }]

                },

                "energetic_percent": 80,

                "alcohol_consumption_percent": 40,

                "smoking_percent": 50,
                "health_info": {

                    "avg_foot_step_data": {

                        "avg_foot_step_percent": 20,

                        "foot_step_change_percent": 10,

                        "foot_step_change_status": "increased"

                    },

                    "compensation_data": {

                        "compensation_percent": 50,

                        "compensation_change_percent": 40,

                        "compensation_change_status": "increased"

                    },

                    "sick_leave_data": {

                        "sick_leave_percent": 30,

                        "sick_leave_change_percent": 20,

                        "sick_leave_change_status": "increased"

                    },

                    "calorie_reduction_data": {

                        "calorie_reduction_percent": 40,

                        "calorie_reduction_change_percent": 30,

                        "calorie_reduction_change_status": "increased"

                    }
                }



            },



            "message": "Success"



        }

        const graphData = response.data.engagement_trending_score.engagement_trending_score_graphdata;
        const html = <div>
            <Row className='EngagementScorePie-Row'>
                <Col className='col-lg-6 col-md-10'>
                    <div className="EngagementScorePie">
                        <div className='hrDashboard-HeaddingTxt'>
                            <h6>Engagement Trending score</h6>
                        </div>
                        <div>
                            <span className='scoreValue'>{response.data.engagement_trending_score.current_trending_score}</span>
                            {/* <ResponsiveContainer height={300} width={isMobileDevice ? 160 : 500}> */}
                            <div>
                                <ResponsiveContainer height={300} width={isMobileDevice ? 250 : 500}>
                                    <LineChart
                                        // width={500}
                                        height={300}
                                        data={graphData}
                                        margin={{
                                            top: 0,
                                            right: 0,
                                            left: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical="" stroke="#fff" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip contentStyle={{ backgroundColor: "#006CFF", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={true} />
                                        {/* <Legend /> */}
                                        <Line type="monotone" dataKey="value" stroke="#006CFF" strokeWidth="2" dot={{ fill: "#006CFF", stroke: "#006CFF", strokeWidth: 1, r: 2 }} activeDot={{ fill: "#006CFF", stroke: "#006CFF", strokeWidth: 3, r: 10 }} />
                                        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='col-lg-6'>
                    <MoodMeterScore data={response.data.team_mood_data} />
                </Col>
            </Row>
            {/* down */}
            <Row className='flex justify-content-between'>
                <Col className='col-lg-8 mt-3'>
                    <div className='energy-divWrapper'>
                        <div className='hrDashboard-HeaddingTxt'>
                            <h6>Health analytics</h6>
                        </div>
                        {/* Enery Level */}
                        <Row className='energyComponents'>
                            <Col>
                                <EnergyLevel data={response.data.energetic_percent} />
                            </Col>
                            <Col>
                                <AlchoholConsumers alcoholData={response.data.alcohol_consumption_percent} smokingData={response.data.smoking_percent} />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col className='col-lg-4'>
                    <div>
                        <HealthInformaction data={response.data.health_info} />
                    </div>
                </Col>
            </Row>
        </div>

        setHtmlData(html)


        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

    }, []);

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
                                            <h6>Cohorts</h6>
                                        </div>
                                    </div>
                                </Col>

                                {htmlData}
                            </Row>
                            : <div className='pt-2 text-center hr-nodata-wrapper'> <NoDataFound className="pt-5" type="bioOptimal" /><div className='blink'>Atleast three users has to complete the survey to show the statistics</div></div>

                    }
                </Container>
            </section>

        </>
    )
}
