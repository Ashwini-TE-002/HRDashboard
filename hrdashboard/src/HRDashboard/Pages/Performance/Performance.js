import React, { useEffect, useState } from 'react'
import SideBar from '../../Navigaction/SideBar'
import { Container, Row, Col } from "react-bootstrap"
import EnergyLevel from './Business performance/Energy level/EnergyLevel'
import RetentionCompo from './Business performance/Retention/RetentionCompo'
import './Performance.moudle.css'
import ProductivityComponent from './Business performance/Productivity/ProductivityComponent'
import PerformanceOverview from './Health Performance/Performance Overview/PerformanceOverview'
import StatusSummary from './Health Performance/Status Summary/StatusSummary'
import PerformanceComponent from './Health Performance/Performance/PerformanceComponent'
// import LowScore from './Health Performance/Performance/LowScore'
import PerformanceScore from './Performance Score/PerformanceScore'
import Select from 'react-select';
import Header from '../../Header/Header'
import '../../HRDashboard Responsiveness/HrResponsiveness.css'
import NoDataFound from '../../../Components/NoDataFound/NoDataFound'

export default function Performance() {
  const [performanceHTMLData, setPerformanceHTMLData] = useState()
  useEffect(() => {
    // This needs to be made dynamic and change the URL
    // axios({
    //     method: "get",
    //     url: "",
    //     data: payload
    // }).then(function (response) {


    // }).catch(function (error) {
    //   console.log(error);
    // });

    const response = {

      "success": true,

      "data": {

        "team_energy_data": {

          "team_avg_energy_rate": 85,

          "team_avg_energy_rate_percent": 20,

          "team_avg_energy_status": "increased"

        },

        "team_health_performance_data": {

          "total_health_performance": "92.35%",

          "total_health_performance_status": "increased",

          "total_health_performance_percentage": "0.2",

          "health_performance_graph_data": [{

            "name": "Jan",

            "lowvalue": 5,

            "highvalue": 20

          }, {

            "name": "Feb",

            "highvalue": 90,

            "lowvalue": 50

          }, {

            "name": "Mar",

            "highvalue": 40,

            "lowvalue": 1

          }, {

            "name": "Apr",

            "highvalue": 6

          }, {

            "name": "May",

            "highvalue": 80,

            "lowvalue": 2

          }, {

            "name": "Jun",

            "highvalue": 80,

            "lowvalue": 20

          }, {

            "name": "Jul",

            "highvalue": 80,

            "lowvalue": 2

          }, {

            "name": "Aug",

            "highvalue": 80,

            "lowvalue": 20

          }, {

            "name": "Sep",

            "highvalue": 80,

            "lowvalue": 20

          }, {

            "name": "Oct",

            "highvalue": 80,

            "lowvalue": 20

          }, {

            "name": "Nov",

            "highvalue": 80,

            "lowvalue": 20

          }, {

            "name": "Dec",

            "highvalue": 80,

            "lowvalue": 2

          }],

          "total_emp_responded": 315,

          "top_performance_score": "92.5",

          "low_performance_score": "52.5"

        },

        "team_performance_score": [{

          "date": "22-12-2022",

          "team_name": "UIUX Designer",

          "performance_score": "92"

        }, {

          "date": "23-12-2022",

          "team_name": "Frontend Developer",

          "performance_score": "85",

          "performance_status": "Good"

        }, {

          "date": "22-12-2022",

          "team_name": "Backend Developer",

          "performance_score": "90",

          "performance_status": "Good"

        }]

      },

      "message": "Success"

    }

    const performaceHTML = <div className='performance-Wrapper'>
      <div className='Dashboard_Main_Headding'>
        <h6>Performance</h6>
      </div>
      <Row>
        {/* <Col>
           <ProductivityComponent /> 
        </Col> */}
        <Col>
          <EnergyLevel data={response.data.team_energy_data} />
        </Col>
        {/* <Col>
          <RetentionCompo /> *
        </Col> */}
      </Row>
      {/* second component  */}
      <div className='flex align-items-center justify-content-between'>
        <div className='Dashboard_Main_Headding mt-4'>
          <h6>Health Performance</h6>
        </div>
      </div>
      <Row className='PerformanceOverview-Row'>
        <Col className='col-lg-7 col-sm-12 col-md-12'>
          <PerformanceOverview performanceData={response.data.team_health_performance_data} />
        </Col>
        <Col className="col-lg-4 col-sm-12 StatusSummary-Col">
          <StatusSummary performanceData={response.data.team_health_performance_data} />
          <PerformanceComponent performanceData={response.data.team_health_performance_data} />
        </Col>
      </Row>
      <Row>
        <Col className='mt-4 col-md-12 col-lg-12'>
          <PerformanceScore performanceScore={response.data.team_performance_score} />
        </Col>
      </Row>
    </div>

    setPerformanceHTMLData(performaceHTML)

  }, [])



  const options = [
    { value: 'Team', label: 'Team' },
    // { value: 'Individual', label: 'Individual' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      <Header />
      <SideBar />
      <Container className="performanceContainer performance-main">


        {
          localStorage.getItem('showStatistics') === "true" ? performanceHTMLData
            : <div className='pt-5 text-center' hr-nodata-wrapper> <NoDataFound type="bioOptimal" /><div className='blink'>Atleast three users has to complete the survey to show the statistics</div></div>

        }

      </Container>
    </>
  )
}