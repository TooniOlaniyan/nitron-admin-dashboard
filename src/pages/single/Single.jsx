import React from 'react'
import './single.scss'
import SideBar from '../../component/sidebar/SideBar'
import NavBar from '../../component/navbar/NavBar'

function Single() {
  return (
    <div className='single'>
      <SideBar/>
      <div className="container">
        <NavBar/>
        content
      </div>

    </div>
  )
}

export default Single