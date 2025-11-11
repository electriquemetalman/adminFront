import { useEffect, useState } from "react";
import { AuthContext } from './AuthContext';


const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState();

    useEffect(() => {
        const stored = localStorage.getItem('token');
        if (stored) {
            setToken(stored);
        }
    },[]);

    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken()
    };

    const isLoggedIn = !!token;

    const contextValue = {
        token,
        isLoggedIn,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;