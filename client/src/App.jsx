import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import * as userApi from './API/usersApi';

import '../styles/style.css'
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Create from './components/Create/Create'
import Catalog from './components/Catalog/Catalog'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Details from './components/Catalog/Details/Details'
import AuthContext from './contexts/authContext'
import Logout from './components/Logout/Logout';


function App() {
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
    const logoutHandler = () =>{
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
            <div id="box">
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='create' element={<Create />} />
                    <Route path='catalog' element={<Catalog />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='details/:id' element={<Details />} />
                    <Route path='logout' element={<Logout />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    )
}

export default App
