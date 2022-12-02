import React from 'react'
import "./sidebar.scss"

function SideBar() {
    return (
        <div className='sidebar'>
            <div className="top">
                <div className="top-widget">
                <div className="title">
                    <div className="left">
                        <span className='logo'>caila</span>
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
            <div className="center">hah</div>
            <div className="bottom">aha</div>
        </div>
    )
}

export default SideBar