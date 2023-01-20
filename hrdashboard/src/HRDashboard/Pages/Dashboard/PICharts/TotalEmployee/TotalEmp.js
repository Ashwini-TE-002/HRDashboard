import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import './TotalEmployes.moudle.css'
import { Col, Contaner, Row } from 'react-bootstrap'
import '../../../../HRDashboard Responsiveness/HrResponsiveness.css'

export default function TotalEmp(teamSubscriptionData) {
    console.log(teamSubscriptionData)

    const subscriptionData = teamSubscriptionData.teamSubscriptionData;
    const unsubscribers = subscriptionData?.team_unsubscription_percent;
    const subscribers = subscriptionData?.team_subscription_percent;

    const data = [
        { name: "Unsubscribers", value: unsubscribers },
        { name: "Subscribers", value: subscribers }
    ];

    const COLORS = ['#FA3B4E', '#49DEB2', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className='TotalEmployeesRatio'>
            <div>
                <div className='hrDashboard-HeaddingTxt'>
                    <h6>Total Employee</h6>
                </div>
                <div className="CompanyDemographicsPieChart">
                    <ResponsiveContainer width={200} height="85%" className="ResponsiveContainerRecharts">
                        {/* <ResponsiveContainer width="100%" height="100%" className="m-0"> */}
                        <PieChart>
                            <Pie
                                data={data}
                                cx={100}
                                cy={100}
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className='TotalEmployees'>
                    <div className='flex items-center'>
                        <div className='subscribers'></div>
                        <span>{subscriptionData?.team_subscription_count} Subscribers</span>
                    </div>
                    <div className='flex items-center'>
                        <div className='unsubscribers'></div>
                        <span>{subscriptionData?.team_unsubscription_count} Unsubscribers</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
