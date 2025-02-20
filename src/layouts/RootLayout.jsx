import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout