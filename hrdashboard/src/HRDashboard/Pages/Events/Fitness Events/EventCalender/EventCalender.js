import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";
import EventsData from './EventsData'



export default function EventCalender(props) {
    return (
        <div className='EventMain-calender'>
            {/* <FullCalendar
                defaultView="dayGridMonth"
                header={{
                    left: "prev,next",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
                themeSystem="Simplex"
                plugins={[dayGridPlugin]}
                eventsData={EventsData}
            /> */}
            <FullCalendar
                defaultView="dayGridMonth"
                themeSystem="bootstrap5"
                // header={{
                //     // left: "prev",
                //     // // center: "title, dayGridMonth,timeGridWeek,timeGridDay",
                //     // center: "title, dayGridMonth,timeGridWeek,timeGridDay ",
                //     // right: "next",
                //     // right: "dayGridMonth,timeGridWeek,timeGridDaytoday",
                // }}
                headerToolbar={{
                    left: "prev",
                    center: "title",
                    right: "next"
                }}
                plugins={[dayGridPlugin]}
                events={props.data}
                displayEventEnd="true"
                eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
            />

        </div>
    )
}
