import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb'
import "../../assets/styles/page.scss"
import "../../assets/styles/utilities.scss"
import CalendarTable from '../../components/Calendar/CalendarTable'
import Header from '../../components/Header/Header'

function MontlyView() {
  return (
    <div className='calendar-monthly page'>
      <SideBar />
      <div className="content-container">
        <Header/>
        <span className="divider"><hr /></span>
        <CalendarTable></CalendarTable>
      </div>

    </div>
  )
}

export default MontlyView