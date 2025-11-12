import React, {useContext} from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets.js'
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {

  const { logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt='' />
        <div className='profile'>
          <img src={assets.profile_icon} alt='' />
          <ul className='nav-profile-dropdown'>
            <li>
              <img src={assets.bag_icon} alt=''/>
              <p>Profile</p>
            </li>
            <hr />
            <li onClick={logout}>
              <img src={assets.logout_icon} alt=''/>
              <p>Logout</p>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
