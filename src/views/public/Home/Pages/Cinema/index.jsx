import React from 'react'
import CinemaDetail from './Pages/CinemaDetail/CinemaDetail'
import Cinema from './Pages/Cinema/Cinema'
import { Route, Routes } from 'react-router-dom'

function CinemaPages() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Cinema />} />
        <Route path="/:id" element={<CinemaDetail />} />
    </Routes>
    </>
  )
}

export default CinemaPages