import React from 'react'
import './sidebar.scss'
import { AiOutlineDashboard, AiOutlineUser } from 'react-icons/ai'

function SideBar() {
  return (
    <div className='sidebarContainer'>
      <div className='header'>Nitron</div>
      <div>
        <AiOutlineDashboard/>
        <p>Dashboard</p>
      </div>
      <div>
        <p>Lists</p>
        <ul>
          <li>users</li>
          <li>Products</li>
          <li>Orders</li>
          <li>Delivery</li>
        </ul>
      </div>
      <div>
        <p>Useful</p>
        <ul>
          <li>Stats</li>
          <li>Notification</li>
        </ul>
      </div>
      <div>
        <p>Service</p>
        <ul>
          <li>System Health</li>
          <li>Logs</li>
          <li>Settings</li>
        </ul>
      </div>
      <div>
        <p>User</p>
        <ul>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar