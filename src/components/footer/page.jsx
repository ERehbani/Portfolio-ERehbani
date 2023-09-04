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
            <a href="https://www.linkedin.com/in/elian-rehbani-96113624b/" target='_blank'><img src="linkedin.svg" alt="Linkedin" /></a>
          <a href="https://github.com/ERehbani" target='_blank'><img src="Github-dark.svg" alt="Github" className='ml-10 w-12'/></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
