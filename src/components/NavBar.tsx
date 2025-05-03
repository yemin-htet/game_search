import React from 'react'
import logo from "../assets/logo.webp"
import ColorModeSwitch from './ColorModeSwitch'

type darkProps = {
  handleDarkMode: (isChecked: boolean)=> void
}

export default function NavBar({handleDarkMode}:darkProps) {
  return (
    <div className='flex flex-row items-center justify-between px-5 py-3 my-3'>
        <img className='w-[80px]' src={logo} alt="LogoPic" />
        <ColorModeSwitch handleDarkMode={handleDarkMode}/>
    </div>
  )
}
