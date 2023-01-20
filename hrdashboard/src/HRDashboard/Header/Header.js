import React, { useState, useRef } from 'react';
import "./Header.moudle.css";
import DashboardLogo from "../../assets/images/logo-sm.png";
import { Container, Col, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import LetteredAvatar from "react-lettered-avatar";
import { FaBars } from "react-icons/fa";
import SideBar from "../Navigaction/SideBar";
import { FiLogOut } from 'react-icons/fi'
import { RiTeamFill } from 'react-icons/ri'
// popover
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import RightNavBar from '../Navigaction/RightNavBar';

const Header = () => {

    // popover
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const hancleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };


    const [open, setOpen] = useState(false);
    let className;
    if (open) {
        className = "hamburger-icon-active";
    } else {
        className = "hamburger-icon";
    }

    const closeSidebar = () => {
        setOpen(!open);
    }

    // rightsidebar
    const [openSidebar, setopenSidebar] = useState(false);
    let rightMenu;
    if (openSidebar) {
        rightMenu = "rightSidebarMenu-Active"
    } else {
        rightMenu = "rightSidebarMenu"
    }

    const closeRightsideBar = () => {
        setopenSidebar(!openSidebar);
    }

    return (
        <nav className="HrDashboard-header">
            <div>
                <Row>
                    <Col>
                        <div className="flex justify-content-between header-mainArea align-items-center">
                            {/* mobile menu bars */}
                            <div className={className} onClick={() => setOpen(!open)}>
                                <FaBars size={20} />
                            </div>
                            <div>
                                <img src={DashboardLogo} className="DashboardLogo" alt="Logo" />
                            </div>

                            <div className="profile-section flex align-items-center">
                                {/* <div>
                                    <AiOutlineQuestionCircle size={15} />
                                </div>
                                <div className="mx-4 header-icons">
                                    <SlDirections size={15} />
                                </div> */}
                                {/* profile */}
                                <div className="flex ">
                                    <div className='Notification'>
                                        <div className='Notification-counter'>300</div>
                                        <div >
                                            <LetteredAvatar
                                                name="Demo User"
                                                size={26}
                                                backgroundColor="rgb(55,55,22)"
                                            />
                                        </div>
                                    </div>

                                    {/* username */}
                                    <div ref={ref} className="ml-1 flex align-items-center">
                                        <h6 className="mb-0">Demo User</h6>
                                        <button onClick={hancleClick} className="popoverBtn">
                                            <IoIosArrowDown /></button>
                                        <Overlay
                                            show={show}
                                            target={target}
                                            placement="bottom"
                                            container={ref}
                                            containerPadding={20}
                                        >
                                            <Popover id="popover-contained">
                                                <Popover.Header as="h3">Demo User</Popover.Header>
                                                <Popover.Body>
                                                    <FiLogOut size={20} />
                                                    <button className='LogoutPopoverBtn'>LogOut</button>
                                                </Popover.Body>
                                            </Popover>
                                        </Overlay>

                                    </div>
                                </div>
                            </div >
                        </div >
                    </Col >
                </Row >
            </div >
            <div show={open} className="sidebar-wrapper">
                <button className={`sidebar-close ${className}`} onClick={closeSidebar}>X</button>
                <SideBar show={open} />
            </div>
        </nav >
    );
};

export default Header;
