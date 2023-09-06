import React from 'react'
import './globals.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className='footer mt-32 max-lg:mt-16'>
      <footer>
        <div className='items-center flex justify-around max-lg:py-7 py-14'>
          <h1 className='text-white font-thin'>Elian Rehbani</h1>
          <h2 className='text-white font-thin'>2023</h2>
          <div className='flex justify-around'>
            <a href="https://www.linkedin.com/in/elian-rehbani-96113624b/" target='_blank'><Image src="/linkedin.svg" alt='Linkedin' className='max-lg:w-6' width={48} height={0}/></a>
          <a href="https://github.com/ERehbani" target='_blank'><Image src="/Github-dark.svg" alt='Github' width={48} height={0} className='ml-10 w-12 max-lg:w-6' /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;


