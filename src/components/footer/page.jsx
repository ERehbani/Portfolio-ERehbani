import React from 'react'
import './globals.css'

function Footer() {
  return (
    <div className='footer mt-32'>
      <footer>
        <div className='items-center flex justify-around py-14'>
          <h1 className='text-white font-thin'>Elian Rehbani</h1>
          <h2 className='text-white font-thin'>2023</h2>
          <div className='flex justify-around'>
            <img src="linkedin.svg" alt="Linkedin" />
          <img src="Github.svg" alt="Github" className='ml-10'/>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
