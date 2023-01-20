import React from 'react'
import './EnergyRate.moudle.css'
import GaugeChart from 'react-gauge-chart'
import ArrowUp from '../../../../../assets/HrDahsboard/Vector.png'
import { ArrowDown } from 'react-bootstrap-icons';
import '../../../../HRDashboard Responsiveness/HrResponsiveness.css'

export default function EnergyRate(props) {

    const chartStyle = {
        width: 270,
    };


    return (
        <div className='Energymoudle'>
            <div className='hrDashboard-HeaddingTxt'>
                <h1>Energy Rate</h1>
            </div>
            <div className='gaugeCharts-energyRate'>
                <GaugeChart id="gauge-chart5"
                    style={chartStyle}
                    textColor='#000'
                    nrOfLevels={420}
                    arcsLength={[0.3, 0.3, 0.3]}
                    colors={['#EA4228', '#F5CD19', '#5BE12C']}
                    percent={props.data.team_energy_rate}
                    hideText={true}
                    arcPadding={0.02}
                />
            </div>
            <div className='ratingMeter-Txt '>
                <h1 className='text-center'>{props.data.team_energy_rate}%</h1>
                <div className='text-center'>
                    {
                        (props.data.team_energy_rate_status === "increased") ?
                            <img src={ArrowUp} alt='/' className='percentgeArrow' />
                            : <img src={ArrowDown} alt='/' className='percentgeArrow' />
                    }

                    <span className='energy_score'>{props.data.team_energy_rate_percent}%</span>
                    <span>Since last month</span>
                </div>
            </div>
        </div >
    )
}



