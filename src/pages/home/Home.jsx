import React from 'react'
import NavBar from '../../component/navbar/NavBar'
import SideBar from '../../component/sidebar/SideBar'
import './home.scss'

function Home() {
  return (
    <div>
      <SideBar/>
      <NavBar/>
    </div>
  )
}

export default Home