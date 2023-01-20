import React, { useEffect, useState } from 'react'
import SideBar from '../../Navigaction/SideBar'
import { Container, Col, Row } from 'react-bootstrap'
import './Events.moudle.css'
import FitnessEventsComponent from './Fitness Events/FitnessEventComponent/FitnessEventsComponent'
import HealthEventsComponent from './Health Events/HealthEventsComponent'
import MentalHealthEventsComponent from './Mental Health Events/MentalHealthEventsComponent'
import EventsGraph from './EventsGraph/EventsGraph'
import ActivityRespondents from './Activity Respondents/ActivityRespondents'
import EventsOverview from './Events Overview/EventsOverview'
import Header from '../../Header/Header'
import NoDataFound from '../../../Components/NoDataFound/NoDataFound'

export default function Events() {
  const [htmlData, setHtmlData] = useState();
  useEffect(() => {
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

        "events_categories_data": {

          "fitness": {

            "value": 80,

            "value_percent": 6.5,

            "value_status": "increased"

          },


          "health": {

            "value": 60,

            "value_percent": 4.5,

            "value_status": "increased"

          },

          "mentalWellness": {

            "value": 70,

            "value_percent": 5.5,

            "value_status": "increased"

          }

        },

        "team_events_data": [{

          "event_date": "22/12/2022",

          "event_time": "10 : 00 Am To 05 : 00 Pm",

          "event_name": "Fitness challenge",

          "event_type": "fitness",

          "event_status": "completed",

          "responded_emp_count": 50,

          "responded_emp_count_percent": 20



        }, {

          "event_date": "24/12/2022",

          "event_time": "10 : 00 Am To 05 : 00 Pm",

          "event_name": "Fitness challenge",

          "event_type": "fitness",

          "event_status": "completed",

          "responded_emp_count": 50,

          "responded_emp_count_percent": 20



        }, {

          "event_date": "23/12/2022",

          "event_time": "10 : 00 Am To 05 : 00 Pm",

          "event_name": "Fitness challenge",

          "event_type": "fitness",

          "event_status": "completed",

          "responded_emp_count": 50,

          "responded_emp_count_percent": 20



        }],

        "activity_respondent_data": {

          "emp_respondent_count_percent": 36,

          "emp_respondent_count_status": "increased",

          "respondent_graph_data": [{
            "name": "Jun",
            "value": 40
          }, {
            "name": "Jul",
            "value": 30
          }, {
            "name": "Aug",
            "value": 20
          }, {
            "name": "Sep",
            "value": 27
          },
          {
            "name": "Oct",
            "value": 18
          }, {
            "name": "Nov",
            "value": 23

          }, {
            "name": "Dec",
            "value": 34
          }]

        },

        "monthly_events_count_data": {

          "total_current_event_count": 7,

          "events_count_percent": 36,

          "events_count_status": "increased",

          "events_count_graph_data": [{
            "name": "Jun",
            "eventCount": 9
          }, {
            "name": "Jul",
            "eventCount": 8
          }, {
            "name": "Aug",
            "eventCount": 5
          }, {
            "name": "Sep",
            "eventCount": 7
          }, {
            "name": "Oct",
            "eventCount": 12
          }, {
            "name": "Nov",
            "eventCount": 10
          }, {
            "name": "Dec",
            "eventCount": 14
          }]
        },

        "message": "Success"

      }
    }

    const html =
      <div><Row className='events-ComponentsPages'>
        <Col className='col-lg-4 col-md-4 col-sm-4'>
          <FitnessEventsComponent data={response.data.events_categories_data.fitness} />
        </Col>
        <Col className='col-lg-4 col-md-4 col-sm-4'>
          <HealthEventsComponent data={response.data.events_categories_data.health} />
        </Col>
        <Col className='col-lg-4 col-md-4 col-sm-4'>
          <MentalHealthEventsComponent data={response.data.events_categories_data.mentalWellness} />
        </Col>

      </Row>
        <Row className='mt-4'>
          <Col className='col-lg-8 col-md-12'>
            <EventsOverview data={response.data.team_events_data} />
          </Col>
          <Col className='col-lg-4 col-md-12'>
            <ActivityRespondents data={response.data.activity_respondent_data} />
            <EventsGraph data={response.data.monthly_events_count_data} />
          </Col>
        </Row></div>

    // <div>
    //   <div className='flex'>
    //     <div>
    //       <FitnessEventsComponent data={response.data.events_categories_data.fitness} />
    //     </div>
    //     <div className='mx-auto'>
    //       <HealthEventsComponent data={response.data.events_categories_data.health} />
    //     </div>
    //     <div>
    //       <MentalHealthEventsComponent data={response.data.events_categories_data.mentalWellness} />
    //     </div>
    //   </div>
    //   <div className='flex justify-content-between mt-3'>
    //     <div>
    //       <EventsOverview data={response.data.team_events_data} />
    //     </div>
    //     <div>
    //       <ActivityRespondents data={response.data.activity_respondent_data} />
    //       <EventsGraph data={response.data.monthly_events_count_data} />
    //     </div>
    //   </div>
    // </div>

    setHtmlData(html)

    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })

  }, [])
  return (
    <>
      <SideBar />
      <Header />
      <section className="homepageDashboard">
        <Container className='performanceContainer'>
          {
            localStorage.getItem('showStatistics') === "true" ?
              <Container className="events-performance">
                <div className='performance-Wrapper'>
                  <div className='Dashboard_Main_Headding'>
                    <h1>Events</h1>
                  </div>
                </div>
                {/* <Col>
            </Col> */}
                {htmlData}
              </Container>
              : <div className='pt-2 text-center hr-nodata-wrapper'> <NoDataFound className="pt-5" type="bioOptimal" /><div className='blink'>Atleast three users has to complete the survey to show the statistics</div></div>

          }
        </Container>
      </section>
    </>
  )
}
