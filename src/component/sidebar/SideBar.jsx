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
  MdOutlineSettingsSystemDaydream,
} from 'react-icons/md'
import {TbTruckDelivery} from 'react-icons/tb'
import { IoStatsChartSharp } from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'

function SideBar() {
  return (
    <div className='sidebarContainer'>
      <div className='header'>
        <span>Nitron</span>
      </div>
      <div className='dashboard'>
        <p className='main'>Main</p>
        <div>
          <AiOutlineDashboard className='icons' />
          <p>Dashboard</p>
        </div>
      </div>
      <div className='sections'>
        <p>Lists</p>
        <ul>
          <li>
            <AiOutlineUser className='icons' /> Users
          </li>
          <li>
            <MdOutlineProductionQuantityLimits className='icons' /> Products
          </li>
          <li>
            <AiOutlineCreditCard className='icons' /> Orders
          </li>
          <li>
            <TbTruckDelivery className='icons' /> Delivery
          </li>
        </ul>
      </div>
      <div className='sections'>
        <p>Useful</p>
        <ul>
          <li>
            <IoStatsChartSharp className='icons' /> Stats
          </li>
          <li>
            <MdNotificationsNone className='icons' /> Notification
          </li>
        </ul>
      </div>
      <div className='sections'>
        <p>Service</p>
        <ul>
          <li>
            <MdOutlineSettingsSystemDaydream className='icons' /> System Health
          </li>
          <li>
            <MdCallEnd className='icons' /> Logs
          </li>
          <li>
            <MdSettings className='icons' /> Settings
          </li>
        </ul>
      </div>
      <div className='sections'>
        <p>User</p>
        <ul>
          <li>
            <CgProfile className='icons' /> Profile
          </li>
          <li>
            <MdLogout className='icons' /> Logout
          </li>
        </ul>
      </div>
      <div>color options</div>
    </div>
  )
}

export default SideBar