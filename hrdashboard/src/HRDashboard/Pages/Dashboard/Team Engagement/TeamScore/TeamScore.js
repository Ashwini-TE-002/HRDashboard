import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../TeamEngagement.moudle.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { Doughnut } from 'react-chartjs-2';
import { BsTriangleFill } from 'react-icons/bs'
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, linearGradient, defs, stop, ResponsiveContainer
} from 'recharts';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import '../../../../HRDashboard Responsiveness/HrResponsiveness.css'


export default function TeamScore(props) {

    // const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });

    const teamEngagementList = props.teamEngagementList;
    const teamEngagementData = teamEngagementList.team_engagement_data
    // areachart
    const AreachartData = teamEngagementData.team_egagement_graph_data;

    // donutChat
    const TeamScoreChat = {
        datasets: [{
            data: teamEngagementList.team_health_status_data.value,
            backgroundColor: [
                '#49DEB2',
                '#FFB200',
                '#FA3B4E',
            ],
            hoverBackgroundColor: [
                '#49DEB2',
                '#FFB200',
                '#FA3B4E',
            ]
        }],
        text: '23%'
    };

    // click open TeamDetailView
    let TeamDetails = useNavigate();
    function openTeamDetails(e) {
        e.preventDefault();
        let openLink = "/TeamScoreDetails"
        TeamDetails(openLink)
    }

    return (
        <Row className='TeamScore-section' onClick={openTeamDetails}>
            <Col className='TeamScore_section col-lg-3 col-md-6 col-sm-4'>
                <div className='hrDashboard-HeaddingTxt'>
                    <h6>{teamEngagementList.team_name}</h6>
                </div>
                <div className='teamScore'>
                    <div className='teamScoreProgressbar'> {/* meterRatio */}
                        <CircularProgressbar
                            value={teamEngagementData.emp_engaged * 10}
                            circleRatio={1}
                            text={teamEngagementData.emp_engaged}
                            styles={buildStyles({
                                textColor: "#FFC727",
                                pathColor: "#FFC727",
                                // trailColor: "#d6d6d6",
                                trailColor: "transparent",
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                            })}
                        />
                    </div>
                    <div className='mt-4'>

                        {
                            (teamEngagementData.emp_engaged_status === "increased") ?
                                <TiArrowSortedUp size={25} color={'#FF5151'} />
                                : <TiArrowSortedDown size={25} color={'#FF5151'} />
                        }

                        <span>{teamEngagementData.emp_engaged_percentage}</span>
                        <span> Since last month</span>
                    </div>
                    {/* <div className='highlights flex flex-column mt-3'>
                                <h6>Highlights</h6>
                                <span>{teamEngagementData.high_risk_emp_count}% people are in red zone</span>
                                <span>{teamEngagementData.low_risk_emp_count}% people Performance score is low</span>
                            </div> */}
                </div>
                {/* <div className='flex'>

                        </div> */}
            </Col>
            <Col className='col-lg-6 col-md-6 col-sm-4 teamScoreLineChatCol'>
                {/* team */}
                <div className='teamScoreLineChat'>
                    {/* area chart */}
                    <ResponsiveContainer height={300}>
                        <AreaChart
                            width={380}
                            height={300}
                            data={AreachartData}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                            }}
                        >
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="2%" stopColor="#49DEB233" stopOpacity={0.8} />
                                    <stop offset="98%" stopColor="#49DEB233" stopOpacity={0} />
                                </linearGradient>
                                {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="2%" stopColor="#49DEB233" stopOpacity={0.8} />
                                            <stop offset="98%" stopColor="#49DEB233" stopOpacity={0} />
                                        </linearGradient> */}
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical="" stroke="#243240" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip contentStyle={{ backgroundColor: "#49DEB2", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={true} />
                            <Area type="monotone" dataKey="value" stroke="#49DEB2" fillOpacity={1} fill="url(#colorUv)" strokeWidth="5" dot={{ fill: "#49DEB2", stroke: "#49DEB2", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#49DEB2", stroke: "#49DEB2", strokeWidth: 5, r: 10 }} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </Col>
            <Col className='col-lg-3 col-md-6 col-sm-4 Donutchart-HealthScore'>
                <div className='hrDashboard-HeaddingTxt'>
                    <h6>Health Status</h6>
                </div>
                <div className='TeamScore-DonetChat'>
                    <Doughnut
                        data={TeamScoreChat}
                        options={{
                            responsive: true,
                        }}
                    />
                </div>
                <div className='CompanyDemographicsData'>
                    <div className='mt-4 '>
                        <div className='flex items-center'>
                            <div className='subscribers'></div>
                            <span>{teamEngagementList.team_health_status_data.value[0]}% Low Risk</span>
                        </div>
                        <div className='flex items-center'>
                            <div className='Moderate'></div>
                            <span>{teamEngagementList.team_health_status_data.value[1]}% Moderate Risk</span>
                        </div>
                        <div className='flex items-center'>
                            <div className='unsubscribers'></div>
                            <span>{teamEngagementList.team_health_status_data.value[2]}% At Risk</span>
                        </div>
                    </div>
                </div>
            </Col>
        </Row >
    )
}
