import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'
import "../../assets/styles/page.scss"
import "../../assets/styles/utilities.scss"
import MultpleTeamsBody from './MultipleTeamsBody/MultpleTeamsBody'


function MultipleTeams() {
    return (
        <div className='teams page'>
            <SideBar />
            <div className="content-container">
                <Header></Header>
                <span className="divider"><hr /></span>
                <MultpleTeamsBody></MultpleTeamsBody>
            </div>
        </div>
    )
}

export default MultipleTeams