import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Doughnut } from 'react-chartjs-2';
import SideBar from '../../../Navigaction/SideBar';
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import './survey.moudle.css'
import ProgressBar from "@ramonak/react-progress-bar";
import Header from '../../../Header/Header';

export default function SurvayResponse() {



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

                "survey": {

                    "response_data": {

                        "total_emp": 200,

                        "answered_emp": 150,

                        "team_answered_percent": 85,

                        "team_unanswered_percent": 15,

                        "response_percent": 2,

                        "response_status": "increased"

                    },

                    "survey_id": 1,

                    "survey_status": "published",

                    "created_at": "23/12/2022",

                    "created_by": "Peter jhonson",

                    "published_at": "23/12/2022",

                    "total_questions": 10,

                    "recipients": 100,

                    "audience": "Organisation",

                    "questions": {

                        "0": {

                            "question_number": 1,

                            "question_title": "Are you habitual to drugs and alcohol?",

                            "answer": {

                                "answer1": "20",

                                "answer2": "25",

                                "answer3": "30",

                                "answer4": "50"

                            },

                            "answered_count": 20,

                            "unanswered_count": 25

                        },

                        "1": {

                            "question_number": 2,

                            "question_title": "Do you smoke offen?",

                            "answer": {

                                "yes": "20",

                                "no": "25",

                                "1 cigarette": "30",

                                "10 cigarettes": "50"

                            },

                            "answered_count": 20,

                            "unanswered_count": 25

                        },

                        "2": {

                            "question_number": 3,

                            "question_title": "Do you eat fruits everyday?",

                            "answer": {

                                "yes": "20",

                                "no": "25",

                                "one bowl of all fruits": "30",

                                "one bowl of selected fruits": "50"

                            },

                            "answered_count": 20,

                            "unanswered_count": 25

                        },

                        "3": {

                            "question_number": 4,

                            "question_title": "How long do you sleep?",

                            "answer": {

                                "6 hours": "20",

                                "7-8 hours": "25",

                                "8-9 hours": "30",

                                "10 hours": "50"

                            },

                            "answered_count": 20,

                            "unanswered_count": 25

                        },

                        "4": {

                            "question_number": 5,

                            "question_title": "Do you skip your meals?",

                            "answer": {

                                "yes": "20",

                                "no": "25",

                                "rarely": "30",

                                "offenly": "50"

                            },

                            "answered_count": 20,

                            "unanswered_count": 25

                        }

                    }

                },

                "message": "Success"

            }

        }
        const SurveyData = {
            datasets: [{
                data: [response.data.survey.response_data.team_answered_percent, response.data.survey.response_data.team_unanswered_percent],
                backgroundColor: [
                    '#49DEB2',
                    '#FA3B4E',
                    // '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#49DEB2',
                    '#FA3B4E',
                    // '#FFCE56'
                ]
            }],
        };

        const html = <div>
            <Row className="SurveyResponses ">
                <Col>
                    <div className='hrDashboard-HeaddingTxt'>
                        <h6>Response Rate</h6>
                    </div>
                    <div className='flex align-items-center'>
                        <div>
                            <Doughnut width={130} height={130}
                                data={SurveyData}

                                options={{
                                    responsive: true,
                                    cutoutPercentage: 20
                                }}
                                plugins={plugins}
                            />
                        </div>
                        <div className='ml-2'>
                            <div className='flex'>
                                <div className='green'></div>
                                <span>{response.data.survey.response_data.team_answered_percent}% Answered</span>
                            </div>
                            <div className='flex mt-3'>
                                <div className='red'></div>
                                <span>{response.data.survey.response_data.team_unanswered_percent}% Unanswered</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p>{response.data.survey.response_data.answered_emp} out {response.data.survey.response_data.total_emp} employees have answered.</p>
                    </div>
                </Col>
                <Col>
                    <div className='flex justify-content-between survey-responseRow p-3'>
                        <div>
                            <div>
                                <h5 className='survay-resMainheadding'>Recipients</h5>
                                <h6>{response.data.survey.recipients} Members</h6>
                            </div>
                            <div className='mt-4'>
                                <h5 className='survay-resMainheadding'>Status</h5>
                                <h6>{response.data.survey.survey_status}</h6>
                            </div>
                            <div className='mt-4'>
                                <h5 className='survay-resMainheadding'>Created by</h5>
                                <h6>{response.data.survey.created_by}</h6>
                            </div>
                        </div>
                        {/* rightside */}
                        <div className='survey-second-Row'>
                            <div>
                                <div>
                                    <h5 className='survay-resMainheadding'>Audience</h5>
                                    <h6>{response.data.survey.audience} Members</h6>
                                </div>
                                <div className='mt-4'>
                                    <h5 className='survay-resMainheadding'>Published</h5>
                                    <h6>{response.data.survey.published_at}</h6>
                                </div>
                                <div className='mt-4'>
                                    <h5 className='survay-resMainheadding'>Survey Content</h5>
                                    <h6>{response.data.survey.total_questions}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>


                {
                    Object.entries(response.data.survey.questions).map((question, q) => {
                        console.log(question)
                        return (<Col>
                            <div className='questions mt-4'>
                                <div>
                                    <span className='firstQuestion'>{question[1].question_number}. {question[1].question_title}</span>
                                </div>

                                {Object.entries(question[1].answer).map((ans, a) => {

                                    return (
                                        <div className='mt-3 flex justify-content-between'>
                                            <div>
                                                <span>{ans[0]}</span>
                                            </div>
                                            <div className='survayprogreebar'>
                                                <ProgressBar labelSize={0} width={160} height={10} baseBgColor='#A0CEF3' bgColor='#467EEA' borderRadius={8} completed={ans[1]} />
                                                <span className='surveyPercentage'>{ans[1]}%</span>
                                            </div>
                                        </div>
                                    )
                                })}

                                <div className='surveyQuestionsdetails'>
                                    <p className='mr-2 answered'>{question[1].answered_count} Answered</p>
                                    <p className='unanswered'>{question[1].unanswered_count}  unanswered</p>
                                </div>
                            </div>
                        </Col>)
                    })
                }


            </Row>
        </div >


        setHtmlData(html)

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

    }, []);

    // center Text pieChart
    const plugins = [{
        beforeDraw: function (chart) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;
            ctx.restore();
            var fontSize = (height / 160).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "top";
            var text = "85%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]

    // backbtn
    let backToReports = useNavigate();
    function backToReportsPages(e) {
        e.preventDefault();
        let backUrl = "/Reports"
        backToReports(backUrl)
    }


    return (
        <>
            <SideBar />
            <Header />
            <section className="homepageDashboard">
                <Container className='performanceContainer'>
                    <Row className="events-performance">
                        <Col>
                            <div className='backButton' onClick={backToReportsPages}> {/* Arrow Button*/}
                                <MdOutlineArrowBackIosNew />
                                <span>Back</span>
                            </div>
                            <div className='Dashboard_Main_Headding mt-3'>
                                <h6>Survey Responses</h6>
                            </div>
                        </Col>

                        {htmlData}
                    </Row>
                </Container>
            </section>
        </>
    )
}
