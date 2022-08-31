import React, { useState } from 'react'
import NavBar from '../../component/navbar/NavBar'
import SideBar from '../../component/sidebar/SideBar'
import {FaUpload} from 'react-icons/fa'
import './new.scss'

function New() {
  const {file , setFile} = useState('')
  console.log(file)
  const handleChange  = (e) => {
    setFile(e.target.files[0])

  }
 
  return (
    <div className='new'>
      <SideBar />
      <div className='newContainer'>
        <NavBar />
        <div className='top'>
          <h1>Add New User</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://media.istockphoto.com/vectors/no-image-available-picture-coming-soon-missing-photo-image-vector-id1379257950?b=1&k=20&m=1379257950&s=170667a&w=0&h=RyBlzT5Jt2U87CNkopCku3Use3c_3bsKS3yj6InGx1I='
              }
              alt='image'
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>
                  Image:
                  <FaUpload style={{ cursor: 'pointer', color: 'GrayText' }} />
                </label>
                <input
                  onChange={handleChange}
                  type='file'
                  id='file'
                  style={{ display: 'none' }}
                />
              </div>
              <div className='formInput'>
                <label htmlFor=''>Username</label>
                <input type='text' placeholder='bolu_akinreti' />
              </div>
              <div className='formInput'>
                <label htmlFor=''>Name And Surname</label>
                <input type='text' placeholder='Bolu Akinreti' />
              </div>
              <div className='formInput'>
                <label htmlFor=''>Email</label>
                <input type='email' placeholder='bolu@gmail.com' />
              </div>
              <div className='formInput'>
                <label htmlFor=''>Phone Number</label>
                <input type='text' placeholder='090 344 322 233' />
              </div>
              <div className='formInput'>
                <label htmlFor=''>Password</label>
                <input type='password' />
              </div>
              <div className='formInput'>
                <label htmlFor=''>Address</label>
                <input type='text' placeholder='Wuse Zone 2' />
              </div>
              <div className='formInput'>
                <label htmlFor=''>Country</label>
                <input type='text' placeholder='Nigeria' />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New