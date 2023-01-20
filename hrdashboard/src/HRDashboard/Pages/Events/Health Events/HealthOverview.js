import React, { useState } from 'react'
import { BsFillCalendarDateFill } from 'react-icons/bs'
// import './EventsOverview.moudle.css'
import ProgressBar from '@ramonak/react-progress-bar'
import NoDataFound from '../../../../Components/NoDataFound/NoDataFound'
import { Modal } from 'react-bootstrap';
import EventCalender from '../Fitness Events/EventCalender/EventCalender';

export default function MentalHealthOverview(props) {
    const [modalHtmlData, setModalHtmlData] = useState(false);
    // model popup
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {

        setShow(true)
        // This needs to be made dynamic and change the URL

        // var config = {
        //     method: 'get',
        //     url: '',
        //     headers: {}
        // };

        // axios(config)
        //     .then(function (response) {
        const response = {

            "success": true,

            "data": {

                "team_events_calendar": [{

                    "title": "Meeting",

                    "start": new Date(),

                    "end": "22/12/2022",

                    "event_type": "fitness"

                }, {

                    "title": "Meeting",

                    "start": new Date(),

                    "end": "22/12/2022",

                    "event_type": "fitness"

                }, {

                    "title": "Meeting",

                    "start": new Date(),

                    "end": "22/12/2022",

                    "event_type": "fitness"

                }, {

                    "title": "Meeting",

                    "start": new Date(),

                    "event_type": "fitness"

                }, {

                    "title": "Meeting",

                    "start": new Date(),

                    "event_type": "fitness"

                }],

            },

            "message": "Success"

        }
        const modalhtml = <EventCalender data={response.data.team_events_calendar} />
        setModalHtmlData(modalhtml)

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
    };


    return (
        <div className='events_overview'>
            <div>
                <div className='flex align-items-center justify-content-between'>
                    <div className='hrDashboard-HeaddingTxt'>
                        <h6>Health Overview</h6>
                    </div>
                    <div className='calender-div'>
                        <BsFillCalendarDateFill color='#fff' onClick={handleShow} />
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
                        <h5 className='events-txtName'>Responding</h5>
                    </div>
                    <div>
                        <h5 className='events-txtName'>Status</h5>
                    </div>
                </div>
                {/* content */}
                <div className='events-overview-wrapper'>

                    {
                        (props.data.length > 0) ?
                            props.data.map((item, i) =>
                                <div div className='EventNames-content' key={i} >
                                    <div className='flex flex-column'>
                                        <span className='eventDate'>{item.event_date}</span>
                                        <span className='eventTime'>{item.event_time}</span>
                                    </div>
                                    <div className='flex flex-column'>
                                        <span className='event-type'>{item.event_name}</span>
                                        <span className='event-description'>{item.event_type}</span>
                                    </div>
                                    <div>
                                        <div>
                                            <span>{item.responded_emp_count_percent}%</span>
                                            <ProgressBar labelSize={0} width={160} height={10} baseBgColor='#fdb4bc' bgColor='#FA3B4E' borderRadius={8} completed={item.responded_emp_count_percent} />
                                        </div>
                                    </div>
                                    <div>
                                        <button className='completed'>{item.event_status}</button>
                                    </div>
                                </div>
                            )

                            : <NoDataFound type="bioOptimal" />
                    }

                </div>

            </div>
            {/* eventmoudle */}
            <Modal show={show} onHide={handleClose} className="eventmoudle">
                <Modal.Header closeButton className='eventHeader'>
                    {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body className='eventmoudleBody'>
                    {modalHtmlData}
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> 
                </Modal.Footer> */}
            </Modal>
        </div >
    )
}
