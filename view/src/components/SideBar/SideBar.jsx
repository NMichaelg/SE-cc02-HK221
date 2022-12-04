import React from 'react'
import "./sidebar.scss"
import "../../assets/styles/utilities.scss"
import UWCLogo from "../../assets/svgs/LeafLogo.svg"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PinDropIcon from '@mui/icons-material/PinDrop';
import {Link} from 'react-router-dom';

function SideBar() {
    return (
        <div className='sidebar'>
            <div className="top">
                <div className="top-widget widget">
                    <div className="title">
                        <div className="left">
                            <span className='logo'>
                                <img src={UWCLogo} alt="This could be logo of UWC 2.0" />
                            </span>
                        </div>
                        <div className="right">
                            <h1 className='urban-title'>Urban Waste</h1>
                            <h2 className='management-title'>Management</h2>

                            <span className='divider'>
                                <hr />
                            </span>
                        </div>
                    </div>
                    <div className="notification">
                        <ul>
                            <li className='notify-item' >
                                <span>Messages</span>
                                <span className='numberIcon'>1</span>
                            </li>
                            <li className='notify-item'>
                                <span>Notification</span>
                                <span className='numberIcon'>2</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="center">
                <div className="center-widget widget">
                    <ul className='menu'>
                        <li className='menu-row-wrapper'>
                            <Link to="/calendar" className = 'menu-row  active'>
                               
                                    <CalendarMonthIcon className='menu-icon' fontSize='medium'></CalendarMonthIcon>
                                    <span className="menu-title">Calendar</span>
                                
                            </Link>
                        </li>
                        <li className='menu-row-wrapper'>
                            <Link to="/teams" className = 'menu-row'>
                                    <GroupsIcon className='menu-icon' fontSize='medium'></GroupsIcon>
                                    <span className="menu-title">Teams</span>
                            </Link>
                        </li>
                        <li className='menu-row-wrapper'>
                            <Link to="/resources" className = 'menu-row'>
                                    <LocalShippingIcon className='menu-icon' fontSize='medium'></LocalShippingIcon>
                                    <span className="menu-title">Vehicles</span>
                            </Link>
                        </li>
                        <li className='menu-row-wrapper'>
                            <Link to="/areas" className = 'menu-row'>
                                    <PinDropIcon className='menu-icon' fontSize='medium'></PinDropIcon>
                                    <span className="menu-title">Areas</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom"></div>
        </div>
    )
}

export default SideBar