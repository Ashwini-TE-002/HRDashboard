import React, { useState } from "react";
import '../TotalEmployee/TotalEmployes.moudle.css'
import { GrClose } from 'react-icons/gr'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Modal from 'react-bootstrap/Modal';
import DemographicsBarchat from "./DemographicsBarchat";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Col, Row } from 'react-bootstrap'
import '../../../../HRDashboard Responsiveness/HrResponsiveness.css'
import { useMediaQuery } from 'react-responsive'

export default function CompanyDemographics(demography) {
    const demographyData = demography.demography;
    const malePercent = demographyData.male_percentage;
    const femalePercent = demographyData.female_percentage;
    const data = [
        { name: "Female", value: femalePercent },
        { name: "Male", value: malePercent }

    ];

    const COLORS = ['#75C1FF', '#FF85C0'];

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


    // company demography popup
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });

    return (
        <>
            <div className='CompanyDemographics'>
                <div className='companyChat'>
                    <div className='hrDashboard-HeaddingTxt'>
                        <h6>Company Demographics</h6>
                    </div>
                    <div className="CompanyDemographicsPieChart">
                        {/* <ResponsiveContainer width={200} height="85%" className="ResponsiveContainerRecharts"> */}
                        <ResponsiveContainer height={300} width={isMobileDevice ? 200 : 380}>
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
                    <div className='SubscribersEmp mt-5'>
                        <div className='flex items-center'>
                            <div className='male'></div>
                            <span>{demographyData.male}  Male</span>
                        </div>
                        <div className='flex items-center'>
                            <div className='female'></div>
                            <span>{demographyData.female} Female</span>
                        </div>
                        <div className='flex justify-content-end'>
                            <button className='Engagementscore-Details' onClick={handleShow}>View details <MdOutlineKeyboardArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>


            <Modal show={show} onHide={handleClose} className="eventManagementPopup">
                <Modal.Body className='eventmoudleBody'>
                    <div className='flex justify-content-end'>
                        <button className='eventMoudleCloseBtn' onClick={handleClose}>
                            <GrClose color='#FA3B4E' size={20} /></button>
                    </div>
                    <div className='event-moudlePopupbody p-2'>
                        <DemographicsBarchat />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}


