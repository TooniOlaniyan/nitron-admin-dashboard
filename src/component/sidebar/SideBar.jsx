import React from 'react'
import './sidebar.scss'
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineCreditCard,
} from 'react-icons/ai'
import {
  MdOutlineProductionQuantityLimits,
  MdNotificationsNone,
  MdCallEnd,
  MdSettings,
  MdLogout,
} from 'react-icons/md'
import {TbTruckDelivery} from 'react-icons/tb'
import {FcStatistics} from 'react-icons/fc'
import {GrDocumentCloud} from 'react-icons/gr'
import {CgProfile} from 'react-icons/cg'

function SideBar() {
  return (
    <div className='sidebarContainer'>
      <div className='header'>
        <span>Nitron</span>
      </div>
      <div className='dashboard'>
        <p>Main</p>
        <div>
          <AiOutlineDashboard />
          <p>Dashboard</p>
        </div>
      </div>
      <div className='sections'>
        <p>Lists</p>
        <ul>
          <li>
            <AiOutlineUser /> users
          </li>
          <li>
            <MdOutlineProductionQuantityLimits /> Products
          </li>
          <li>
            <AiOutlineCreditCard /> Orders
          </li>
          <li>
            <TbTruckDelivery /> Delivery
          </li>
        </ul>
      </div>
      <div className='sections'>
        <p>Useful</p>
        <ul>
          <li>
            <FcStatistics /> Stats
          </li>
          <li>
            <MdNotificationsNone /> Notification
          </li>
        </ul>
      </div>
      <div className='sections'>
        <p>Service</p>
        <ul>
          <li>
            <GrDocumentCloud /> System Health
          </li>
          <li>
            <MdCallEnd /> Logs
          </li>
          <li>
            <MdSettings /> Settings
          </li>
        </ul>
      </div>
      <div className='sections'>
        <p>User</p>
        <ul>
          <li>
            <CgProfile /> Profile
          </li>
          <li>
            <MdLogout /> Logout
          </li>
        </ul>
      </div>
      <div>color options</div>
    </div>
  )
}

export default SideBar