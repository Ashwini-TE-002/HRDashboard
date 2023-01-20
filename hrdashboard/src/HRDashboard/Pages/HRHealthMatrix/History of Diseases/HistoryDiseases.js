import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    // Legend,
} from 'chart.js';
import './HistoryDiseases.moudle.css'
import { Bar } from 'react-chartjs-2';
import { useMediaQuery } from 'react-responsive'

export default function HistoryDiseases(props) {

    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
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
            datalabels: {
                display: true,
                color: "black",
                formatter: Math.round,
                anchor: "end",
                offset: -20,
                align: "start"
            },
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                // text: 'Chart.js Horizontal Bar Chart',
            },
        },
    };

    const data = {
        labels: props.data.label,
        datasets: [
            {
                // label: 'My First dataset',
                backgroundColor: '#467EEA',
                borderColor: '#467EEA',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: props.data.value,
                datalabels: {
                    display: "auto",
                    align: "right"
                }
            }
        ]
    };


    return (
        <div className='HistoryDiseases'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>History of diseases</h6>
            </div>
            <div className='HistoryDiseases_graphBar'>
                <Bar options={options} width={40} height={isMobileDevice ? 30 : 20} data={data} />
                {/* <Bar options={options} width={40} height={20} data={data} /> */}
            </div>
        </div>
    )
}
