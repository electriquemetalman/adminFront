import React, { useCallback, useEffect } from 'react';
import './Profile.css';
import UpdateProfile from '../../components/UpdateProfile/UpdateProfile';
import UpdateInfo from '../../components/UpdateInfo/UpdateInfo';
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";

const Profile = ({url}) => {

  const { token } = React.useContext(AuthContext);

  const [user, setUser] = React.useState(null);

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

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div>
      <UpdateProfile url={url} token={token} user={user} fetchUser={fetchUser} />
      <UpdateInfo url={url} token={token} user={user} fetchUser={fetchUser} />
    </div>
  )
}

export default Profile
