import React from 'react'
import './single.scss'
import SideBar from '../../component/sidebar/SideBar'
import NavBar from '../../component/navbar/NavBar'
import image1 from '../../assets/image1.jpg'
import Datatable from '../../component/datatable/Datatable'

function Single() {
  return (
    <div className='single'>
      <SideBar />
      <div className='container'>
        <NavBar />
        <div className='content'>
          <div className='details'>
            <p className='editButton'>Edit</p>
            <h2>Information</h2>
            <div className='bottom'>
              <div className='imageSingle'>
                <img src={image1} alt='' />
              </div>
              <div className='info'>
                <h2 className='userName'>Jessica Kosoko</h2>
                <span>Email: jessica@gmail.com</span>
                <span>Phone: +234 90 232 675</span>
                <span>Address: Wuse Zone 5</span>
                <span>Country: Nigeria</span>
              </div>
            </div>
          </div>
          <div className='chart'></div>
        </div>
        <Datatable/>
      </div>
    </div>
  )
}

export default Single