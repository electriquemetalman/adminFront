import React from 'react'
import './UpdateInfo.css'

const UpdateInfo = () => {
  return (
    <div className='update-info'>
        <div className='update-info-form'>
            <form className='update-form flex-col'>
                <div className='update-user-group flex-col'>
                    <label>name</label>
                    <input type='text' name='name' />
                </div>
                <div className='update-user-group flex-col'>
                    <label>Email</label>
                    <input type='email' name='email' />
                </div>
                <button type='submit' className='update-btn'>Update Info</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateInfo
