import React from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './JobSatisfaction.moudle.css'

export default function JobSatisfaction(props) {

    ChartJS.register(ArcElement);

    const data = {
        labels: ['Satisfied', 'Average', 'Unsatisfied'],
        responsive: true,
        datasets: [
            {
                data: props.data.value,
                backgroundColor: [
                    '#49DEB2',
                    '#FFC727',
                    '#FA3B4E',
                ],
                borderColor: [
                    '49DEB2',
                    '#FFC727',
                    '#FA3B4E',

                ],
                borderWidth: 0,

            },

        ],
    };

    return (
        <div className='JobSatisfaction-Wrapper'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Job Satisfaction</h6>
            </div>
            {/* content */}
            <div>
                <div className='doughnutchat-Main'>
                    <Pie width={70} height={70} data={data} />
                </div>

                <div className='Workplace-Rate-Data'>
                    <div className='JobSatisfaction mt-3 flex justify-content-between ali'>
                        <div className='flex items-center'>
                            <div className='Satisfied'></div>
                            <div className='flex ml-1'>
                                <span>{props.data.value[0]}%</span>
                                <span>Satisfied</span>
                            </div>
                        </div>
                        <div className='flex items-center ml-1'>
                            <div className='Average'></div>
                            <div className='flex'>
                                <span>{props.data.value[1]}%</span>
                                <span>Average</span>
                            </div>
                        </div>
                        <div className='flex align-items-center justify-content-center ml-1'>
                            <div className='Unsatisfied'></div>
                            <div className='flex'>
                                <span>{props.data.value[2]}%</span>
                                <span>Unsatisfied</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
