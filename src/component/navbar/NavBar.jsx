import React from 'react'
import './navbar.scss'
import {TiWorld} from 'react-icons/ti'
import{CgMoon} from 'react-icons/cg'
import {
  BiBell,
  BiListUl,
  BiMessageRoundedDots,
  BiExitFullscreen,
} from 'react-icons/bi'

function NavBar() {
  return (
    <div className='navBar'>
      <div className="search">
        <input type="search" name="search" id="search" />
      </div>
      <div className="navLinks">
        <div className='english'>
          <TiWorld className='icons'/>
          <p>English</p>
        </div>
        <div><CgMoon className='icons'/></div>
        <div><BiExitFullscreen className='icons'/></div>
        <div><BiBell className='icons'/></div>
        <div><BiMessageRoundedDots className='icons'/></div>
        <div><BiListUl className='icons'/></div>
        <div className='image'>
          <img src="" alt="" />
        </div>

      </div>
    </div>
  )
}

export default NavBar