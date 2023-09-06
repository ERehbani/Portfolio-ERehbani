"use client"
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'


export default function Providers({ children}) {
    const [mounted, setMounted ] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) {
        return <>%apos;{children}</>
    }

  return (
    <ThemeProvider>
    {children}
    </ThemeProvider>
  )
}

