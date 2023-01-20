import React, { useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import './RightNavbar.moudle.css'
import { useNavigate } from 'react-router-dom';
import '../HRDashboard Responsiveness/HrResponsiveness.css'
import { useMediaQuery } from 'react-responsive'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'



const RightNavBar = (data) => {
    const teamData = data.rightSideData;
    const complianceData = teamData.team_compliance
    const teamEngagementData = teamData.team_enagagement_data;
    // view Survey
    let openTeamReports = useNavigate();
    function openReports(e) {
        e.preventDefault();
        let openLink = "/TeamReports"
        openTeamReports(openLink)
    }

    // rightsidebar
    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });
    const [showRightSideNav, setShowRightSideNav] = useState(false);
    const showRightSideNavbar = () => {
        setShowRightSideNav(true)
    }
    const hideRightSideNavbar = () => {
        setShowRightSideNav(false)
    }
    return (
        <>
            {
                isMobileDevice === true ?
                    showRightSideNav === false ?
                        <div className={`arrowIcon ${showRightSideNav === true ? "show" : ""}`} onClick={showRightSideNavbar}><BsFillArrowLeftCircleFill /></div> : ""
                    : ""
            }
            <div className={`right-navbar ${showRightSideNav === true ? "show" : ""}`}>
                {
                    isMobileDevice === true ?
                        showRightSideNav === true ?
                            <div className={`closeIcon ${showRightSideNav === true ? "show" : ""}`} onClick={hideRightSideNavbar}><AiFillCloseCircle /></div> :
                            "" : ""

                    // (isMobileDevice === true && showRightSideNav === true) ? <div className={`closeIcon ${showRightSideNav === true ? "show" : ""}`} onClick={hideRightSideNavbar}><AiFillCloseCircle /></div> : ""
                }
                <div className='right-sideInformaction'>
                    <div className='hrDashboard-HeaddingTxt'>
                        <h6>Employees Compliance</h6>
                        {/* <div>
                            <EmployeesCompliace />
                        </div> */}
                        <div className='SecondProgressbar mt-4'>
                            <ProgressBar labelSize={10} width={200} height={15} baseBgColor='transparent' bgColor='#96289C' borderRadius={8} completed={complianceData.top_compliance} />
                        </div>
                    </div>

                    {/* second  */}
                    <div>
                        <div className='SecondProgressbar mt-4'>
                            <ProgressBar labelSize={10} width={200} height={15} className="firstProgressbar" baseBgColor='transparent' bgColor='#8E71D3' borderRadius={8} completed={complianceData.low_compliance} />
                        </div>
                    </div>
                    <div className='compliace-overview'>
                        <div className='compliance flex align-items-center mt-3'>
                            <div className='TopCompliance'></div>
                            <span className='ml-1'>Top Compliance</span>
                        </div>
                        <div className='compliance flex align-items-center'>
                            <div className='LowCompliance'></div>
                            <span className='ml-1'>Low Compliance</span>
                        </div>
                    </div>
                </div>

                <div className='right-sideInformaction'>
                    <div className='hrDashboard-HeaddingTxt'>
                        <h6>Team Engagement</h6>
                    </div>
                    <div className='Team-Progressbar mt-2'>

                        {
                            teamEngagementData.length > 0 ?
                                teamEngagementData.map((item, i) =>

                                    <div key={i}>
                                        <span className='Team-ProgressbarName'>{item.team_name}</span>
                                        <div className='survayprogreebar'>
                                            <ProgressBar labelSize={0} width={160} height={10} baseBgColor='#49DEB2' bgColor='#33A382' borderRadius={8} completed={item.engagement_percent} />
                                            <span className='energy_score ml-1'>{item.engagement_percent}%</span>
                                        </div>
                                    </div>
                                )
                                : ""
                        }


                        {/* <div className='mt-3 mb-3'>
                            <span className='Team-ProgressbarName'>UXUI Team</span>
                            <div className='survayprogreebar'>
                                <ProgressBar labelSize={0} width={160} height={10} baseBgColor='#49DEB2' bgColor='#33A382' borderRadius={8} completed={44.4} />
                                <span className='energy_score ml-1'>20%</span>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <span className='Team-ProgressbarName'>UXUI Team</span>
                            <div className='survayprogreebar'>
                                <ProgressBar labelSize={0} width={160} height={10} baseBgColor='#49DEB2' bgColor='#33A382' borderRadius={8} completed={70} />
                                <span className='energy_score ml-1'>70%</span>
                            </div>
                        </div>
                        <div className=' mb-3'>
                            <span className='Team-ProgressbarName'>UXUI Team</span>
                            <div className='survayprogreebar'>
                                <ProgressBar labelSize={0} width={160} height={10} baseBgColor='#49DEB2' bgColor='#33A382' borderRadius={8} completed={20} />
                                <span className='energy_score ml-1'>20%</span>
                            </div>
                        </div>
                        <div>
                            <span className='Team-ProgressbarName'>UXUI Team</span>
                            <div className='survayprogreebar'>
                                <ProgressBar labelSize={0} width={160} height={10} baseBgColor='#49DEB2' bgColor='#33A382' borderRadius={8} completed={80} />
                                <span className='energy_score ml-1'>80%</span>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div>
                    <button className='right-sidebarViewBtn' onClick={openReports}>
                        View Details
                    </button>
                </div>
            </div>
        </>
    )
}

export default RightNavBar