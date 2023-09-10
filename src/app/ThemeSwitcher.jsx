"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import './ThemeSwitcher.css'

function ThemeSwitcher() {

    // const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect(() => {
    //     setMounted(true)
    // }, [])

    const toggleTheme = () => {
        // Cambia el tema entre "light" y "dark" alternativamente
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // if (!mounted) {
    //     return null
    // }

    return (
        <div className='switch-container'>
        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} readOnly={theme === 'dark'}/>
          <span className="slider"></span>
        </label>
        </div>
    )
}

export default ThemeSwitcher
