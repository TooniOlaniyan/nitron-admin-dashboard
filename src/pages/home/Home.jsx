import React from 'react'
import NavBar from '../../component/navbar/NavBar'
import SideBar from '../../component/sidebar/SideBar'
import './home.scss'
import Widget from '../../component/widget/Widget'

function Home() {
  return (
    <div className='main-container'>
      <SideBar />

      <div className='mainContent'>
        <NavBar />
        <div className='widgets'>
          <Widget name='Felix' valueDone='1,450' percentage='-10%' />
          <Widget name='Bart' valueDone='10,450' percentage='60%' />
          <Widget name='Tariola' valueDone='16,450' percentage='80%' />
          <Widget name='chikal' valueDone='450' percentage='-70%' />
        </div>
      </div>
    </div>
  )
}

export default Home