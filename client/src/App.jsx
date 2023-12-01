import {Routes,Route} from 'react-router-dom'
import '../styles/style.css'
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Create from './components/Create/Create'
import Catalog from './components/Catalog/Catalog'
import Login from './components/Login/Login'
import Register from './components/Register/Register'


function App() {


  return (
   <div id="box">
    <Header/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='create' element={<Create/>}/>
       <Route path='catalog' element={<Catalog/>}/>
       <Route path='login' element={<Login/>}/>
       <Route path='register' element={<Register/>}/>
    </Routes>
   </div>
  )
}

export default App
