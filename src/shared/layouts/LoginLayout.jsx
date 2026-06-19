import React from 'react'
import Header from '../../widgets/Header/ui/Header'
import { Outlet } from 'react-router'

export default function LoginLayout() {
  return (
    <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}
