import React from 'react'
import './list.scss'
import NavBar from '../../component/navbar/NavBar'
import SideBar from '../../component/sidebar/SideBar'

function List() {
  return (
    <div className='list'>
      <SideBar/>
      <div className="listContainer">
        <NavBar/>
        dataContainer
      </div>
    </div>
  )
}

export default List