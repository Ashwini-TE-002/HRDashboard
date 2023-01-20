import React, { useState, useRef, useEffect } from 'react'
import './SidebarComponent.moudle.css'
import SidebarEngagementScore from './SidebarEngagementScore'
import SidebarHealthScore from './SidebarHealthScore'
import SideBarMentalHealth from './SideBarMentalHealth'
import { IoMdClose } from 'react-icons/io'
// import { useMediaQuery } from 'react-responsive'

export default function SidebarComponent(props) {

    // const isMobileDevice = useMediaQuery({ maxWidth: '1200px' });

    // sidebar
    const sidebar = useRef()
    const [isOpen, setIsOpen] = useState(props.isOpen);
    const ToggleSidebar = (e) => {
        console.log(isOpen)
        setIsOpen(!isOpen);
    }




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

                "team_name": "devOps",

                "team_id": 5,

                "team_engagement_data": {

                    "team_engaged_score": 4,

                    "team_focus_on": ["Events", "DHU"]

                },

                "team_health_data": {

                    "team_health_score": 5.5,

                    "team_focus_on": ["Hydration", "Nurtrition"]

                },

                "team_mentalhealth_data": {

                    "team_mentalhealth_score": 7.8,

                    "team_focus_on": ["Stress Level", "Sleep"]

                }

            },

            "message": "Success"

        }

        const html = <div>
            <div className='sidebarheadder-area'>
                <h6>{response.data.team_name}</h6>
            </div>
            {/* sidebar component content */}
            <div className="sidebarWrapper">
                <div>
                    <SidebarEngagementScore data={response.data.team_engagement_data} />
                </div>
                <div>
                    <SidebarHealthScore data={response.data.team_health_data} />
                </div>
                <div>
                    <SideBarMentalHealth data={response.data.team_mentalhealth_data} />
                </div>
            </div>
        </div>


        setHtmlData(html)

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

    }, []);
    return (
        <React.Fragment>
            <div className="container-fluid mt-3">

                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                    <div className="container-fluid p-2">
                        {/* <a className="navbar-brand text-primary mr-0">Company Logo</a> */}
                        <div className="form-inline ml-auto">
                            <div className="btn btn-primary" >
                                <i className="fa fa-bars" />
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={`sidebar ${(props.isOpen === true) ? 'active' : ''}`} ref={sidebar}>
                    {/* sidebar component */}
                    <div className='p-2'>
                        <div className="flex justify-content-end">
                            <button className="btclose" onClick={() => props.parentFunction(props.isOpen)}>
                                <IoMdClose size={20} color={'#686868'} />
                            </button>
                        </div>
                        {htmlData}
                    </div>
                </div>
                <div className={`sidebar-overlay ${(props.isOpen === true) ? 'active' : ''}`} ></div>
            </div>

        </React.Fragment>
    )
}
