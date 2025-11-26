import React, {useContext, useState, useCallback} from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets.js'
import { AuthContext } from '../../context/AuthContext';
import { NotificationContext } from '../../context/NotificationContext.jsx';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Navbar = ({url}) => {

  const { logout, token } = useContext(AuthContext);
  const { notifications, unread, markAllAsRead } = useContext(NotificationContext);
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [user, setUser] = useState(null);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (unread > 0) {
      markAllAsRead();
    }
  };

  const fetchUser = useCallback(async () => {
    try {
      const response = await axios.get(url + "/api/user/getUser", {headers: {Authorization: `Bearer ${token}`}});
      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  }, [url, token]);

  React.useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="navbar">
      
      
      <img className="logo" src={assets.logo} alt="Logo" />

     
      <div className="navbar-right">

        <div className="notif-container">
          <img
            src={assets.notification_icon}
            alt="notifications"
            className="notification-icon"
            onClick={toggleNotifications}
          />

          {unread > 0 && <span className="notif-badge">{unread}</span>}

          {showNotifications && (
            <div className="notif-dropdown">
              {notifications.length === 0 ? (
                <p className="no-notif">No notification</p>
              ) : (
                notifications.map((notif, index) => (
                  <div key={index} className="notif-item">
                    <p>{notif.message}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        <div className="profile">
          <img src={user && user.profile ? `${url}/profiles/` + user.profile : assets.profile_icon} alt="profile" className="profile-icon" />

          <ul className="nav-profile-dropdown">
            <li onClick={() => navigate('/profile')}>
              <img src={assets.bag_icon} alt="" />
              <p>Profile</p>
            </li>

            <hr />

            <li onClick={logout}>
              <img src={assets.logout_icon} alt="" />
              <p>Logout</p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar
