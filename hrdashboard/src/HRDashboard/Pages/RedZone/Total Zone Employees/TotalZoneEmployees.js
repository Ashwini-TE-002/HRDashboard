import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TotalRedZoneChart from './TotalRedZoneChart'
import './TotalZoneEmployees.moudle.css'

export default function TotalZoneEmployees(props) {
    return (
        <Row className='redzone-box'>
            <div className='Redzone-headding'>
                <h6>Total red zone employees</h6>
            </div>
            <Row>
                <Col className='col-md-8 col-lg-4'>
                    <div className='redzone-wrapper flex align-items-baseline'>
                        <h1>{props.empAtRiskCount}</h1>
                        <span>/ </span>
                        <h4>{props.totalEmpCount}</h4>
                    </div>
                    <h6>5 Employees have been red zone in this month  </h6>
                </Col>
                <Col className='col-md-8'>
                    <TotalRedZoneChart data={props.graphData} />
                </Col>
            </Row>
        </Row>
    )
}
