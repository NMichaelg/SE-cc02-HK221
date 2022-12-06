import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'
import "../../assets/styles/page.scss"
import "../../assets/styles/utilities.scss"
import MultipleTeamBody from './MultipleTeamBody/MultipleTeamBody'

function MultipleTeams() {
    return (
        <div className='teams page'>
            <SideBar />
            <div className="content-container">
                <Header></Header>
                <span className="divider"><hr /></span>
                <MultipleTeamBody></MultipleTeamBody>
            </div>
        </div>
    )
}

export default MultipleTeams