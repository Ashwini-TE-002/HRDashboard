import React from 'react'
import './PerformanceScore.moudle.css'
import { BiSearchAlt2 } from 'react-icons/bi'
import NoDataFound from '../../../../Components/NoDataFound/NoDataFound'
import { Button, Col, Row, Table } from "react-bootstrap";
import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOptions,
    TableBody,
    TableColumnType,
    TableHeader
} from "react-bs-datatable";

export default function PerformanceScore(props) {

    // Create table headers consisting of 4 columns.
    const tableHeader = [{
        prop: "date",
        title: "Date",
        isFilterable: true
    }, {
        prop: "team_name",
        title: "Team Name",
        isFilterable: true
    }, {
        prop: "performance_score",
        title: "Performance Score",
        isFilterable: true
    }
        // , {
        //     prop: "performance_status",
        //     title: "Status",
        //     isFilterable: true
        // }
    ];


    return (
        <div className='PerformanceScore-mainWrapper'>
            <div className='performance-score flex justify-content-between'>
                <div className='Perfo-text'>
                    <h1>PerformanceScore</h1>
                </div>
                {/* <div className='Perfor-input flex justify-content-between'>
                    <form className='flex justify-content-between'>
                        <div className='flex justify-content-between'>
                            <input className='form-control Performance-form' />
                            <BiSearchAlt2 /> 
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
                </div> */}
            </div>
            <div className='mt-4'>
                <DatatableWrapper
                    body={props.performanceScore}
                    headers={tableHeader} >
                    <Row className="mb-4 p-2 justify-content-end">
                        <Col xs={12} lg={4} className="d-flex flex-col justify-content-end align-items-end">
                            <Filter placeholder="Search" />
                        </Col>
                    </Row>
                    <Table className='performance-score-table'>
                        <TableHeader />
                        {
                            (props.performanceScore.length > 0) ? <TableBody />
                                : <tr className='performance-score-nodata-wrapper'><NoDataFound type="bioOptimal" /></tr>
                        }
                    </Table>
                </DatatableWrapper>
                {/* <div >
                    <div className='performance_box'>
                        <div className='perfo-txt'>Date</div>
                        <div className='perfo-txt'>Team Name</div>
                        <div className='perfo-txt'>Health Score</div>
                        <div className='perfo-txt'>Status</div>
                    </div>
                    <div>

                        {

                            (props.performanceScore.length > 0) ?
                                props.performanceScore.map((item, i) =>
                                    <div className='Performance-score' key={i}>
                                        <div>
                                            <span className='dsh_userTxt'>{item.date}</span>
                                        </div>
                                        <div className='perofrmance-teamName'>
                                            <span className='dsh_userTxt'>{item.team_name}</span>
                                        </div>
                                        <div>
                                            <span className='dsh_userTxt'>{item.performance_score}%</span>
                                        </div>
                                        <div>
                                            <button className='btn-status'>
                                                {item.performance_status}
                                            </button>
                                        </div>
                                    </div>
                                )

                                : <NoDataFound type="bioOptimal" />
                        }

                    </div>
                </div> */}
            </div>
        </div>
    )
}
