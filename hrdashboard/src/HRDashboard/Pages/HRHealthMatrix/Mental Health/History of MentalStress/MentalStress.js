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
// import './HistoryDiseases.moudle.css'
import '../../History of Diseases/HistoryDiseases.moudle.css'
import { Bar } from 'react-chartjs-2';


export default function MentalStress(props) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        // Tooltip,
        // Legend
    );

    const MentalStressoptions = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 1,
            },
        },
        responsive: true,
        plugins: {
            // legend: {
            //     position: 'right',
            // },
            title: {
                display: true,
                // text: 'Chart.js Horizontal Bar Chart',
            },
        },
    };

    const MentalStressdata = {
        labels: props.data.label,
        datasets: [
            {
                // label: {...labels},
                backgroundColor: '#467EEA',
                borderColor: '#467EEA',
                borderWidth: 1,
                hoverBackgroundColor: '#ADD8E6',
                hoverBorderColor: '#0047AB',
                data: props.data.value,
            },
            // hover changing color
            // { 
            //     label: 'My First dataset 2',
            //     backgroundColor: 'rgba(255,99,132,0.2)',
            //     borderColor: 'rgba(255,99,132,1)',
            //     borderWidth: 1,
            //     hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            //     hoverBorderColor: 'rgba(255,99,132,1)',
            //     data: [65, 59, 80, 81, 56, 55, 40]
            // }
        ]
    };


    return (
        <div className='HistoryDiseases'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>History of  Mental Stress </h6>
            </div>
            <div className='HistoryDiseases_graphBar'>
                <Bar options={MentalStressoptions} width={40} height={20} data={MentalStressdata} />
            </div>
        </div>
    )
}
