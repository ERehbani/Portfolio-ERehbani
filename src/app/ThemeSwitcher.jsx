"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import './ThemeSwitcher.css'

function ThemeSwitcher() {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        // Cambia el tema entre "light" y "dark" alternativamente
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    if (!mounted) {
        return null
    }

    return (
        <div>
        <label class="switch">
          <input type="checkbox" onClick={toggleTheme} checked={theme === 'dark'}/>
          <span class="slider"></span>
        </label>
        </div>
    )
}

export default ThemeSwitcher
