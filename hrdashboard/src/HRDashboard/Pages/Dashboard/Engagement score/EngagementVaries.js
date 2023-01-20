import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Select from 'react-select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

export default function EngagementVaries(props) {
    const [graphData, setGraphData] = useState();

    //Set the graph data when modal is opened
    useEffect(() => {
        const data = props.engagementGraphData;
        setGraphData(data);
    }, [])

    const options = [
        { value: 'Challenges', label: 'Challenges' },
        { value: 'Events', label: 'Events' },
        // { value: 'Threads', label: 'Threads' },
        // { value: 'Habits', label: 'Habits' },
        // { value: 'Exercise', label: 'Exercise' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectOnChange = (e) => {
        setSelectedOption(e.value);

        //On dropdown change set the graphdata based on the selected dropdown opyion
        // This needs to be made dynamic and change the URL
        // axios({
        //     method: "get",
        //     url: "",
        //     data: payload
        // }).then(function (response) {


        // }).catch(function (error) {
        //     console.log(error);
        // });


        const response = {

            "success": true,

            "data": {

                "team_engagement_graph": [{

                    "name": "Frontend Developer",

                    "value": 8



                }, {

                    "name": "Backend Developer",

                    "value": 4

                }, {

                    "name": "UIUX Design",

                    "value": 5.3

                }
                    // , {

                    //     "name": "Nutrition",

                    //     "value": 1.80

                    // }, {

                    //     "name": "General",

                    //     "value": 1.90

                    // }
                ]

            },

            "message": "Success"

        }

        setGraphData(response.data.team_engagement_graph);
    }

    return (
        <Col>
            <div>
                <div className='flex justify-content-between align-items-center mt-3 mb-4'>
                    <div className='hrDashboard-HeaddingTxt'>
                        <h6>Report</h6>
                    </div>
                    <div>
                        <Select
                            defaultValue={selectedOption}
                            onChange={handleSelectOnChange}
                            options={options}
                        />
                    </div>
                </div>
                <div>
                    {/* barchart */}
                    <ResponsiveContainer height={300}>
                        <BarChart
                            width={700}
                            height={300}
                            data={graphData}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                            }}
                            barSize={20}
                        >
                            <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 30 }} style={{ fontSize: "0.6em" }} />
                            {/* <YAxis /> */}
                            <Tooltip />
                            {/* <Legend /> */}
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }}>
                                <LabelList
                                    valueAccessor={props => {
                                        const { value } = props;
                                        return Array.isArray(value) ? value[1] - value[0] : value;
                                    }}
                                    position={'top'}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Col>
    )
}
