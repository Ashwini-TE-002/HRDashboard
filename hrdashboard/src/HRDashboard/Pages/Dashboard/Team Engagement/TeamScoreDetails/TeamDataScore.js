import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import '../TeamEngagement.moudle.css'
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, linearGradient, defs, stop, ResponsiveContainer
} from 'recharts';
import { useMediaQuery } from 'react-responsive';
import '../../../../HRDashboard Responsiveness/HrResponsiveness.css'

export default function TeamDataScore(props) {


    const teamEngagementData = props.teamEngagementData;
    const teamThreeMonthEngagementData = props.teamThreeMonthEngagementData;
    const data = props.teamGraphData;

    return (
        <Row className='TeamScore-section'>
            <Col className='col-lg-6 col-md-5 col-sm-6 TeamDataScoreWrapper'>
                <div className='hrDashboard-HeaddingTxt'>
                    <h6>UI-UX Team Score</h6>
                </div>
                <div className='TeamDataScoreReports'>
                    <div className='EngagementScore-Wrapper'>
                        <div className='EngagementScoreTxt'>
                            <h4>Engagement score</h4>
                        </div>
                        <div className='text-center'>
                            <div className='EngagementScore flex justify-content-center align-items-baseline'>
                                <h1>{teamEngagementData.engagement_score}</h1>
                                {/* <span>/ {teamEngagementData.total_engagement}</span> */}
                            </div>
                            <div>
                                <div>
                                    {
                                        (teamEngagementData.engagement_status === "increased") ?
                                            <TiArrowSortedUp color='#FA3B4E' size={30} />
                                            : <TiArrowSortedDown color='#FA3B4E' size={30} />
                                    }

                                    <span>{teamEngagementData.engagement_percentage}</span>
                                </div>
                                <span>Since last month</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className='EngagementScoreTxt'>
                            <h4>Engagement score</h4>
                        </div>
                        <div>
                            <div className='Industrybenchmark flex justify-content-center align-items-baseline'>
                                <h1>{teamThreeMonthEngagementData.engagement_score}</h1>
                                {/* <span>/ {teamThreeMonthEngagementData.total_engagement}</span> */}
                            </div>
                            <div>
                                <div>
                                    {
                                        (teamThreeMonthEngagementData.engagement_status === "increased") ?
                                            <TiArrowSortedUp color='#49DEB2' size={30} />
                                            : <TiArrowSortedDown color='#49DEB2' size={30} />
                                    }
                                    <span>{teamThreeMonthEngagementData.engagement_percentage}</span>
                                </div>
                            </div>
                        </div>
                        {/* <div>
                                
                            </div> */}
                    </div>
                </div>
            </Col>
            {/* graph */}
            <Col className='col-lg-6 col-md-8 col-sm-6'>
                <div className='TeamDataScoreLineChat '>
                    {/* <Line? options={?options} width={30} height={20} data={data} /> */}
                    <ResponsiveContainer height={300}>
                        <AreaChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                            }}
                        >
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="2%" stopColor="#49DEB2" stopOpacity={0.8} />
                                    <stop offset="98%" stopColor="#49DEB2" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="2%" stopColor="#49DEB2" stopOpacity={0.8} />
                                    <stop offset="98%" stopColor="#49DEB2" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical="" stroke="#243240" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip contentStyle={{ backgroundColor: "#49DEB2", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={true} />
                            {/* <Legend /> */}
                            {/* <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> */}
                            {/* <Area type="monotone" dataKey="pv" stroke="#49DEB2" fill="#49DEB2" strokeWidth="5" dot={{ fill: "#49DEB2", stroke: "#49DEB2", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#49DEB2", stroke: "#49DEB2", strokeWidth: 5, r: 10 }} /> */}
                            <Area type="monotone" dataKey="value" stroke="#49DEB2" fillOpacity={1} fill="url(#colorUv)" strokeWidth="5" dot={{ fill: "#49DEB2", stroke: "#49DEB2", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#49DEB2", stroke: "#49DEB2", strokeWidth: 5, r: 10 }} />

                            {/*
                            type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8"
                            
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </Col>
        </Row>
    )
}
