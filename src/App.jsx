import React, { useContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import Profile from './pages/Profile/Profile'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login/Login'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import {AuthContext} from './context/AuthContext';
import PublicRoute from './components/PublicRoute/PublicRoute'

const App = () => {

  const url = "http://localhost:4000";
  const { isLoggedIn, isAuthLoaded } = useContext(AuthContext)

  if (!isAuthLoaded) {
        return <div>Loading...</div>;
  }

  return (
    <div>
      <ToastContainer/>
      {isLoggedIn && <Navbar />}
      {isLoggedIn && <hr/>}
      <div className='app-content'>
        {isLoggedIn && <Sidebar/>}
        <Routes>
          <Route path="/add" element={<ProtectedRoute><Add url={url}/></ProtectedRoute>} />
          <Route path="/list" element={<ProtectedRoute><List url={url}/></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Orders url={url}/></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile url={url}/></ProtectedRoute>} />
          <Route path="/" element={<PublicRoute><Login url={url}/></PublicRoute>} />
        </Routes>
      </div>
      
    </div>
  )
}

export default App
