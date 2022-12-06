import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import "../../assets/styles/page.scss"
import Header from '../../components/Header/Header'
import "./multipleVehicles.scss"

function MultipleVehicles() {
  return (
    <div className='Vehicles page'>
        <SideBar/>
        <div className="content-container">
            <Header></Header>
            <span className='divider'><hr /></span>
            <div className='parent'>
            <div className='b1'>Behicle</div>
            <div className='b2'>Vehicles</div>
            </div>
            
        </div>
    </div>
  )
}

export default MultipleVehicles