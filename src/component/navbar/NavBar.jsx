import React from 'react'
import './navbar.scss'

function NavBar() {
  return (
    <div className='navBar'>
      <div className="search">
        <input type="search" name="search" id="search" />
      </div>
      <div className="navLinks">
        <div className='english'>
          icon
          <p>English</p>
        </div>
        <div>icon</div>
        <div>icon</div>
        <div>icon</div>
        <div>icon</div>
        <div>icon</div>
        <div className='image'>
          <img src="" alt="" />
        </div>

      </div>
    </div>
  )
}

export default NavBar