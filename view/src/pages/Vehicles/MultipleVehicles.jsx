import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import "../../assets/styles/page.scss"
import Header from '../../components/Header/Header'
import "./multipleVehicles.scss"
import MultipleVehiclesBody from '../Vehicles/MultipleVehiclesBody'
import { useEffect, useState, useNavigate, useLocation } from 'react';

function MultipleVehicles() {
  return (
    <div className='Vehicles page'>
      <SideBar />
      <div className="content-container">
        <Header></Header>
        <span className="divider"><hr /></span>
        <MultipleVehiclesBody></MultipleVehiclesBody>
      </div>
    </div>
  )
}

export default MultipleVehicles