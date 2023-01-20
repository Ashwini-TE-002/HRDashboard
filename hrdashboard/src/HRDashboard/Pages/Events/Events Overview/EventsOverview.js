import React from 'react'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import './EventsOverview.moudle.css'
import ProgressBar from '@ramonak/react-progress-bar'
import NoDataFound from '../../../../Components/NoDataFound/NoDataFound'
import { useMediaQuery } from 'react-responsive'

export default function EventsOverview(props) {

    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });

    return (
        <div className='events_overview'>
            <div>
                <div className='flex align-items-center justify-content-between'>
                    <div className='hrDashboard-HeaddingTxt'>
                        <h6>Events Overview</h6>
                    </div>
                    <div className='calender-div'>
                        <BsFillCalendarDateFill color='#fff' />
                    </div>
                </div>
                <div className='EventNames'>
                    <div>
                        <h5 className='events-txtName'>Date & Time</h5>
                    </div>
                    <div>
                        <h5 className='events-txtName'>Event Name</h5>
                    </div>
                    <div>
                        <h5 className='events-txtName'>Responded %</h5>
                    </div>
                    {/* <div>
                        <h5 className='events-txtName'>Status</h5>
                    </div> */}
                </div>
                {/* content */}
                <div className='events-overview-wrapper'>

                    {
                        (props.data.length > 0) ?
                            props.data.map((item, i) =>
                                <div className='EventNames-content' key={i}>
                                    <div className='flex flex-column'>
                                        <span className='eventDate'>27/09/2022</span>
                                        <span className='eventTime'>10 : 00 Am To 05 : 00 Pm</span>
                                    </div>
                                    <div className='flex flex-column'>
                                        <span className='event-type'>{item.event_name}</span>
                                        <span className='event-description'>{item.event_type}</span>
                                    </div>
                                    <div>
                                        <div>
                                            <span>{item.responded_emp_count_percent}%</span>
                                            <ProgressBar labelSize={0} width={isMobileDevice ? 98 : 160} height={10} baseBgColor='#fdb4bc' bgColor='#FA3B4E' borderRadius={8} completed={79} />
                                        </div>
                                    </div>
                                    {/* <div>
                                        <button className='completed'>{item.event_status}</button>
                                    </div> */}
                                </div>
                            )
                            : <NoDataFound type="bioOptimal" />
                    }

                </div>

            </div>

        </div>
    )
}
