import React from 'react'
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, linearGradient, ResponsiveContainer, defs, stop
} from 'recharts';
import { useMediaQuery } from 'react-responsive'


export default function TotalRedZoneChart(props) {

    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });

    return (
        <div className='redzoneChart'>
            <ResponsiveContainer height={300} width={isMobileDevice ? 250 : 600}>
                <AreaChart
                    width={600}
                    height={300}
                    data={props.data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="2%" stopColor="#FA3B4E33" stopOpacity={0.8} />
                            <stop offset="98%" stopColor="#FA3B4E33" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="2%" stopColor="#FA3B4E33" stopOpacity={0.8} />
                            <stop offset="98%" stopColor="#FA3B4E33" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical="" stroke="#243240" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: "#FA3B4E", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={true} />
                    <Area type="monotone" dataKey="value" stroke="#FA3B4E" fillOpacity={1} fill="url(#colorUv)" strokeWidth="5" dot={{ fill: "#FA3B4E", stroke: "#FA3B4E", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#FA3B4E", stroke: "#FA3B4E", strokeWidth: 5, r: 10 }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
