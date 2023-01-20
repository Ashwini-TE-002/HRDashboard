import React, { useState } from 'react'
import {
    ComposedChart, Line, Area,
    Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, Cell, ResponsiveContainer, LabelList
} from 'recharts'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
// import './EventsGraph.moudle.css'


export default function EventsGraphComponent(props) {
    const graphData = props.data.events_count_graph_data;
    const [focusBar, setFocusBar] = useState(null);
    return (
        <div className='eventsgraph'>
            <div>
                <div className='eventsSub-Txt'>
                    <h6>Events</h6>
                    <span className='events-ratio'>{props.data.events_count_percent}%
                        {
                            (props.data.events_count_status === "increased") ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
                        }
                    </span>
                </div>
                <div>
                    <ResponsiveContainer height={200}>
                        <ComposedChart
                            width={300}
                            height={200}
                            data={graphData}
                            margin={{
                                top: 20,
                                right: 0,
                                bottom: 0,
                                left: 0,
                            }}
                            onMouseMove={(state) => {
                                if (state.isTooltipActive) {
                                    setFocusBar(state.activeTooltipIndex);
                                } else {
                                    setFocusBar(null);
                                }
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" scale="band" />
                            {/* <YAxis /> */}
                            {/* 
                    <Legend /> */}
                            <Tooltip />
                            <Area type="monotone" dataKey="eventCount" fill="#E0EAFB" stroke="#8884d8" />
                            <Bar dataKey="eventCount" barSize={10} fill="#467EEA">
                                {graphData.map((entry, index) => (
                                    <Cell
                                        fill={focusBar === index ? "#2B5CE7" : "rgba(43, 92, 231, 0.2)"}
                                    />
                                ))}
                                <LabelList
                                    valueAccessor={props => {
                                        const { value } = props;
                                        return Array.isArray(value) ? value[1] - value[0] : value;
                                    }}
                                    position={'top'}
                                    style={{ fontSize: "0.6em" }}
                                />
                            </Bar>
                            {/* <Line type="monotone" dataKey="uv" stroke="#467EEA" /> */}
                            {/* <Scatter dataKey="cnt" fill="red" /> */}
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
