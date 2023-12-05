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


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await userApi.login(values.email, values.password);

        setAuth(result)
        navigate('/')
    }

    const registerSubmitHandler = async (values) => {
        console.log(values);
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.username
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
                </Routes>
            </div>
        </AuthContext.Provider>
    )
}

export default App
