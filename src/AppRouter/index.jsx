import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
import Main from '../pages/Main'
import Continents from '../pages/Continents'
import Country from '../pages/Country'

function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="all" replace />} />
            <Route path='all' element={<Main />} />
            <Route path='/:contin' element={<Continents />} />
            <Route path='/:contin/:id' element={<Country />} />
        </Route>
    </Routes>
  )
}

export default AppRouter