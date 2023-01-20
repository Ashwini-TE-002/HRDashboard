import React from 'react'
import { Col } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function EngagementScoreGraph(props) {

    const graphData = props.monthlyGraphData;

    return (
        <Col className='mt-3 col-lg-7 col-md-12 col-sm-12'>
            <ResponsiveContainer height={200}>
                <LineChart
                    width={400}
                    height={200}
                    data={graphData}
                    margin={{
                        top: 10,
                        right: 20,
                        left: -30,
                        bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical="" stroke="#243240" />
                    <XAxis dataKey="name" style={{ fontSize: "0.6em" }} />
                    <YAxis style={{ fontSize: "0.6em" }} />
                    <Tooltip contentStyle={{ backgroundColor: "#018A95", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={true} />
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey="people" stroke="#8884d8" strokeWidth="5" dot={{ fill: "#FA3B4E", stroke: "#8884d8", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#FA3B4E", stroke: "#8884d8", strokeWidth: 5, r: 10 }} />
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </LineChart>
            </ResponsiveContainer>
        </Col>
    )
}
