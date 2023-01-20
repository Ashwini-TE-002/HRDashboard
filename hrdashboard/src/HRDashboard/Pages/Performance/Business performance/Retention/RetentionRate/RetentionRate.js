import React from 'react'
import GaugeChart from 'react-gauge-chart'
import ArrowUp from '../../../../../../assets/HrDahsboard/Vector.png'


export default function RetentionRate() {

    const chartStyle = {
        width: 270,
    };

    return (
        <div className='Energymoudle'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Retention Rate</h6>
            </div>
            <div>
                <GaugeChart id="gauge-chart5"
                    style={chartStyle}
                    textColor='#000'
                    nrOfLevels={420}
                    arcsLength={[0.3, 0.3, 0.3]}
                    colors={['#EA4228', '#F5CD19', '#5BE12C']}
                    percent={0.50}
                    hideText={true}
                    arcPadding={0.02}
                />
            </div>
            <div className='ratingMeter-Txt '>
                <h1 className='text-center'>50%</h1>
                <div className='text-center'>
                    <img src={ArrowUp} alt='/' className='percentgeArrow' />
                    <span className='energy_score'>20%</span>
                    <span>Since last month</span>
                </div>
            </div>
        </div>
    )
}
