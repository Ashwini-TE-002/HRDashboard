import React, { useState } from 'react'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    Cell,
    ResponsiveContainer,
    LabelList
} from 'recharts'
import { MdKeyboardArrowUp } from 'react-icons/md'
import './EventsGraph.moudle.css'
import { useMediaQuery } from 'react-responsive'

export default function EventsGraph(props) {

    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });

    const graphData = props.data.events_count_graph_data;

    const [focusBar, setFocusBar] = useState(null);
    return (
        <div className='eventsgraph'>
            <div>
                <div>
                    <div className='eventsSub-Txt'>
                        <h6>Events</h6>
                        <span className='events-ratio'>{props.data.events_count_percent}%
                            {
                                (props.data.events_count_status === "increased") ? <MdKeyboardArrowUp /> : <MdKeyboardArrowUp />
                            }
                        </span>
                    </div>
                    <div></div>
                </div>
                <div>
                    <ResponsiveContainer height={210} >
                        <ComposedChart
                            width={350}
                            height={210}
                            data={graphData}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                            }}
                            onMouseMove={(state) => {
                                if (state.isTooltipActive) {
                                    setFocusBar(state.activeTooltipIndex);
                                } else {
                                    setFocusBar(null);
                                }
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                            <XAxis dataKey="name" scale="band" style={{ fontSize: "0.6em" }} />
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
