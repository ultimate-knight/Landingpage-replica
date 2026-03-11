import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Landing from './Components/landing'
import Profile from './Components/Profile'
import Signin from './Components/Signin'
import Signout from './Components/Signout'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Signout" element={<Signout/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
