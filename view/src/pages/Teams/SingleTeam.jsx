import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Header from "../../components/Header/Header"

function SingleTeam() {
  return (
    <div className='team page'>
      <SideBar />
      <div className="content-container">
        <Header></Header>
        <span className="divider"><hr /></span>
        Single Team page and config
        <ul>
          <li>
            - 1 widget with Team detail
          </li>
          <li>
            - 1 wigget get employee list
          </li>
          <li>
            - 1 widget with vehicle list
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SingleTeam