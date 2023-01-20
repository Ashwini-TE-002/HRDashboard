import React from 'react'
import './ActivityRespondents.moudle.css'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

export default function ActivityRespondents(props) {
    const graphData = props.data.respondent_graph_data;

    return (
        <div className='ActivityRespondents'>
            <div>
                <div className='eventsSub-Txt'>
                    <h6>Activity Respondents</h6>
                    <span className='events-ratio'>{props.data.emp_respondent_count_percent}% <MdKeyboardArrowUp /></span>
                </div>
            </div>
            <div className='ActivityRespondents-bar'>
                <ResponsiveContainer height={200}>
                    <BarChart
                        width={300}
                        height={200}
                        data={graphData}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" style={{ fontSize: "0.6em" }} />
                        {/* <YAxis /> */}
                        {/* <Tooltip />
                    <Legend /> */}
                        <Bar dataKey="value" fill="#3CAEA3" barSize={13} >
                            <LabelList
                                valueAccessor={props => {
                                    const { value } = props;
                                    return Array.isArray(value) ? value[1] - value[0] + "%" : value + "%";
                                }}
                                position={'top'}
                                style={{ fontSize: "0.6em" }}
                            />
                        </Bar>
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
