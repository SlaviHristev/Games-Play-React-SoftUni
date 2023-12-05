import { useContext, useEffect } from "react";
import * as userApi from '../../API/usersApi'
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";


export default function Logout() {
    const { logoutHandler } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        userApi.logout()
        .then(() => logoutHandler())
        .catch(() => navigate('/')) 
    },[])
    return (
        null
    )
}