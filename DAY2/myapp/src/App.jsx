import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Signup2 from './components/Signup2'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Count from './components/Count'
import Button3 from './components/Button3'
import Listmap from './components/Listmap'
import Api from './components/api'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/signup2' element={<Signup2/>} ></Route>
        <Route path='/statebasics' element={<Statebasics/>} ></Route>
        <Route path='/count' element={<Count/>} ></Route>
        <Route path='/button3' element={<Button3/>} ></Route>
        <Route path='/listmap' element={<Listmap/>} ></Route>
        <Route path='/api' element={<Api/>} ></Route>
        <Route path='/product' element={<Product/>} ></Route>
      </Routes>
     
      {/* <Signup/> */}

    </>
    
  )
}

export default App
