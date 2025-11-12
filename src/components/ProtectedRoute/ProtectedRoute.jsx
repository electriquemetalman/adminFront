import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn, isAuthLoaded } = useContext(AuthContext);

    if (!isAuthLoaded) {
        return <div>Loading...</div>;
    }

    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute;