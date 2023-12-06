import { createContext } from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import * as userApi from '../API/usersApi';

const AuthContext = createContext();


export const AuthProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');
        return {}
    });

    const loginSubmitHandler = async (values) => {
        const result = await userApi.login(values.email, values.password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken)
        navigate('/')
    }

    const registerSubmitHandler = async (values) => {
        const result = await userApi.register(values.email, values.password)
        setAuth(result)
        localStorage.setItem('accessToken', result.accessToken)
        navigate('/')
    }
    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate('/');
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>)
}
export default AuthContext;