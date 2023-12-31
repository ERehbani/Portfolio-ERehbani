"use client"
import React from 'react'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link';
import ThemeSwitcher from '@/app/ThemeSwitcher';
import { useTheme } from 'next-themes';

function Footer() {


      const { theme, setTheme } = useTheme('light')


    const toggleTheme = () => {
        // Cambia el tema entre "light" y "dark" alternativamente
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

  return (
    <div className='footer mt-32 max-lg:mt-16'>
      <footer>
        <div className='items-center flex justify-around max-lg:py-7 py-14 max-sm:text-xs'>
          <h1 className='text-white font-thin min footer-name'>Elian Rehbani</h1>
          <div className='dark-mode-mobile'>
            {theme === 'light' ? (
       <Image src="/sun.svg" alt='sun' width={24} height={0} onClick={toggleTheme} readOnly={theme === 'dark'}/>
      ) : (
        <Image src="/moon.svg" alt='sun' width={24} height={0}  onClick={toggleTheme} readOnly={theme === 'light'}/>
      )}
          </div>
          <h2 className='text-white font-thin'>Made with NextJS</h2>
          <div className='flex justify-between'>
            <Link href="https://www.linkedin.com/in/elian-rehbani-96113624b/" target='_blank'><Image src="/linkedin.svg" alt='Linkedin' className='max-lg:w-6' width={48} height={0}/></Link>
          <Link href="https://github.com/ERehbani" target='_blank'><Image src="/Github-dark.svg" alt='Github' width={48} height={0} className='ml-3 w-12 max-lg:w-6' /></Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;


