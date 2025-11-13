import React from 'react';
import './Profile.css';
import UpdateProfile from '../../components/UpdateProfile/UpdateProfile';
import UpdateInfo from '../../components/UpdateInfo/UpdateInfo';

const Profile = () => {
  return (
    <div>
      <UpdateProfile />
      <UpdateInfo />
    </div>
  )
}

export default Profile
