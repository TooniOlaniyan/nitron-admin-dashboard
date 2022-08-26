import React from 'react'
import './widget.scss'
import {FaArrowUp , FaUserAlt} from 'react-icons/fa'

function Widget({name , valueDone , percentage}) {
  return (
    <div className='widget'>
      <div className='left'>
        <span className='user'>{name}</span>
        <span className='counter'>{valueDone}</span>
        <span className='link'>See all users</span>
      </div>

      <div className='right'>
        <div className={percentage <= '0' ? 'percentage negative' : 'percentage positive'}>
          <FaArrowUp />
          {percentage}
        </div>
        <FaUserAlt className='icon' />
      </div>
    </div>
  )
}

export default Widget 