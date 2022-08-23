import React from 'react'
import NavBar from '../../component/navbar/NavBar'
import SideBar from '../../component/sidebar/SideBar'
import './home.scss'

function Home() {
  return (
    <div className='main-container'>
      <SideBar/>
      <NavBar/>
    </div>
  )
}

export default Home