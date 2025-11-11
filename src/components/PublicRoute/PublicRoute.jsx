import React from "react";
import { Navigate } from 'react-router-dom';
import useAuthContextProvider from '../../context/AuthProvider'

const PublicRoute = ({ children }) => {
    const { isLoggedIn } = useAuthContextProvider();

    if (isLoggedIn) {
        return <Navigate to="/add" replace />;
    }

    return children;
}

export default PublicRoute;