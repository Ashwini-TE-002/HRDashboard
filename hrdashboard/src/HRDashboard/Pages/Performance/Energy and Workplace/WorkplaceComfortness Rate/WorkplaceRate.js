import React from 'react'
import './WorkplaceRate.moudle.css'
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BsTriangleFill } from 'react-icons/bs'
import { ArrowDown, ArrowUp } from 'react-bootstrap-icons';

ChartJS.register(ArcElement);

export default function WorkplaceRate(props) {
    const responsedata = props.data;

    const data = {
        datasets: [{
            data: [responsedata.team_workcomfort_rate.happy, responsedata.team_workcomfort_rate.unhappy],
            backgroundColor: [
                '#49DEB2',
                '#FA3B4E',
                // '#FFCE56'
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
        <div className='WorkplaceRateDonetChat'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Workplace Comfortness  Rate</h6>
            </div>
            {/* content */}
            <div>
                {/* <Doughnut data={data} width={100} height={100} />
                 */}
                <div className='doughnutchat-Main'>
                    <Doughnut
                        data={data}

                        options={{
                            responsive: true,
                        }}
                    />
                </div>

                <div className='Workplace-Rate-Data'>
                    <div className='text-center mt-3'>
                        {
                            (responsedata.team_workcomfort_status === "increased") ?
                                <img src={ArrowUp} alt='/' className='percentgeArrow' />
                                : <img src={ArrowDown} alt='/' className='percentgeArrow' />
                        }
                        <span className='energy_score'>{responsedata.team_workcomfort_percent}%</span>
                        <span>Since last month</span>
                    </div>
                    <div className='workplace-inform mt-3 flex justify-content-between'>
                        <div className='flex items-center'>
                            <div className='green'></div>
                            <span>{responsedata.team_workcomfort_rate.happy}% Happy</span>
                        </div>
                        <div className='flex items-center ml-1'>
                            <div className='red'></div>
                            <span>{responsedata.team_workcomfort_rate.unhappy}% UnHappy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
