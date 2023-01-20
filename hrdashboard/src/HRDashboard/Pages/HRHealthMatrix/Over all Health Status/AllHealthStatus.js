import React from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Col } from 'react-bootstrap';

ChartJS.register(ArcElement);

export default function AllHealthStatus(props) {
    const responseData = props.data;
    const data = {
        datasets: [{
            data: [responseData.risk, responseData.lowRisk, responseData.moderateRisk],
            backgroundColor: [
                '#49DEB2',
                '#FA3B4E',
                '#FFB200'
            ],
            hoverBackgroundColor: [
                '#49DEB2',
                '#FA3B4E',
                // '#FFCE56'
            ]
        }],
        text: '23%'
    };

    const styles = {
        color: "49DEB2",
        marginRight: "10px"
    }

    return (

        <Col className='WorkplaceRateDonetChat-Col'>
            <div className='WorkplaceRateDonetChat  col-lg-12 col-sm-12'>
                <div className='hrDashboard-HeaddingTxt'>
                    <h6>Over all Health Status</h6>
                </div>
                {/* content */}
                <div>
                    <div className='doughnutchat-Main'>
                        <Doughnut
                            data={data}
                            options={{
                                responsive: true,
                                // cutoutPercentage: 20
                            }}
                        />
                    </div>

                    <div className='Workplace-Rate-Data'>
                        <div className='workplace-inform mt-3 flex justify-content-between flex-column'>
                            <div className='flex items-center'>
                                <div className='green'></div>
                                <span>{responseData.lowRisk}% Low Risk</span>
                            </div>
                            <div className='flex items-center'>
                                <div className='yellow'></div>
                                <span>{responseData.moderateRisk}% Moderate Risk</span>
                            </div>
                            <div className='flex items-center'>
                                <div className='red'></div>
                                <span>{responseData.risk}% At Risk</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}
