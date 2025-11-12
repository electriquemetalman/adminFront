import React, {useContext} from "react";
import { Navigate } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';

const PublicRoute = ({ children }) => {
    const { isLoggedIn, isAuthLoaded } = useContext(AuthContext);

    if (!isAuthLoaded) {
        return <div>Loading...</div>;
    }

    if (isLoggedIn) {
        return <Navigate to="/add" replace />;
    }

    return children;
}

export default PublicRoute;