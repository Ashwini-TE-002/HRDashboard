import React, { useState } from 'react'
import { Row, Col, Table, Button } from 'react-bootstrap'
import './RiskEmployee.moudle.css'
import SidebarComponent from '../SidebarComponent/SidebarComponent';
import NoDataFound from '../../../../Components/NoDataFound/NoDataFound';
import '../../../HRDashboard Responsiveness/HrResponsiveness.css'

import {
    DatatableWrapper,
    Filter,
    TableBody,
    TableHeader
} from "react-bs-datatable";

export default function RiskEmployee(props) {
    // Create table headers consisting of 4 columns.
    const tableHeader = [{
        prop: "team_name",
        title: "Team",
        isFilterable: true
    }, {
        prop: "risk_score",
        title: "Score",
        isFilterable: true
    }, {
        prop: "button",
        cell: (row) => (
            <Button
                variant="outline-primary"
                size="sm"
                className='scoreButton'
                data-teamid={row.team_id}
                onClick={renderScorePopup}
            >
                Score
            </Button>
        )
    }];

    const options = [
        { value: 'Team', label: 'Team' },
        { value: 'Individual', label: 'Individual' },
    ];

    // select
    const [selectedOption, setSelectedOption] = useState(null);

    // sidebar
    const [isOpen, setIsOpen] = useState(false);

    // const [sidebarHTML, setSidebarHTML] = useState();
    const renderScorePopup = () => {
        setIsOpen(true);
        // const sidebarHTMLData = <SidebarComponent />;
        // setSidebarHTML(sidebarHTMLData)
    }
    const parentFunction = (value) => {
        setIsOpen(!value)
    }
    return (
        <>
            {/* main-content */}

            <div className='RiskEmployee'>
                <div className='Riskemployee-wrapper flex justify-content-between align-items-center'>
                    <div className='hrDashboard-HeaddingTxt'>
                        <h6>At risk employee</h6>
                    </div>
                    {/* <div className='flex mb-4'>
                        <div className='mr-2'>
                            <form className='flex justify-content-between'>
                                <div className='flex justify-content-between'>
                                    <div className="custom-search-input">
                                        <div className="input-group col-md-12">
                                            <input type="text" className="form-control input-lg" placeholder="Search" />
                                            <span className="input-group-btn">
                                                <button className="btn btn-info btn-lg" type="button">
                                                    <BiSearchAlt2 />
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                         <div className='ml-1'>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                    />
                                </div> 
                    </div> */}
                </div>
                {/* content */}
                <div className="information">


                    <DatatableWrapper
                        body={props.data}
                        headers={tableHeader} >
                        <Row className="mb-4 p-2 justify-content-end">
                            <Col xs={12} lg={4} className="d-flex flex-col justify-content-end align-items-end">
                                <Filter placeholder="Search" />
                            </Col>
                        </Row>
                        <Table className='performance-score-table'>
                            <TableHeader />
                            {
                                (props.data.length > 0) ? <TableBody />
                                    : <tr className='performance-score-nodata-wrapper'><NoDataFound type="bioOptimal" /></tr>
                            }
                        </Table>
                    </DatatableWrapper>

                    {/* <div>
                        <Row className='riskemployee flex justify-content-between'>
                            <Col className='col-lg-6 RiskEmployee-TeamName'>
                                <div>TeamName</div>
                            </Col>
                            <Col className='col-lg-3 RiskEmployee-Score'>
                                <div>Score</div>
                            </Col>
                            <Col className='col-lg-3 text-center RiskEmployee-Status'>
                                <div>Status</div>
                            </Col>
                        </Row>
                        {/* team Description 

                    {
                        (props.data.length > 0) ?

                            props.data.map((item, i) =>
                                <div className='riskemployee_data flex justify-content-between' key={i}>
                                    <Col className='col-lg-6 RiskEmployee-TeamData'>
                                        <span className='emp_data'>{item.team_name}</span>
                                    </Col>
                                    <Col className='col-lg-3 RiskEmployee-ScoreData'>
                                        <span className='ml-2'>{item.risk_score}</span>
                                    </Col>
                                    <Col className='col-lg-3  text-center RiskEmployee-ScoreBtn'>
                                        <button className='scoreButton' data-teamid={item.team_id} onClick={renderScorePopup}>Score</button>
                                    </Col>
                                </div>
                            )
                            : <NoDataFound type="bioOptimal" />
                    }

                </div> */}
                </div>
            </div>


            {
                (isOpen === true) ? <SidebarComponent isOpen={isOpen}
                    parentFunction={parentFunction}
                /> : ""
            }

            {/* onClick openSidebar */}

        </>
    )
}
