import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import View from './components/View'
import { Divider } from '@mui/material'

function App() {
  const [count,setCount]=useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/add" element={<Add/>}></Route>
      <Route path='/'></Route>
      <Route path="/view" element={<View/>}/>
    </Routes></>
  )
}

export default App