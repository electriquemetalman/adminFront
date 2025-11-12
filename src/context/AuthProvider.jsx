import { useEffect, useState } from "react";
import { AuthContext } from './AuthContext';


const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState();
    const [isAuthLoaded, setIsAuthLoaded] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('token');
        if (stored) {
            setToken(stored);
        }
        setIsAuthLoaded(true);
    },[]);

    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken()
    };

    const isLoggedIn = token ? true : false;

    const contextValue = {
        token,
        isLoggedIn,
        login,
        logout,
        isAuthLoaded
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;