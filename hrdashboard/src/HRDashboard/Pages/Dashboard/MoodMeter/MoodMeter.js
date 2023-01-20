import React, { useState } from 'react'
import './MoodMeter.moudle.css'
import { MdKeyboardArrowRight } from 'react-icons/md'
// import { Link } from 'react-router-dom'
// import Emoji from '../../../../assets/HrDahsboard/Happy.png'
import HappyEmoji from '../../../../assets/HrDahsboard/happy.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Modal from 'react-bootstrap/Modal';
import { GrClose } from 'react-icons/gr'
import Happymood from './Happymood'
import { Col, Row } from 'react-bootstrap'

export default function MoodMeter(teamMood) {
    const teamMoodData = teamMood.teamMoodData;
    // model popup
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='MoodMeter_wrapper'>
                <div className='hrDashboard-HeaddingTxt'>
                    <h6>Mood Meter</h6>
                </div>
                <div className='MoodMeter_Ratio'>
                    <div className='mood_meter-circlebar'>
                        <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                            <div style={{ position: 'absolute', width: '100%', top: '0px', left: '12px' }}>
                                <svg width="76" height="100" viewBox="0 0 1788 1723" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M893.631 1722.55C463.764 1722.55 0 1452.92 0 861.275C0 269.63 463.764 0 893.631 0C1132.45 0 1352.77 78.5779 1516.09 221.867C1693.28 379.023 1787.26 600.89 1787.26 861.275C1787.26 1121.66 1693.28 1341.99 1516.09 1499.14C1352.77 1642.43 1130.91 1722.55 893.631 1722.55Z" fill="url(#paint0_radial_801_1868)" />
                                    <path d="M1631.5 349.285C1713.62 481.789 1756.45 639.561 1756.45 815.052C1756.45 1075.44 1662.47 1295.76 1485.28 1452.92C1321.96 1596.21 1100.1 1676.33 862.821 1676.33C584.563 1676.33 292.746 1563.08 120.491 1322.88C286.275 1594.98 598.121 1722.55 893.636 1722.55C1130.91 1722.55 1352.78 1642.43 1516.1 1499.14C1693.28 1341.99 1787.27 1121.66 1787.27 861.274C1787.27 664.983 1733.8 490.571 1631.5 349.285V349.285Z" fill="#EB8F00" />
                                    <path d="M1187.15 410.133C1245.86 410.133 1299.01 497.185 1299.01 641.244C1299.01 785.304 1245.86 872.356 1187.15 872.356C1128.61 872.356 1075.45 785.458 1075.45 641.244C1075.45 497.031 1128.61 410.133 1187.15 410.133Z" fill="#422B0D" />
                                    <path d="M611.208 410.133C548.808 410.133 491.954 497.185 491.954 641.244C491.954 785.304 548.808 872.356 611.208 872.356C673.762 872.356 730.615 785.458 730.615 641.244C730.615 497.031 673.762 410.133 611.208 410.133Z" fill="#422B0D" />
                                    <path d="M607.835 466.677C589.192 455.43 565.002 461.593 553.755 480.236C553.446 480.852 552.984 481.468 552.676 482.085C538.501 498.57 540.196 523.531 556.682 537.705C557.144 538.168 557.607 538.476 558.223 538.938C576.712 550.185 600.901 544.176 612.149 525.688C612.611 524.917 612.919 524.301 613.381 523.53C627.556 506.89 625.707 481.93 609.067 467.756C608.605 467.293 608.297 466.985 607.835 466.677Z" fill="#896024" />
                                    <path d="M1195.76 466.683C1176.96 455.59 1152.62 461.752 1141.53 480.55C1141.22 481.012 1140.91 481.628 1140.6 482.09C1126.58 498.884 1128.89 523.69 1145.69 537.711C1145.84 537.865 1146.15 538.019 1146.3 538.173C1164.79 549.421 1188.98 543.412 1200.23 524.923C1200.69 524.153 1201 523.536 1201.46 522.766C1215.48 505.972 1213.17 481.166 1196.38 467.145C1196.22 466.991 1195.91 466.837 1195.76 466.683Z" fill="#896024" />
                                    <path d="M1486.36 995.62C1464.79 956.639 1417.95 939.537 1376.35 955.253C1218.27 1001.32 1054.34 1024.28 889.633 1023.51C724.928 1024.28 560.993 1001.32 402.913 955.253C361.467 939.537 314.628 956.485 293.058 995.312C272.104 1033.98 287.203 1078.82 304.922 1117.49C403.837 1334.74 621.852 1464.78 888.401 1465.55H890.866C1157.41 1465.55 1375.43 1334.74 1474.5 1117.49C1492.06 1078.51 1507.32 1034.29 1486.36 995.62V995.62Z" fill="#422B0D" />
                                    <path d="M1136.29 1404.22C1130.59 1398.98 1124.73 1394.2 1118.88 1388.81C1056.02 1333.5 974.666 1303.76 890.849 1305.46C804.568 1304.07 720.597 1332.73 653.267 1386.65C647.412 1391.43 641.249 1396.05 635.548 1402.06C629.848 1408.07 626.766 1412.38 623.068 1417.47C707.809 1450.6 798.097 1467.54 889.155 1467.08H891.62C978.826 1467.08 1065.26 1451.52 1146.92 1420.86C1143.84 1415 1140.3 1409.46 1136.29 1404.22Z" fill="#ED7770" />
                                    <path d="M1376.35 955.257C1218.27 1001.33 1054.34 1024.28 889.634 1023.51C724.928 1024.28 560.993 1001.33 402.913 955.257C361.467 939.542 314.629 956.49 293.058 995.317C289.977 1001.17 287.511 1007.33 285.971 1013.65C291.055 1016.27 296.91 1018.89 303.843 1021.66C489.349 1114.57 694.422 1161.72 901.806 1159.25C1100.72 1161.56 1297.31 1118.27 1476.96 1032.91C1484.21 1029.83 1490.22 1026.9 1495.61 1024.13C1494.38 1014.11 1491.14 1004.25 1486.36 995.317C1464.79 956.49 1417.95 939.388 1376.35 955.257V955.257Z" fill="white" />
                                    <path d="M1486.98 995.774C1465.1 956.793 1418.11 939.537 1376.2 955.253C1218.12 1001.32 1054.18 1024.28 889.633 1023.51C724.928 1024.28 560.993 1001.32 402.913 955.253C361.467 939.537 314.628 956.485 293.058 995.312C272.104 1033.98 287.203 1078.82 304.922 1117.49C312.779 1134.9 321.562 1152.01 331.268 1168.49C331.268 1168.49 298.913 1048.62 326.954 1013.8C336.507 999.01 352.531 989.765 370.095 988.841C377.336 988.841 384.424 990.074 391.357 992.231C552.211 1039.53 719.073 1063.41 886.86 1063.1H892.253C1060.04 1063.41 1226.9 1039.53 1387.76 992.231C1394.69 990.074 1401.78 988.841 1409.02 988.841C1426.58 989.765 1442.76 999.01 1452.31 1013.8C1480.82 1048.62 1448 1168.95 1448 1168.95C1457.55 1152.47 1467.1 1135.52 1475.12 1117.96C1492.68 1079.28 1507.93 1034.6 1486.98 995.774V995.774Z" fill="#EB8F00" />
                                    <defs>
                                        <radialGradient id="paint0_radial_801_1868" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(893.631 861.275) scale(877.602 877.602)">
                                            <stop offset="0.5" stop-color="#FDE030" />
                                            <stop offset="0.92" stop-color="#F7C02B" />
                                            <stop offset="1" stop-color="#F4A223" />
                                        </radialGradient>
                                    </defs>
                                </svg>

                            </div>
                            <div style={{ position: 'absolute' }}>
                                <CircularProgressbar
                                    value={teamMoodData?.team_mood_percentage}
                                    // text={HappyEmoji}
                                    textForPercentage={null}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'butt',
                                        textSize: '27px',
                                        pathTransitionDuration: 0.5,
                                        // pathColor: `#08BE80, ${percentage / 100})`,
                                        textColor: '#08BE80',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#08BE80',
                                    })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='Mood-TextBox mt-2'>
                        <h1>{teamMoodData?.team_mood} !</h1>
                        <span className='mt-2'>{teamMoodData?.team_mood_percentage}% people feel {teamMoodData?.team_mood} working here.</span>
                        <div className='flex justify-content-end mt-2'>
                            <button className="moodmeterPopup" onClick={handleShow}>
                                View Details <MdKeyboardArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* model popup */}
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Body className='eventmoudleBody'>
                    <div className='flex justify-content-end'>
                        <button className='eventMoudleCloseBtn' onClick={handleClose}>
                            <GrClose color='#FA3B4E' size={20} /></button>
                    </div>
                    <div className='event-moudlePopupbody'>
                        <Happymood />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

