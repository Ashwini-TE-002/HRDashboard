import React from 'react'
import '../Subsriptions.moudle.css'
import { BiSearchAlt2 } from 'react-icons/bi'
import NoDataFound from '../../../../Components/NoDataFound/NoDataFound'
import { Col, Row, Table } from 'react-bootstrap'
import {
    DatatableWrapper,
    Filter,
    TableBody,
    TableHeader
} from "react-bs-datatable";

export default function SubscriptionPerformance(props) {
    // Create table headers consisting of 4 columns.
    const tableHeader = [{
        prop: "team_name",
        title: "Team",
        isFilterable: true
    }, {
        prop: "subscribed_emp_count",
        title: "Subscribers",
        isFilterable: true
    }, {
        prop: "unsubscribed_emp_count",
        title: "Unsubscribers",
        isFilterable: true
    }
        // , {
        //     prop: "subscription_createdAt",
        //     title: "CreatedAt",
        //     isFilterable: true
        // }
    ];
    return (
        <div className='subscriptionPlan'>
            <div className='Riskemployee-wrapper flex justify-content-between align-items-center'>
                <div className='subscribers-Txt'>
                    <h6>Subscribers Overview</h6>
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
                </div> */}
            </div>
            {/* cnt */}
            <div className='information'>

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
                    <Row className='riskemployee flex justify-content-between align-items-center'>
                        <Col className='col-lg-5'>
                            <div>Team</div>
                        </Col>
                        <Col className='col-lg-2 emp-subscribeTxt'>
                            <div>Subscribers </div>
                        </Col>
                        <Col className='col-lg-2 employee-data'>
                            <div>UnSubscribers</div>
                        </Col>
                        <Col className='col-lg-3 text-right'>
                            <div>CreatedAt</div>
                        </Col>
                    </Row>

                    {
                        (props.data.length > 0) ?
                            props.data.map((item, i) =>
                                <Row className='riskemployee_data flex justify-content-between' key={i}>
                                    <Col className='p-0 col-lg-5'>
                                        <span className='emp_data'>{item.team_name}</span>
                                    </Col>
                                    <Col className='text-center col-lg-2'>
                                        <span className='empsubsScore'>{item.subscribed_emp_count}</span>
                                    </Col>
                                    <Col className='text-center col-lg-2'>
                                        <span className=''>{item.unsubscribed_emp_count}</span>
                                    </Col>
                                    <Col className='text-right col-lg-3'>
                                        <span className=''>{item.subscription_createdAt}</span>
                                    </Col>
                                </Row>
                            )
                            : <NoDataFound type="bioOptimal" />
                    }
                </div> */}
            </div>
        </div>
    )
}
