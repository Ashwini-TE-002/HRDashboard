import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EnergyRate from './Energy Rate/EnergyRate'
import './EnergyAndWorkplace.moudle.css'
import { Container, Row, Col } from 'react-bootstrap'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import SideBar from '../../../Navigaction/SideBar'
import EnergyRateGraph from './EnergyRate Graph/EnergyRateGraph'
import WorkplaceRate from './WorkplaceComfortness Rate/WorkplaceRate'
import WorkspaceOverview from './Workspace Comfortness Overview/WorkspaceOverview'
import Header from '../../../Header/Header'

export default function EnergyAndWorkplace() {

    // navigate
    let goBack = useNavigate();
    function backToPerformancePage(e) {
        e.preventDefault();
        let pathUrl = "/Performance"
        goBack(pathUrl)
    }
    const [htmlData, setHtmlData] = useState();
    useEffect(() => {
        // This needs to be made dynamic and change the URL
        // axios({
        //     method: "get",
        //     url: "",
        //     data: payload
        // }).then(function (response) {

        const response = {

            "success": true,

            "data": {

                "team_energy_rate_data": {

                    "team_energy_rate": 85,

                    "team_energy_rate_percent": 0.2,

                    "team_energy_rate_status": "increased",

                    "team_energy_rate_graph_data": [{

                        "name": "Jan",

                        "energy": 40,

                        "lethargy": 84

                    }, {

                        "name": "Feb",

                        "energy": 30

                    }, {

                        "name": "Mar",

                        "energy": 20,

                        "lethargy": 98
                    }, {

                        "name": "Apr",

                        "energy": 27,

                        "lethargy": 39

                    }, {

                        "name": "May",

                        "energy": 18,

                        "lethargy": 48

                    }]

                },

                "team_workcomfort_data": {

                    "team_workcomfort_rate": {

                        "happy": "60",

                        "unhappy": "40"

                    },

                    "team_workcomfort_percent": 0.2,



                    "team_workcomfort_status": "increased",

                    "team_workcomfort_graph_data": [{

                        "name": "Jan",

                        "value": 20

                    }, {

                        "name": "Feb",

                        "value": 90

                    }, {

                        "name": "Mar",

                        "value": 40

                    }, {

                        "name": "Apr",

                        "value": 60

                    }, {

                        "name": "May",

                        "value": 80

                    }]

                }

            },

            "message": "Success"

        }
        const html =
            <Container>
                <Row>
                    <Col className="col-lg-4 col-md-8 EnergyRate-Col">
                        <EnergyRate data={response.data.team_energy_rate_data} />
                    </Col>
                    <Col className="col-lg-8 col-md-12 EnergyRateGraph-Col">
                        <EnergyRateGraph data={response.data.team_energy_rate_data.team_energy_rate_graph_data} />
                    </Col>
                </Row>

                {/* Workplace Comfortness  Rate */}
                <Row>
                    <Col className='col-lg-4 col-md-9 WorkplaceRateDonetChart-Col'>
                        <WorkplaceRate data={response.data.team_workcomfort_data} />
                    </Col>
                    <Col className='col-lg-8 col-md-12 WorkspaceOverviewBar-Col'>
                        <WorkspaceOverview data={response.data.team_workcomfort_data.team_workcomfort_graph_data} />
                    </Col>
                </Row>
            </Container>

        setHtmlData(html);


        // }).catch(function (error) {
        //   console.log(error);
        // });

    }, [])

    return (
        <>
            <SideBar />
            <Header />
            <section className='homepageDashboard'>
                <Container className="performanceContainer">
                    <Row>
                        <Col>
                            <div>
                                <div className='backButton' onClick={backToPerformancePage}> {/* Arrow Button*/}
                                    <MdOutlineArrowBackIosNew />
                                    <span>Back</span>
                                </div>
                            </div>
                            {/* EnergyAndWorkplace headding */}
                            <div className='Energyand_Workplace mt-3'>
                                <h6>Energy and workplace</h6>
                            </div>
                            {htmlData}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
