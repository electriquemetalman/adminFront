import React from 'react'
import './UpdateProfile.css'
import { assets } from '../../assets/assets'

const UpdateProfile = () => {
  return (
    <div className='update-Profile'>
        <div className='update-profile-display'>
            <div className='contain-profile'>
                <img src="http://localhost:4000/profiles/1762996355003Maelle-removebg-preview.png" alt='' />
            </div>
        </div>
        <div className='update-profile-form'>
            <form className='flex-col'>
                <div className='update-profile-pic-upload flex-col'>
                    <p>Upload Profile Picture</p>
                    <label htmlFor='image'>
                        <img src={assets.upload_area} alt='' />
                    </label>
                    <input type='file' id='image' hidden required/>
                </div>
                <button type='submit' className='update-btn'>Update Profile</button>    
            </form>        
        </div>
    </div>
  )
}

export default UpdateProfile
