import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Hrleaderboard.moudle.css"
import UserAvatar from '../../../../assets/HrDahsboard/userAvatar.png'
import '../../../HRDashboard Responsiveness/HrResponsiveness.css'

export default function HrLeaderboard(leaderboard) {
    const leaderboardInfo = leaderboard.leaderboardData;
    return (
        <div className='leaderboard-lists'>
            <div className='hrDashboard-HeaddingTxt'>
                <h6>LeaderBoard</h6>
            </div>
            <div className='dshbrd-leaderbrd-view'>
                <div className='dsh_leader-txt'>Rank</div>
                <div className='dsh_leader-txt'>Team</div>
                <div className='dsh_leader-txt'>Points</div>
                {/* <div className='dsh_leader-txt'>Active Plan</div> */}
            </div>
            {
                leaderboardInfo.length > 0 ?
                    (leaderboardInfo.map((item, i) =>

                        <div className='hrleaderboard-content' key={i}>
                            {/* rank */}
                            <div>
                                <div className='leadRank ml-1'>
                                    <span>{i + 1}</span>
                                </div>
                            </div>
                            {/* user */}
                            <div>
                                <div className='Dashbrd-user-info'>
                                    {/* <div>
                                                        <img src={UserAvatar} className="userAvatar" alt="/" />
                                                    </div> */}
                                    <div className='ml-1'>
                                        <span className='dsh_userTxt'>{item.team_name}</span>
                                    </div>
                                </div>
                            </div>
                            {/* Points */}
                            <div className='leader-Points'>
                                <div>
                                    <span className='dsh_userTxt'>{item.points}</span>
                                </div>
                            </div>
                            {/* Active plan */}
                            {/* <div>
                                <div>
                                    <span className='dsh_userTxt'>{item.active_plan}</span>
                                </div>
                            </div> */}
                        </div>
                    ))
                    : ""
            }

        </div>
    )
}
