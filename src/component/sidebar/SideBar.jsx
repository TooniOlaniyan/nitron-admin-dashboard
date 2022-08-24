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
        <p className='main'>Main</p>
        <div>
          <AiOutlineDashboard size={23} fill='purple' />
          <p>Dashboard</p>
        </div>
      </div>
      <div className='sections'>
        <p>Lists</p>
        <ul>
          <li>
            <AiOutlineUser size={23} fill='purple' /> Users
          </li>
          <li>
            <MdOutlineProductionQuantityLimits size={23} fill='purple' />{' '}
            Products
          </li>
          <li>
            <AiOutlineCreditCard size={23} fill='purple' /> Orders
          </li>
          <li>
            <TbTruckDelivery size={23} fill='purple' /> Delivery
          </li>
        </ul>
      </div>
      <div className='sections'>
        <p>Useful</p>
        <ul>
          <li>
            <FcStatistics size={23} fill='purple' /> Stats
          </li>
          <li>
            <MdNotificationsNone size={23} fill='purple' /> Notification
          </li>
        </ul>
      </div>
      <div className='sections'>
        <p>Service</p>
        <ul>
          <li>
            <GrDocumentCloud size={23} /> System Health
          </li>
          <li>
            <MdCallEnd size={23} fill='purple' /> Logs
          </li>
          <li>
            <MdSettings size={23} fill='purple' /> Settings
          </li>
        </ul>
      </div>
      <div className='sections'>
        <p>User</p>
        <ul>
          <li>
            <CgProfile size={23} fill='purple' /> Profile
          </li>
          <li>
            <MdLogout size={23} fill='purple' /> Logout
          </li>
        </ul>
      </div>
      <div>color options</div>
    </div>
  )
}

export default SideBar