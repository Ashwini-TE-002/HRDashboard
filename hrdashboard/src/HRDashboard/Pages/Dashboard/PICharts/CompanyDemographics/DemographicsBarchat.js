import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive'

export default function DemographicsBarchat() {
    const [graphData, setGraphData] = useState();
    useEffect(() => {
        // axios({
        //     method: "get",
        //     url: "",
        //     data: payload
        // }).then(function (resp) {


        // })

        const response = {
            "success": true,
            "data": {
                "company_demography": [{
                    "filter_by": "(18-26)",
                    "male": 40,
                    "female": 24
                }, {
                    "filter_by": "(27-35)",
                    "male": 30,
                    "female": 13
                }, {
                    "filter_by": "(36-44)",
                    "male": 20,
                    "female": 9
                }, {
                    "filter_by": "(45-53)",
                    "male": 27,
                    "female": 39
                }, {
                    "filter_by": "(54-62)",
                    "male": 18,
                    "female": 4
                }]
            },
            "message": "Success"
        }
        // Set Graph Data 
        setGraphData(response.data.company_demography);
    }, [])

    // select dropdown
    const dropdown = [
        { value: 'name', label: 'name' },
        { value: 'Department', label: 'Department' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelectedOption = (e) => {
        setSelectedOption(e.value);

        // This needs to be made dynamic and change the URL
        // axios({
        //     method: "get",
        //     url: "",
        //     data: payload
        // }).then(function (resp) {


        // })

        const response = {
            "success": true,
            "data": {
                "company_demography": [{
                    "filter_by": "Frontend",
                    "male": 40,
                    "female": 24
                }, {
                    "filter_by": "Backend",
                    "male": 30,
                    "female": 13
                }, {
                    "filter_by": "DevOps",
                    "male": 20,
                    "female": 9
                }, {
                    "filter_by": "Cyber",
                    "male": 27,
                    "female": 39
                }, {
                    "filter_by": "Marketing",
                    "male": 18,
                    "female": 4
                }]
            },
            "message": "Success"
        }
        // Set Graph Data 
        setGraphData(response.data.company_demography);

    }
    const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });
    return (
        <div>
            <div className='flex justify-content-between'>
                <div className='hrDashboard-HeaddingTxt'>
                    <h6>Company Demographics</h6>
                </div>
                <div>
                    <Select
                        defaultValue={selectedOption}
                        onChange={handleSelectedOption}
                        options={dropdown}
                    />
                </div>
            </div>
            <div>
                <ResponsiveContainer height={360}>
                    <BarChart
                        width={500}
                        height={360}
                        data={graphData}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="filter_by" style={{ fontSize: "0.6em" }} />
                        <YAxis style={{ fontSize: "0.6em" }} />
                        {/* <Tooltip /> */}
                        {/* <Legend /> */}
                        <Bar dataKey="male" fill="#A0CEF3" />
                        <Bar dataKey="female" fill="#E678AD" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='flex mb-3 align-items-center justify-content-center'>
                <div className='flex items-center mr-3'>
                    <div className='male'></div>
                    <span>Male</span>
                </div>
                <div className='flex items-center'>
                    <div className='female'></div>
                    <span>Female</span>
                </div>
            </div>
        </div>
    )
}