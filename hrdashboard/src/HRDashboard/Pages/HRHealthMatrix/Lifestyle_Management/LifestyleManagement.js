import React from 'react'
import './LifestyleManagement.moudle.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, Legend, ResponsiveContainer } from 'recharts';
import { Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'

export default function LifestyleManagement(props) {

    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });

    const data = props.data;

    return (
        <Col className='LifestyleManagement-Col'>
            <div className='LifestyleManagement col-lg-12 col-sm-12'>
                <div className='hrDashboard-HeaddingTxt'>
                    <h6>Life Style Management</h6>
                </div>
                <div className='LifestyleManagementBarchat'>
                    <ResponsiveContainer height={250} width={isMobileDevice ? 280 : 600}>
                        <BarChart
                            // width={750}
                            // height={250}
                            data={data}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                            }}
                            barSize={20}
                        >
                            <XAxis style={{ fontSize: "0.6em" }} dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                            <YAxis style={{ fontSize: "0.6em" }} />
                            {/* <Tooltip />
                    <Legend /> */}
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} >
                                <LabelList

                                    valueAccessor={props => {

                                        const { value } = props;

                                        return Array.isArray(value) ? value[1] - value[0] + "%" : value + "%";

                                    }}

                                    position={'top'}

                                    style={{ fontSize: "0.6em" }}

                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Col>
    )
}

