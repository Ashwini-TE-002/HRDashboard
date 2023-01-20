import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Col, Row } from 'react-bootstrap'
import './DemographicsReport.moudle.css'
import { useMediaQuery } from 'react-responsive';

export default function DemographicsReport(props) {

    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });

    const data = props.teamEngagementGraphData

    return (

        <Col className='TeamScore-section  mt-3 '>
            <div className='DemoGraphyReportBarchat'>
                <div className="engagementTxt">
                    <h6>How engagement scores varies across demographics ?</h6>
                </div>
                <div className="flex align-items-center justify-content-between mt-5">
                    <div>
                        <h6>Reports</h6>
                    </div>
                </div>
                <div className="TeamScoreBarcharts">
                    <ResponsiveContainer height={400}>
                        <BarChart
                            width={750}
                            height={400}
                            data={data}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                            }}
                            background='transparent'
                            barSize={20}
                        >
                            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                            {/* <YAxis /> */}
                            {/* <Tooltip />
                            <Legend /> */}
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Col >

    )
}
