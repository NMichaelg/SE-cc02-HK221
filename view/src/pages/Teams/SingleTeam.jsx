import React from 'react'
import SideBar from '../../components/SideBar/SideBar'

function SingleTeam() {
  return (
    <div className='team page'>
      <SideBar />
      <div className="content-container">
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