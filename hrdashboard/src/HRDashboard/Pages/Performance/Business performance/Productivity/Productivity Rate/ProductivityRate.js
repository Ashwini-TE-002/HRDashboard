import React from 'react'
import GaugeChart from 'react-gauge-chart'
import ArrowUp from '../../../../../../assets/HrDahsboard/Vector.png'

const ProductivityRate = () => {

    const chartStyle = {
        width: 270,
    };

    return (
        <div className="Energymoudle">
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Productivity Rate</h6>
            </div>
            <div>
                <GaugeChart id="gauge-chart5"
                    style={chartStyle}
                    nrOfLevels={420}
                    arcsLength={[0.3, 0.3, 0.3]}
                    colors={['#EA4228', '#F5CD19', '#5BE12C']}
                    percent={0.80}
                    hideText={true}
                    arcPadding={0.03}
                />
            </div>
            <div className='ratingMeter-Txt'>
                <h1 className='text-center'>80%</h1>
                <div className='text-center'>
                    <img src={ArrowUp} alt='/' className='percentgeArrow' />
                    <span className='energy_score'>20%</span>
                    <span>Since last month</span>
                </div>
            </div>
        </div>
    )
}

export default ProductivityRate