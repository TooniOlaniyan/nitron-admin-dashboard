import React from 'react'
import NavBar from '../../component/navbar/NavBar'
import SideBar from '../../component/sidebar/SideBar'
import './new.scss'

function New() {
  return (
    <div className='new'>
      <SideBar/>
      <div className="newContainer">
        <NavBar/>
        Test

      </div>
    </div>
  )
}

export default New