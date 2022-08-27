import React from 'react'
import './feature.scss'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { RiArrowDownSLine } from 'react-icons/ri'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function Featured() {
  return (
    <div className='featured'>
      <div className='top'>
        <p>Total Revenue</p>
        <BsThreeDotsVertical/>
      </div>
      <div className='barWrapper'>
        <CircularProgressbar value={30} text='30%' strokeWidth={5}/>
      </div>
      <div className="text">
        <p className='sale'>Total sales made today</p>
        <p className='price'>$690</p>
        <p className='transaction'>Previous transaction processing. Last payment may not be included</p>
      </div>

      <div className="stats">
        <div className="targets">
          <p>Target</p>
          <p>Last Week</p>
          <p>Last Month</p>
        </div>
        <div className='value'>
          <p className='positive'> <RiArrowDownSLine className='icon'  /> $141k  </p>
          <p className='negative'> <RiArrowDownSLine className='icon'  /> $12k  </p>
          <p className='positive'> <RiArrowDownSLine className='icon'  /> $114k  </p>

        </div>
      </div>
    </div>
  )
}

export default Featured