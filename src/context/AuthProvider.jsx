import { useCallback, useEffect, useRef, useState } from "react";
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';


const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState();
    const [isAuthLoaded, setIsAuthLoaded] = useState(false);
    const navigate = useNavigate();
    const INACTIVITY_LIMIT = 30 * 60 * 1000; // 30 minutes

    const timerRef = useRef(null);

    const logout = useCallback(() => {
        localStorage.removeItem('token');
        setToken();
        navigate('/');
    }, [navigate]);

    // verify user inactivity
    const resetTimer = useCallback(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            logout();
        }, INACTIVITY_LIMIT);
    }, [logout, INACTIVITY_LIMIT]);

    useEffect(() => {
        const stored = localStorage.getItem('token');

       const events = ['mousemove', 'mousedown', 'click', 'scroll', 'keypress'];

        events.forEach((event) => {
            window.addEventListener(event, resetTimer);
        });

        resetTimer();

        if (stored) {
            setToken(stored);
        }
        setIsAuthLoaded(true);

        return () => {
            events.forEach((event) => {
                window.removeEventListener(event, resetTimer);
            });
            if (timerRef.current) clearTimeout(timerRef.current);
        };

    },[resetTimer]);

    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        resetTimer();
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