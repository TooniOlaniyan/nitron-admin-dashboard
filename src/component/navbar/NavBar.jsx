import React from 'react'
import './navbar.scss'
import {TiWorld} from 'react-icons/ti'
import{CgMoon} from 'react-icons/cg'
import { AiOutlineSearch } from 'react-icons/ai'
import {
  BiBell,
  BiListUl,
  BiMessageRoundedDots,
  BiExitFullscreen,
} from 'react-icons/bi'

function NavBar() {
  return (
    <div className='navBar'>
      <div className='search'>
        <input className='searchInput' type='search' name='search' id='search' placeholder='Search' />
        <AiOutlineSearch className='icon'/>
      </div>
      <div className='navLinks'>
        <div className='english'>
          <TiWorld className='icons' />
          <p>English</p>
        </div>
        <div>
          <CgMoon className='icons' />
        </div>
        <div>
          <BiExitFullscreen className='icons' />
        </div>
        <div className='relative'>
          <BiBell className='icons' />
          <p className='absolute'>3</p>
        </div>
        <div className='relative'>
          <BiMessageRoundedDots className='icons' />
          <p className='absolute'>12</p>
        </div>
        <div>
          <BiListUl className='icons' />
        </div>
        <div className='image'>
          <img src='' alt='' />
        </div>
      </div>
    </div>
  )
}

export default NavBar