import React from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../Subsriptions.moudle.css'

export default function ActiveSubscription(props) {

    ChartJS.register(ArcElement);

    const data = {
        labels: props.data.label,
        responsive: true,
        Tooltip: false,
        Legend: false,
        datasets: [
            {
                data: props.data.value,
                backgroundColor: [
                    '#49DEB2',
                    '#FA3B4E',
                    '#FA3B4E',
                ],
                borderColor: [
                    '49DEB2',
                    '#FFC727',
                    '#FA3B4E',
                ],
                borderWidth: 0,
                Tooltip: {
                    display: false,
                }
            },

        ],
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    enabled: false // <-- this option disables tooltips
                }
            }
        }
    };

    return (
        <div className='subscriptionactiveDashboard'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Active Users</h6>
            </div>
            <div className='ActiveSubscriptionPieChat'>
                <Pie width={70} height={50} data={data} label={false} />
            </div>
            <div className='activeuserData'>
                <div className='flex'>
                    <div className='green'></div>
                    <span>{props.data.value[0]} Subscribers</span>
                </div>
                <div className='flex mt-2'>
                    <div className='red'></div>
                    <span>{props.data.value[1]} Unsubscribers</span>
                </div>
            </div>
        </div>
    )
}
