import React, { useEffect, useState } from 'react'
import SideBar from '../../Navigaction/SideBar'
import { Col, Row, Container } from 'react-bootstrap'
import TotalZoneEmployees from './Total Zone Employees/TotalZoneEmployees'
import RiskEmployee from './RiskEmployee/RiskEmployee'
import Header from '../../Header/Header'
import NoDataFound from '../../../Components/NoDataFound/NoDataFound'

export default function RedZone() {


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

        "total_emp_count": 20,

        "total_emp_atrisk": 5,

        "redzone_graph_data": [{

          "name": "Jan",

          "value": 4

        }, {

          "name": "Feb",

          "value": 30

        }, {

          "name": "Mar",

          "value": 20

        }, {

          "name": "May",

          "value": 2

        }, {

          "name": "Jun",

          "value": 18

        }],

        "team_risk_status": [{

          "team_name": "UX UI team",

          "risk_score": 3.3,

          "team_id": 1

        }, {

          "team_name": "Frontend developers team",

          "risk_score": 6.3,

          "team_id": 2

        }, {

          "team_name": "Backend developers  team",

          "risk_score": 3.3,

          "team_id": 3

        }, {

          "team_name": "DevOps team",

          "risk_score": 5.8,

          "team_id": 4

        }]

      },

      "message": "Success"

    }

    const html = <Col>
      <TotalZoneEmployees graphData={response.data.redzone_graph_data} totalEmpCount={response.data.total_emp_count} empAtRiskCount={response.data.total_emp_atrisk} />
      <RiskEmployee data={response.data.team_risk_status} />
    </Col>


    setHtmlData(html)

    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })

  }, []);


  return (
    <>
      <SideBar />
      <Header />
      <section className="homepageDashboard">
        <Container className='performanceContainer'>
          {
            localStorage.getItem('showStatistics') === "true" ?
              <Row>
                <Col className='performance-Col'>
                  <div className='performance-Wrapper'>
                    <div className='Dashboard_Main_Headding'>
                      <h1>RedZone</h1>
                    </div>
                    {htmlData}
                  </div>
                </Col>
              </Row>
              : <div className='pt-2 text-center hr-nodata-wrapper'> <NoDataFound className="pt-5" type="bioOptimal" /><div className='blink'>Atleast three users has to complete the survey to show the statistics</div></div>

          }
        </Container>
      </section >
    </>
  )
}
