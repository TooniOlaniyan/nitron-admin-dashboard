import React from 'react'
import './widget.scss'
import {FaArrowUp , FaUserAlt , FaShoppingCart , FaDollarSign , FaAcquisitionsIncorporated} from 'react-icons/fa'


function Widget({type , percentage}) {
  let data;
  const amount = 100
  const diff = 20
  switch (type) {
    case 'user':
      data= {
        title: 'USERS',
        isMoney: false,
        link: 'see all users',
        icon: <FaUserAlt className='icon' style={{color: 'crimson' ,backgroundColor: 'rgba(255, 0, 0 , 0.3)'}}/>

      }
      
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all Orders',
        icon: (
          <FaShoppingCart
            className='icon'
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218, 165, 32 , 0.3)',
            }}
          />
        ),
      }
      
      break;
    case 'earning':
      data = {
        title: 'EARNING',
        isMoney: true,
        link: 'View Net Earnings',
        icon: (
          <FaDollarSign
            className='icon'
            style={{
              color: 'green',
              backgroundColor: 'rgba(0, 128, 0 , 0.3)',
            }}
          />
        ),
      }
      
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'View net Balance',
        icon: (
          <FaAcquisitionsIncorporated
            className='icon'
            style={{
              color: 'purple',
              backgroundColor: 'rgba(128, 0, 128 , 0.3)',
            }}
          />
        ),
      }
      
      break;
  
    default:
      break;
  }
  return (
    <div className='widget'>
      <div className='left'>
        <span className='user'>{data.title}</span>
        <span className='counter'>{data.isMoney && '$'} {amount}</span>
        <span className='link'>{data.link}</span>
      </div>

      <div className='right'>
        <div className='percentage negative'>
          <FaArrowUp />
          {diff}% 
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget 