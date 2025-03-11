import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/Dashboard'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Addmovie from './Components/Addmovie'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Logout from './Components/Logout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    
    <Routes>
      <Route path='/home' element={<Dashboard/>}></Route>
      <Route path='/addmovie' element={<Addmovie/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
      
    </Routes>
      
    </>
  )
}

export default App
