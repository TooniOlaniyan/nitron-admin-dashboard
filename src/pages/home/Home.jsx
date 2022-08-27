import React from 'react'
import NavBar from '../../component/navbar/NavBar'
import SideBar from '../../component/sidebar/SideBar'
import './home.scss'
import Widget from '../../component/widget/Widget'
import Chart from '../../component/chart/Chart'
import Featured from '../../component/featured/Featured'

function Home() {
  return (
    <div className='main-container'>
      <SideBar />

      <div className='mainContent'>
        <NavBar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order'  />
          <Widget type='earning'  />
          <Widget type='balance'  />
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
        </div>
      </div>
    </div>
  )
}

export default Home