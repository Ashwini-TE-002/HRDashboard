import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import './WorkspaceOverview.moudle.css'
import { useMediaQuery } from 'react-responsive'


export default function WorkspaceOverview(props) {

    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });
    // console.log(props)

    // const CustomTooltip = ({ active, payload, label }) => {
    //     if (active && payload && payload.length) {
    //         return (
    //             <div className="custom-tooltip">
    //                 <p className="label">{`${label} : ${payload[0].value}`}</p>
    //                 <p className="intro">{getIntroOfPage(label)}</p>
    //                 <p className="desc">Anything you want can be displayed here.</p>
    //             </div>
    //         );
    //     }

    //     return null;
    // };


    return (
        <div className='WorkspaceOverview-Bar'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Workspace comfortness Overview</h6>
            </div>

            <div className='mt-1'>
                <ResponsiveContainer height={250} >
                    <BarChart
                        width={isMobileDevice ? 280 : 750}
                        // width={750}
                        // height={250}
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" style={{ fontSize: "0.6em" }} scale="band" />
                        <YAxis style={{ fontSize: "0.6em" }} />
                        {/* <Tooltip content={<CustomTooltip />} /> */}
                        {/* <Legend /> */}
                        <Bar dataKey="value" barSize={20} fill="#FFC727" style={{ fontSize: "0.6em" }} >
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
