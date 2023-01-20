import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, linearGradient, defs, stop, ResponsiveContainer } from 'recharts';
import '../TeamEngagement.moudle.css'
import { Col, Row } from 'react-bootstrap';

export default function RedZoneEmp(props) {
    const data = props.teamRedzoneData.team_redzone_graph_data;

    return (
        <Col className="redzoneEmpAlret col-lg-8">
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Red Zone employees</h6>
            </div>
            <div>
                <ResponsiveContainer height={300}>
                    <AreaChart
                        width={800}
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
                                <stop offset="2%" stopColor="#000000" stopOpacity={0.8} />
                                <stop offset="98%" stopColor="#000000" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="2%" stopColor="#000000" stopOpacity={0.8} />
                                <stop offset="98%" stopColor="#000000" stopOpacity={0} />
                            </linearGradient>

                        </defs>
                        <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical="" stroke="#fff" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: "#fff", color: "#000" }} itemStyle={{ color: "#000" }} cursor={true} />

                        <Area type="monotone" dataKey="value" stroke="#fa3b4e" fillOpacity={1} fill="url(#colorUv)" strokeWidth="5" dot={{ fill: "#fa3b4e", stroke: "#fa3b4e", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#fa3b4e", stroke: "#fa3b4e", strokeWidth: 5, r: 10 }} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Col>
    )
}
