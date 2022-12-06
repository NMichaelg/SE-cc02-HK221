import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'
import "../../assets/styles/page.scss"
import "../../assets/styles/utilities.scss"


function DayView() {
  return (
    <div className='calendar-daily page'>
        <SideBar/>
        <div className="content-container">
            <Header></Header>
            <span className='divider'><hr /></span>
            hello
        </div>
    </div>
  )
}

export default DayView