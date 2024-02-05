import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Music from '../Pages/Music/Music'
import Sport from '../Pages/Sport/Sport'
import Theatre from './Pages/Theatre/Theatre'

function HomePages() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/theatre" element={<Theatre />} />
    </Routes>
    </>
  )
}

export default HomePages