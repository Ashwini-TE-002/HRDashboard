import React from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { BiSearchAlt2 } from 'react-icons/bi'
import '../Reports.moudle.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
import NoDataFound from '../../../../Components/NoDataFound/NoDataFound'
import { useNavigate } from 'react-router-dom'
import {
    DatatableWrapper,
    Filter,
    TableBody,
    TableHeader
} from "react-bs-datatable";
import { AiOutlineEye } from 'react-icons/ai'
export default function InactiveReports(props) {

    // view survey
    let openSurveyReports = useNavigate();
    function openReports(e) {
        e.preventDefault();
        let openLink = "/SurvayResponse"
        openSurveyReports(openLink, {
            state: {
                id: e.currentTarget.getAttribute('data-surveyid')
            }
        })
    }

    // Create table headers consisting of 4 columns.
    const tableHeader = [{
        prop: "survey_title",
        title: "Title",
        isFilterable: true
    }, {
        prop: "total_questions",
        title: "Question",
        isFilterable: true
    }, {
        prop: "recipients_count",
        title: "Recipients",
        isFilterable: true
    }, {
        prop: "created_at",
        title: "Created At",
        isFilterable: true
    }, {
        prop: "button",
        title: "Action",
        cell: (row) => (
            <Button
                variant="outline-primary"
                size="sm"
                className='survay-activeButton'
                data-surveyid={row.survey_id}
                onClick={openReports}
            >
                View Result
            </Button>
        )
    }];

    return (
        <section className="homepageDashboard h-full">
            <Container className='performanceContainer'>
                <Row>
                    <Col>
                        <div className='activeReports'>
                            <div className='activeReports-wrapper flex align-items-center justify-content-between'>
                                <div className='RiskEmp-Txt'>
                                    <h1>Inactive Reports</h1>
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
                            {/* content */}
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
                                        <TableHeader className="activeReports-table" />
                                        {
                                            (props.data.length > 0) ? <TableBody />
                                                : <tr className='performance-score-nodata-wrapper'><NoDataFound type="bioOptimal" /></tr>
                                        }
                                    </Table>
                                </DatatableWrapper>
                                {/* <div>
                                    <Row className='activeReports-table flex justify-content-between'>
                                        <Col className='col-lg-3 activeReports-Title'>
                                            <div>Title</div>
                                        </Col>
                                        <Col className='col-lg-1 activeReports-question'>
                                            <div>Question</div>
                                        </Col>
                                        <Col className='col-lg-2 text-center activeReports-recipients'>
                                            <div>Recipients</div>
                                        </Col>
                                        <Col className='col-lg-2 text-right activeReports-createdat'>
                                            <div>Created at</div>
                                        </Col>
                                        <Col className='col-lg-3 text-right activeReports-action'>
                                            <div>Action</div>
                                        </Col>
                                        <Col className='col-lg-1'>
                                            <div></div>
                                        </Col>
                                    </Row>
                                    {/* team Description
                                    {
                                        (props.data.length > 0) ?
                                            props.data.map((item, i) =>
                                                <Row className='Employee_informaction' key={i}>
                                                    <Col className='employee-infoData col-lg-3 col-md-3'>
                                                        <span className='emp_data'>{item.survey_title}</span>
                                                    </Col>
                                                    <Col className='employee-totalQuestion col-lg-1'>
                                                        <span>{item.total_questions}</span>
                                                    </Col>
                                                    <Col className='employee-recipients-count text-center col-lg-2'>
                                                        <span>{item.recipients_count}</span>
                                                    </Col>
                                                    <Col className='employee-Created_at text-right col-sm-2'>
                                                        <span>{item.created_at}</span>
                                                    </Col>
                                                    <Col className='employee-surveyBtn col-lg-3 text-right'>
                                                        <button className='survay-activeButton' data-surveyid={item.survey_id} onClick={openReports}><AiOutlineEye /></button>
                                                    </Col>
                                                    <Col className='employee-dataViewMore text-right col-lg-1'>
                                                        <button className='viewMore'>
                                                            <BsThreeDotsVertical />
                                                        </button>
                                                    </Col>
                                                </Row>
                                            )
                                            : <NoDataFound type="bioOptimal" />
                                    }
                                </div> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
