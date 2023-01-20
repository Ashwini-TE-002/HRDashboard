import React, { useEffect, useState } from 'react'
import SideBar from '../../Navigaction/SideBar'
import { Container, Col, Row } from 'react-bootstrap'
import './HealthMetrics.moudle.css'
import PhysicalHealth from './Physical Health/PhysicalHealth'
import MentalHealth from './Mental Health/MentalHealth'
import '../../HRDashboard Responsiveness/HrResponsiveness.css'
import Header from '../../Header/Header'
import NoDataFound from '../../../Components/NoDataFound/NoDataFound'

export default function HRHealthMatrix() {

  const [active, setActive] = useState('PhysicalHealth');

  return (
    <>
      <SideBar />
      <Header />

      {
        localStorage.getItem('showStatistics') === "true" ?
          <>
            <section className="homepageDashboard">
              <Container className='performanceContainer'>
                <Row>
                  <Col>
                    <div className='HealthMetrics-Body'>
                      <div className='Dashboard_Main_Headding'>
                        <h6>Health reports</h6>
                      </div>
                      <div className='Health_DropdownMenu'>
                        <button className={active === 'PhysicalHealth' ? 'itemActive activesection' : 'activesection'} onClick={() => setActive("PhysicalHealth")}>Physical Health</button>
                        <button className={active === 'MentalHealth' ? 'itemActive  activesection' : 'activesection'} onClick={() => setActive("MentalHealth")}>Mental Health</button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            {active === "PhysicalHealth" && <PhysicalHealth />}
            {active === "MentalHealth" && <MentalHealth />}

          </>
          : <div className='pt-2 text-center hr-nodata-wrapper'> <NoDataFound className="pt-5" type="bioOptimal" /><div className='blink'>Atleast three users has to complete the survey to show the statistics</div></div>

      }


    </>
  )
}

