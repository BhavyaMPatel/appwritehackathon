import React from 'react'
import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
//
import './App.css'
import HomePage from './pages/HomePage'
import RoomSelect from './pages/RoomSelect'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/VRoom' element={<RoomSelect/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


//TODO APP

//IMPLEMENT HOME PAGE TODAY
//IMPLEMENT PRIVATE ROOM SELECT OPEN