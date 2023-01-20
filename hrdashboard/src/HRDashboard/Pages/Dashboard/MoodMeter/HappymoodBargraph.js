import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Col } from 'react-bootstrap'
import './MoodMeter.moudle.css'
import { useMediaQuery } from 'react-responsive';

export default function HappymoodBargraph(props) {

    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });

    const data = props.teamMoodGraphData;

    return (
        <Col>
            <div>
                <div>
                    <div className='bargraphtext-wrapper mt-4'>
                        <h6>How mood scores varies across demographics ?</h6>
                    </div>
                    <div className="mt-4 mb-4">
                        <span className="p-4">Reports</span>
                    </div>
                </div>
                <div>
                    <ResponsiveContainer height={300}>
                        <BarChart
                            width={700}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                            }}
                            barSize={20}
                        >
                            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} style={{ fontSize: "0.6em" }} />
                            <YAxis style={{ fontSize: "0.6em" }} />
                            <Tooltip />
                            {/* <Legend /> */}
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Col>
    )
}
