import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import "../../assets/styles/page.scss"

function MontlyView() {
  return (
    <div className='calendar-monthly page'>
        <SideBar/>
        <div className="content-container">
            Calendar page
        </div>
    </div>
  )
}

export default MontlyView