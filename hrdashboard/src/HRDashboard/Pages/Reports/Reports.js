import React, { useEffect, useState } from 'react'
import SideBar from '../../Navigaction/SideBar'
import { Container, Row, Col } from "react-bootstrap"
import ActiveReports from './Active Reports/ActiveReports';
import CompltedReports from './Complted Reports/CompltedReports';
import InactiveReports from './Inactive Reports/InactiveReports';
import './Reports.moudle.css'
import Header from '../../Header/Header';
import '../../HRDashboard Responsiveness/HrResponsiveness.css'
import NoDataFound from '../../../Components/NoDataFound/NoDataFound';

export default function Reports() {

  const [reports, setReports] = useState('activeReports');

  const [activeReportsData, setActiveReportsData] = useState("");
  const [inactiveReportsData, setInactiveReportsData] = useState("");
  const [completedReportsData, setCompletedReportsData] = useState("");

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
        "survey": {
          "active": [{

            "survey_id": 1,

            "survey_title": "Sample survey",

            "total_questions": 20,

            "recipients_count": 135,

            "created_at": "23/12/2022"

          }, {

            "survey_id": 2,

            "survey_title": "Sample survey2",

            "total_questions": 30,

            "recipients_count": 150,

            "created_at": "24/12/2022"

          }, {

            "survey_id": 3,

            "survey_title": "Sample survey3",

            "total_questions": 50,

            "recipients_count": 175,

            "created_at": "25/12/2022"

          }],
          "completed": [{

            "survey_id": 4,

            "survey_title": "Sample survey5",

            "total_questions": 25,

            "recipients_count": 135,

            "created_at": "23/12/2022"

          }, {

            "survey_id": 5,

            "survey_title": "Sample survey6",

            "total_questions": 35,

            "recipients_count": 150,

            "created_at": "24/12/2022"

          }, {

            "survey_id": 6,

            "survey_title": "Sample survey7",

            "total_questions": 55,

            "recipients_count": 175,

            "created_at": "25/12/2022"

          }],
          "inactive": [{

            "survey_id": 7,

            "survey_title": "Sample survey8",

            "total_questions": 28,

            "recipients_count": 135,

            "created_at": "23/12/2022"

          }, {

            "survey_id": 8,

            "survey_title": "Sample survey9",

            "total_questions": 38,

            "recipients_count": 150,

            "created_at": "24/12/2022"

          }, {

            "survey_id": 8,

            "survey_title": "Sample survey10",

            "total_questions": 58,

            "recipients_count": 175,

            "created_at": "25/12/2022"

          }]
        }
      },
      "message": "Success"
    }

    // setActiveReportsData(response.data.survey.active);
    setInactiveReportsData(response.data.survey.inactive);
    setCompletedReportsData(response.data.survey.completed);



    const html = <section className="homepageDashboard">
      <Container className='performanceContainer'>
        <Row>
          <Col>
            <div className='HealthMetrics-Body'>
              <div className='Dashboard_Main_Headding'>
                <h6>Survey Reports</h6>
              </div>
              <div className='Health_DropdownMenu'>
                <button className={reports === 'activeReports' ? 'reportsData reports' : 'reports'} onClick={() => setReports("activeReports")}>Active Reports</button>
                <button className={reports === 'completedReports' ? 'reportsData  reports' : 'reports'} onClick={() => setReports("completedReports")}>Completed Reports</button>
                <button className={reports === 'inactiveReports' ? 'reportsData  reports' : 'reports'} onClick={() => setReports("inactiveReports")}>Inactive Reports</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* {htmlData} */}
      {(reports === "activeReports" && response.data.survey.active) ? < ActiveReports data={response.data.survey.active} /> : ""}
      {(reports === "completedReports" && response.data.survey.inactive) ? <CompltedReports data={response.data.survey.inactive} /> : ""}
      {(reports === "inactiveReports" && response.data.survey.completed) ? <InactiveReports data={response.data.survey.completed} /> : ""}
    </section>


    setActiveReportsData(html)

    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })

  }, []);

  return (
    <React.Fragment>
      <SideBar />
      <Header />
      {
        localStorage.getItem('showStatistics') === "true" ?
          <>
            {activeReportsData}
          </>
          : <div className='pt-2 text-center hr-nodata-wrapper'> <NoDataFound className="pt-5" type="bioOptimal" /><div className='blink'>Atleast three users has to complete the survey to show the statistics</div></div>

      }
    </React.Fragment>
  )
}
