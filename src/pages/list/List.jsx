import React from 'react'
import './list.scss'
import NavBar from '../../component/navbar/NavBar'
import SideBar from '../../component/sidebar/SideBar'
import Datatable from '../../component/datatable/Datatable'

function List() {
  return (
    <div className='list'>
      <SideBar/>
      <div className="listContainer">
        <NavBar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List