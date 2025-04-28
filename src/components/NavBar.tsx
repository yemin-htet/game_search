import React from 'react'
import logo from "../assets/logo.webp"

export default function NavBar() {
  return (
    <div className='flex flex-row items-center'>
        <img className='w-[80px]' src={logo} alt="LogoPic" />
        <h1 className='text-2xl'>NavBar</h1>
    </div>
  )
}
