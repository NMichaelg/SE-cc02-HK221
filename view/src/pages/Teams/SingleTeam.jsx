import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Header from "../../components/Header/Header"
import {useParams} from "react-router-dom"
import SingleTeamBody from './SingleTeamBody/SingleTeamBody'

function SingleTeam() {
  
  return (
    <div className='team page'>
      <SideBar />
      <div className="content-container">
        <Header></Header>
        <span className="divider"><hr /></span>
        <SingleTeamBody></SingleTeamBody>
      </div>
    </div>
  )
}

export default SingleTeam