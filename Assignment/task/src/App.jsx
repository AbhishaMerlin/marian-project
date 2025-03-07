import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Blogform from './components/Blogform'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar>
      <Routes>
        {/* <Route path='/home' element={<Home/>}></Route> */}
        <Route path='/blogform' element={<Blogform/>}></Route>
        <Route path='/api' element={<Api/>} ></Route>
      </Routes>
    </Navbar>
    </>
  )
}

export default App
