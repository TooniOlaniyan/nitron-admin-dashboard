import React from 'react'
import MainSection from '../../component/mainSection/MainSection'
import NavBar from '../../component/navbar/NavBar'
import SideBar from '../../component/sidebar/SideBar'
import './home.scss'

function Home() {
  return (
    <div className='main-container'>
      <SideBar />

      <div className='mainContent'>
        <NavBar />
        <MainSection />
      </div>
    </div>
  )
}

export default Home