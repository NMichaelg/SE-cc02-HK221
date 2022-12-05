import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'
import "../../assets/styles/page.scss"
import "../../assets/styles/utilities.scss"


function MultipleTeams() {
    return (
        <div className='teams page'>
            <SideBar />
            <div className="content-container">
                <Header></Header>
                <span className="divider"><hr /></span>
                
            </div>
        </div>
    )
}

export default MultipleTeams