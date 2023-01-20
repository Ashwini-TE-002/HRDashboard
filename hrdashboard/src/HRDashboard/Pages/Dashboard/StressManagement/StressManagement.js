// import "./styles.css";
import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import './StressManagement.moudle.css'



export default function StressManagement(stressData) {
    const stressManagementData = stressData.stressData;
    const data = [
        {
            name: "low",
            level: stressManagementData.low_stress_level,
            fill: "#FA3B4E"
        },
        {
            name: "medium",
            level: stressManagementData.medium_stress_level,
            fill: "#FFC727"
        },
        {
            name: "high",
            level: stressManagementData.high_stress_level,
            fill: "#49DEB2"
        },
    ];


    return (
        <div className="Radialbar-chat">
            <div className="hrDashboard-HeaddingTxt">
                <h6>Stress Management</h6>
            </div>
            <div className="radialbar-wraping">
                <div className="radialbar-div">
                    {/* <ResponsiveContainer height={225}> */}
                    <RadialBarChart
                        width={165}
                        height={225}
                        cx={100}
                        cy={100}
                        innerRadius={25}
                        outerRadius={80}
                        barSize={9}
                        data={data}>
                        <RadialBar
                            minAngle={15}
                            background
                            clockWise
                            dataKey="level" />
                    </RadialBarChart>
                    {/* </ResponsiveContainer> */}
                </div>
                <div className="data-indicator mt-2">
                    <div className="flex mt-2 text-align-center">
                        <div className="first-indicator">
                        </div>
                        <div>
                            <h6 className="data-indicator-txt">{stressManagementData.low_stress_level}% of employees have Low stress</h6>
                        </div>
                    </div>
                    <div className="flex mt-3">
                        <div className="second-indicator">
                        </div>
                        <div>
                            <h6 className="data-indicator-txt">{stressManagementData.medium_stress_level}% of employees have Medium stress</h6>
                        </div>
                    </div>
                    <div className="flex mt-3">
                        <div className="third-indicator">
                        </div>
                        <div >
                            <h6 className="data-indicator-txt">{stressManagementData.high_stress_level}% of employees have High stress</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
