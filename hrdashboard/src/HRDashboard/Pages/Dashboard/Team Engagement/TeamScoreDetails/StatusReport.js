import React from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../TeamEngagement.moudle.css'
import { BsTriangleFill } from 'react-icons/bs'
import { Col, Row } from 'react-bootstrap'

ChartJS.register(ArcElement);

export default function StatusReport(props) {

    const data = {
        datasets: [{
            data: props.teamHealthData.value,
            backgroundColor: [
                '#49DEB2',
                '#FFB200',
                '#FA3B4E',
                // '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#49DEB2',
                '#FFB200',
                '#FA3B4E',
            ]
        }],
        text: '23%'
    };

    const styles = {
        color: "49DEB2",
        marginRight: "10px"
    }
    return (
        <Col className='WorkplaceRateDonetChat col-lg-3 mr-5'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Workplace Comfortness  Rate</h6>
            </div>
            {/* content */}
            <div>
                <div className='StatusReport-DonetChart'>
                    <Doughnut
                        data={data}

                        options={{
                            responsive: true,
                        }}
                    />
                </div>
                <div className="flex flex-column mt-3">
                    <div className="flex align-items-center">
                        <div className="Healthgreen"></div>
                        <span>{props.teamHealthData.value[0]}% Low Risk</span>
                    </div>
                    <div className="flex align-items-center">
                        <div className="Healthyellow"></div>
                        <span>{props.teamHealthData.value[1]}% Moderate Risk</span>
                    </div>
                    <div className="flex align-items-center">
                        <div className="Healthred"></div>
                        <span>{props.teamHealthData.value[2]}% At Risk</span>
                    </div>
                </div>
            </div>
        </Col>
    )
}


