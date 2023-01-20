import React from 'react'
import './EnergyRateGraph.moudle.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList, } from 'recharts';
import { useMediaQuery } from 'react-responsive'
import '../../../../HRDashboard Responsiveness/HrResponsiveness.css'

export default function EnergyRateGraph(props) {
    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });
    const data = props.data;

    return (
        <div className='EnergyRateGraph'>
            <div>
                <div className='hrDashboard-HeaddingTxt'>
                    <h1>Energy Rate of last four months</h1>
                </div>
                <div className='flex justify-content-end  mt-3 mb-3 mr-4'>
                    <div className='flex align-items-center  mr-4'>
                        <div className='greencolor'></div>
                        <span>Yes</span>
                    </div>
                    <div className='flex align-items-center'>
                        <div className='redcolor'></div>
                        <span>No</span>
                    </div>
                </div>
            </div>
            <div>
                <ResponsiveContainer height={250} >
                    <BarChart
                        width={isMobileDevice ? 280 : 750}
                        height={200}
                        data={data}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" style={{ fontSize: "0.6em" }} />
                        <YAxis style={{ fontSize: "0.6em" }} />
                        <Tooltip cursor={false} />
                        {/* <Legend /> */}
                        <Bar dataKey="energy" barSize={13} fill="#49DEB2" background={{ fill: '#eee' }} radius={20}>
                            <LabelList
                                valueAccessor={props => {
                                    const { value } = props;
                                    return Array.isArray(value) ? value[1] - value[0] + "%" : value + "%";
                                }}
                                position={'top'}
                                style={{ fontSize: "0.6em" }}
                            />
                        </Bar>
                        <Bar dataKey="lethargy" barSize={13} fill="#FA3B4E" radius={20}>
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
    )
}
