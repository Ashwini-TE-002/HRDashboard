import React from 'react'
import "./EnergyLevel.moudle.css"
// import Settings from '../../../../../assets/HrDahsboard/Settings.png'
import { Container, Col, Row } from 'react-bootstrap'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ArrowUp from '../../../../../assets/HrDahsboard/Vector.png'
import { useNavigate } from 'react-router-dom';
import { ArrowDown } from 'react-bootstrap-icons';


export default function EnergyLevel(props) {
    const data = props.data;
    const EnergyValue = data.team_avg_energy_rate;

    // onclick navigate to Energy and workplace
    // let goBack = useNavigate();
    // function backToPerformancePage(e) {
    //     e.preventDefault();
    //     let pathUrl = "/Performance"
    //     goBack(pathUrl)
    // }


    // onclick navigate to Energy and workplace
    let openTab = useNavigate();
    function openEnergyAndWorkPage(e) {
        e.preventDefault();
        let openUrl = "/EnergyAndWorkplace"
        openTab(openUrl)
    }

    return (
        <div className='progressEnergy-pBar ml-1 mr-1' onClick={openEnergyAndWorkPage} >
            <div className='hrDashboard-HeaddingTxt'>
                <h6>Energetic</h6>
            </div>
            <div className='flex'>
                {/* <div className='energyProgressBar'>
                    <CircularProgressbar value={EnergyValue} text={Settings}
                        styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: 'butt',
                            textSize: '10px',
                            pathTransitionDuration: 0.5,
                            pathColor: `#08BE80, ${EnergyValue / 100})`,
                            textColor: '#08BE80',
                            trailColor: '#d6d6d6',
                            backgroundColor: '#08BE80',
                        })} />
                </div> */}
                <div className='mood_meter-circlebar'>
                    <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                        <div style={{ position: 'absolute', width: '100%', top: '5px', left: '1rem' }}>
                            <svg width="70" height="90" viewBox="0 0 2269 2272" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2257.61 950.343H2253.93C2195.1 950.343 2134.43 948.505 2075.6 950.343C2068.25 950.343 2062.73 950.343 2057.22 948.505C2033.32 827.184 1985.52 715.055 1919.33 613.955C1923.01 608.44 1930.36 601.087 1939.56 591.896C1980 551.456 2020.45 511.016 2060.89 470.576C1987.36 369.476 1899.11 281.243 1798 209.553C1755.71 251.832 1711.59 294.11 1669.31 338.227C1663.79 343.741 1658.28 347.417 1652.76 351.094C1553.48 284.919 1439.5 237.126 1318.16 213.23C1318.16 209.553 1316.32 205.877 1316.32 200.362C1318.16 169.113 1316.32 136.026 1316.32 104.777C1316.32 73.5275 1316.32 44.1165 1316.32 14.7055C1257.49 5.51456 1196.83 0 1134.32 0C1071.81 0 1011.14 5.51456 952.313 14.7055C954.152 44.1165 952.313 75.3657 952.313 104.777C952.313 136.026 952.313 169.113 952.313 200.362C952.313 205.877 952.313 209.553 950.475 213.23C829.138 237.126 715.154 284.919 615.878 351.094C610.363 349.256 604.848 343.741 599.332 338.227C557.048 294.11 514.764 251.832 472.48 209.553C371.365 281.243 283.12 369.476 209.582 470.576C250.028 511.016 290.474 551.456 330.92 591.896C340.112 601.087 347.466 608.44 351.142 613.955C284.959 713.217 237.159 825.346 213.259 948.505C207.744 950.343 202.229 950.343 194.875 950.343C136.045 948.505 75.3761 950.343 16.546 950.343H14.7075C5.51533 1011 0 1073.5 0 1136C0 1198.5 5.51533 1261 14.7075 1319.82C16.546 1319.82 20.2229 1319.82 22.0613 1319.82C84.5684 1319.82 147.075 1319.82 209.582 1319.82C211.421 1319.82 213.259 1319.82 215.098 1319.82C238.998 1442.98 288.635 1558.78 356.658 1658.05C354.819 1661.72 351.142 1663.56 347.466 1667.24C307.02 1705.84 266.574 1746.28 226.128 1786.72C220.613 1792.23 216.936 1795.91 213.259 1799.59C284.959 1898.85 373.204 1987.08 474.318 2058.77C476.157 2056.93 476.157 2056.93 477.995 2055.09C520.279 2010.98 564.402 1968.7 606.686 1924.58C610.363 1920.91 612.201 1919.07 615.878 1917.23C716.993 1983.4 830.976 2031.2 952.313 2055.09C954.152 2058.77 954.152 2064.28 954.152 2071.64C952.313 2132.3 954.152 2192.96 954.152 2253.62V2257.29C1012.98 2266.49 1073.65 2272 1134.32 2272C1196.83 2272 1255.66 2266.49 1314.49 2257.29V2253.62C1314.49 2192.96 1314.49 2132.3 1312.65 2071.64C1312.65 2066.12 1312.65 2060.61 1314.49 2055.09C1437.66 2031.2 1551.65 1983.4 1650.92 1917.23C1654.6 1919.07 1656.44 1922.74 1660.11 1924.58C1702.4 1968.7 1746.52 2010.98 1788.8 2055.09C1790.64 2056.93 1790.64 2056.93 1792.48 2058.77C1893.6 1987.08 1980 1898.85 2053.54 1799.59C2049.86 1795.91 2046.19 1792.23 2040.67 1786.72C2000.23 1746.28 1961.62 1705.84 1919.33 1667.24C1915.66 1663.56 1913.82 1659.88 1910.14 1658.05C1978.16 1556.94 2025.96 1442.98 2051.7 1319.82C2053.54 1319.82 2055.38 1319.82 2057.22 1319.82C2119.72 1319.82 2182.23 1319.82 2244.74 1319.82C2246.58 1319.82 2250.25 1319.82 2252.09 1319.82C2261.28 1259.16 2266.8 1198.5 2266.8 1136C2272.31 1073.5 2266.8 1011 2257.61 950.343ZM1422.95 1163.57C1415.6 1176.44 1404.57 1185.63 1391.7 1189.31C1382.51 1191.15 1242.79 1227.91 1152.7 1249.97L1128.8 1255.48L1246.46 1573.49L1248.3 1577.17C1264.85 1604.74 1257.49 1639.66 1229.92 1656.21C1202.34 1672.75 1167.41 1665.4 1150.86 1637.83L851.199 1167.25C840.168 1148.87 840.168 1126.81 849.36 1108.43C856.714 1093.72 869.583 1084.53 886.129 1080.85C891.645 1079.02 1031.37 1049.61 1121.45 1029.39L1147.19 1023.87L1025.85 698.511L1024.01 694.835C1007.47 667.262 1014.82 632.337 1042.4 615.793C1051.59 610.278 1062.62 606.602 1073.65 606.602C1092.03 606.602 1112.26 615.793 1121.45 632.336L1421.12 1104.75C1426.63 1113.94 1430.31 1124.97 1430.31 1136C1430.31 1145.19 1426.63 1154.38 1422.95 1163.57Z" fill="#7AB5D3" />
                            </svg>
                        </div>
                        <div style={{ position: 'absolute' }}>
                            <CircularProgressbar value={EnergyValue}
                                // text={}
                                styles={buildStyles({
                                    rotation: 0.25,
                                    strokeLinecap: 'butt',
                                    textSize: '10px',
                                    pathTransitionDuration: 0.5,
                                    pathColor: `#08BE80, ${EnergyValue / 100})`,
                                    textColor: '#08BE80',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#08BE80',
                                })} />
                        </div>
                    </div>
                </div>
                <div className='progressBar_txt'>
                    <div className='progressbar-BoxTxt'>
                        <span>Average Energetic rate</span>
                        <h1>{EnergyValue}%</h1>
                    </div>
                    <div>
                        {
                            (data.team_avg_energy_status === "increased") ? <img src={ArrowUp} className="avrageProScore" alt='/' />
                                : <img src={ArrowDown} className="avrageProScore" alt='/' />
                        }

                        <span className='energy_score'>{data.team_avg_energy_rate_percent}%</span>
                        <span>Since last month</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
