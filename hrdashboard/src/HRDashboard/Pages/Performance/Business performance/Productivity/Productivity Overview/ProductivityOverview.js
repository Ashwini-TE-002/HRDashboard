import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    // Tooltip,
    // Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './ProductivityOverview.moudle.css'

export default function ProductivityOverview() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        // Tooltip,
        // Legend
    );

    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 1,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                // text: 'Chart.js Horizontal Bar Chart',
            },
        },
    };

    const labels = ['Jan', 'Feb', 'Mar'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Average life expectancy',
                data: [
                    10, 20, 30
                ],
                // borderColor: 'rgb(255, 99, 132)',
                backgroundColor: '#08BE80',
            },
            {
                label: 'Metabolic Age',
                data: [
                    20, 40, 60
                ],
                // borderColor: 'rgb(53, 162, 235)',
                backgroundColor: '#FFC727',
            },

        ],
    };


    return (
        <div className='Productivity-Graph'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Productivity Overview</h6>
            </div>
            <div className='graphBar'>
                <Bar options={options} width={100} height={63} data={data} />
            </div>
        </div>
    )
}
