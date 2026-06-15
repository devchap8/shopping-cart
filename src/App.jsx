import NavBar from './Nav.jsx'
import { useState } from 'react'
import { Outlet } from 'react-router'

export default function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
