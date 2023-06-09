import React from 'react'
import Navbar from './components/header/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { MdExplore } from 'react-icons/md'
import Explore from './pages/Explore'
import CreateNFT from './pages/CreateNFT'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/createNFT' element={<CreateNFT />}/>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

