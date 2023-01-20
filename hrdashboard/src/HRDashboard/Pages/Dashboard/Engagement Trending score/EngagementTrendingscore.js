import React from 'react'
import './EngagementTrendingscore.moudle.css'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, linearGradient, defs, stop, ResponsiveContainer
} from 'recharts';

export default function EngagementTrendingscore(teamEngagementScore) {
    const teamEngagementScoreData = teamEngagementScore.teamEngagementScore.engagement_trending_score


    return (
        <div className='hrDashboard-LineChat'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Engagement Trending score</h6>
            </div>
            {/* <ResponsiveContainer width="390px"
                height={450} className="ResponsiveLineChart"> */}
            <ResponsiveContainer width="95%" height={400}>
                <LineChart
                    // width={390}
                    // height={450}
                    data={teamEngagementScoreData}
                    margin={{
                        top: 5,
                        right: 0,
                        left: -38,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical="" stroke="#fff" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: "#006CFF", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={true} />
                    <Line type="monotone" dataKey="value" stroke="#006CFF" strokeWidth="3" dot={{ fill: "#006CFF", stroke: "#006CFF", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#006CFF", stroke: "#006CFF", strokeWidth: 5, r: 10 }} />
                </LineChart>
            </ResponsiveContainer>
            {/* </ResponsiveContainer> */}
        </div>
    )
}
