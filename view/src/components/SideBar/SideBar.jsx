import React from 'react'
import "./sidebar.scss"
import "../../assets/styles/utilities.scss"
import UWCLogo from "../../assets/svgs/LeafLogo.svg"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PinDropIcon from '@mui/icons-material/PinDrop';
import {NavLink, useLocation} from 'react-router-dom';

const setActive = function(path, curPath){
    return curPath == path ? "active" : "";
}

function SideBar() {
    const curPath = useLocation().pathname;

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
                            <NavLink to="/calendar" className = {'menu-row ' + setActive("/calendar", curPath)}>
                               
                                    <CalendarMonthIcon className='menu-icon' fontSize='medium'></CalendarMonthIcon>
                                    <span className="menu-title">Calendar</span>
                                
                            </NavLink>
                        </li>
                        <li className='menu-row-wrapper'>
                            <NavLink to="/teams" className = {'menu-row ' + setActive("/teams", curPath)}>
                                    <GroupsIcon className='menu-icon' fontSize='medium'></GroupsIcon>
                                    <span className="menu-title">Teams</span>
                            </NavLink>
                        </li>
                        <li className='menu-row-wrapper'>
                            <NavLink to="/resources" className = {'menu-row ' + setActive("/resources", curPath)}>
                                    <LocalShippingIcon className='menu-icon' fontSize='medium'></LocalShippingIcon>
                                    <span className="menu-title">Vehicles</span>
                            </NavLink>
                        </li>
                        <li className='menu-row-wrapper'>
                            <NavLink to="/areas" className = {'menu-row ' + setActive("/areas", curPath)}>
                                    <PinDropIcon className='menu-icon' fontSize='medium'></PinDropIcon>
                                    <span className="menu-title">Areas</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom"></div>
        </div>
    )
}

export default SideBar