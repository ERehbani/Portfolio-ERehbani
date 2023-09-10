"use client"
import React from 'react'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
function Projects() {
  return (
    <div>
      <div className="">
        <h2 className="secondary-title h-28 flex text-7xl text-center font-medium mt-20 justify-center" id="projects">My Projects</h2>
      </div>
      <div className="mt-10">
        <div className="square-show">
          <div className='info-show'>
            <h2 className="title-show flex">Talent Forge, a course platform </h2>
          <div className="icons">
            <div className="div-icons">
              {/* <img className="svg-icon" src="React.svg" alt="React" /> */}
              <Image src="/reactjs-dark.png" alt='React' width={70} height={0} className='svg-icon'/>
              <span className="tooltip1">ReactJS</span>
            </div>
            <div className="div-icons">
              {/* <img className="svg-icon" src="tailwind.svg" alt="Tailwind" /> */}
              <Image src="/tailwind-dark.png" alt='Tailwind' width={70} height={0} className='svg-icon' />
              <span className="tooltip1 left-28">TailwindCSS</span>
            </div>
           <div className="div-icons" >
             {/* <img className="svg-icon" src="firebase.svg" alt="Firebase" /> */}
             <Image src="/firebase-dark.png" alt='Firebase' className='svg-icon' width={70} height={0} />
             <span className="tooltip1 left-56" id='firebase'>Firebase</span>
           </div>
            <div className="div-icons" >
              {/* <img
              className="svg-icon"
              src="mercadopago.svg"
              alt="Mercado Pago"
            /> */}
            <Image src="/mercado-pago-dark.png" alt='Mercado Pago' width={70} height={0} className='svg-icon' />
            <span className="tooltip1 left-72" id='mp'>Mercado Pago</span>
            </div>
            <div className="div-icons" >
              {/* <img className="svg-icon" src="mongodb.svg" alt="Mongo DB" /> */}
              <Image src="/mongodb-dark.png" alt='Mongo DB' width={70} height={0} className='svg-icon' />
              <span className="tooltip1" id='mongodb'>MongoDB</span>
            </div>
            <div className="div-icons" >
              {/* <img className="svg-icon" src="Git.svg" alt="Git" /> */}
              <Image src="/git-dark.png" alt='Git' width={70} height={0} className='svg-icon' />
              <span className="tooltip1" id='git'>Git</span>
            </div>
            <div className="div-icons">
              {/* <img className="svg-icon" src="Nodejs.svg" alt="NodeJS" /> */}
              <Image src="/nodejs-dark.png" alt='NodeJS' width={70} height={0} className='svg-icon' />
              <span className="tooltip1">NodeJS</span>
            </div>
          </div>
          <p className='description-show'> I participated in the creation of a web platform based on the purchase and sale of courses in which I gained knowledge in Figma, Git Flow and managed to implement the Mercado Pago payment gateway to make purchases on the web. I was part of the Frontend section directing its web design, declaring the color palette of the platform and distribution of the components and its responsive design. Using for the creation of the same Javascript, MongoDB, ExpressJS, React JS, CSS and Tailwind</p>

          <div className='webGithub max-lg:justify-center max-lg:-ml-5 flex'>
            {/* <Link target='_blank' href="https://deploy-front-end-git-main-shakkus.vercel.app/home" id="web-link"><Image src="/web.svg" alt='Web' width={40} height={0} className='links-projects w-10 justify-center mr-5' />Visit</Link> */}

            <Link target='_blank' href="https://deploy-front-end-git-main-shakkus.vercel.app/home" id="web-link" className='mr-5'>
              <div className="button-visit">
              <Image src="/web-light.svg" alt='Web' width={36} height={0} className='links-projects w-9 justify-center mr-2 max-sm:mr-0 max-sm:-mt-1' /><p className='mt-1'>Visit</p></div></Link>

            <Link href="https://github.com/Shakkus/TalentForgeFrontEnd" target="_blank" id='github-link'>
              <div className="button-visit">
              <Image src="/Github.svg" alt='Github' width={36} height={0} className='links-projects w-9 justify-center mr-2' /><p className='mt-1'>View code</p></div></Link>
            
          </div>
          </div>
          <div className='image-container'>
            {/* <img
            className="image-show"
            src="Talent_forge.png"
            alt="Talent Forge"
          /> */}
          <Image src="/Talent_forge.png" alt='Talent Forge' width={600} height={0} className='image-show' />
          </div>

          
        </div>
        <div className="square-show">
          <div className='info-show'>
            <h2 className="title-show flex">Web with API Countries {" "}</h2>
          <div className="icons">
            <div className='div-icons'>
              {/* <img className="svg-icon" src="React.svg" alt="React" /> */}
              <Image src="/reactjs-dark.png" alt='React' width={70} height={0} className='svg-icon'/>
            <span className="tooltip2">React</span>
            </div>
            <div className="div-icons">
              {/* <img className="svg-icon" src="Redux.svg" alt="Redux" /> */}
              <Image src="/redux-dark.png" alt='Redux' width={70} height={0} className='svg-icon' />
              <span className="tooltip2">Redux</span>
            </div>
            <div className="div-icons">
              {/* <img className="svg-icon" src="PostgreSQL.svg" alt="PostgreSQL" /> */}
              <Image src="/postgresql-dark.png" alt='PostgreSQL' width={68} height={0} className='svg-icon' />
              <span className="tooltip2">SQL</span>
            </div>
            <div className="div-icons">
              {/* <img className="svg-icon" src="Nodejs.svg" alt="NodeJS" /> */}
               <Image src="/nodejs-dark.png" alt='NodeJS' width={70} height={0} className='svg-icon' />
              <span className="tooltip2">NodeJS</span>
            </div>
            <div className="div-icons">
              {/* <img className="svg-icon" src="Nodemon.svg" alt="Nodemon" /> */}
              <Image src="/nodemon-dark.png" alt='Nodemon' width={70} height={0} className='svg-icon' />
              <span className="tooltip2">Nodemon</span>
            </div>
            <div className="div-icons">
              {/* <img className="svg-icon" src="CSS.svg" alt="CSS" /> */}
              <Image src="/css-dark.png" alt='CSS' width={70} height={0} className='svg-icon' />
              <span className="tooltip2">CSS</span>
            </div>
            <div className="div-icons">
              {/* <img className="svg-icon" src="axios.svg" alt="Axios" /> */}
              <Image src="/axios-dark.png" alt='Axios' width={70} height={0} className='svg-icon' />
              <span className="tooltip2">Axios</span>
            </div>
            <div className="div-icons">
              {/* <img className="svg-icon" src="express-color.svg" alt="ExpressJS" /> */}
              <Image src="/expressjs-dark.png" alt='Express' width={70} height={0} className='svg-icon' />
              <span className="tooltip2" id='express'>ExpressJS</span>
            </div>
            <div className="div-icons">
              {/* <img className="svg-icon" src="Git.svg" alt="Git"/> */}
              <Image src="/git-dark.png" alt='Git' width={70} height={0} className='svg-icon'  />
              <span className="tooltip2" id='git2'>Git</span>
            </div>
          </div>
          <p className='description-show2'>I made a landing on countries where the main points were to create a creation form in the database, search by name, detail of each country, combined filters and pagination with a clear, minimalist and visually pleasing design using Javascript, React , Redux, CSS and SQL</p>
          <div className='webGithub max-lg:justify-center max-lg:-ml-5 flex'>
            <Link href="https://github.com/ERehbani/PI-COUNTRIES" target="_blank" id='github-link'>
              <div className="button-visit">
              <Image src="/Github.svg" alt='Github' width={36} height={0} className='links-projects w-9 justify-center mr-2' /><p className='mt-1'>View code</p></div></Link>
          </div>
          </div>
          {/* <img
            className="image-show"
            src="web_api_countries.png"
            alt="Countries API"
          /> */}
          <div className="image-container">
            <Image src="/web_api_countries.png" alt='Countries API' width={600} height={0} className='image-show' />
          </div>
        </div>
        <div className="square-show-phone">
          <div className='info-show'>
            <h2 className="title-show flex">Expense Planner in React Native  </h2>
          <div className="icons">
            <div className="div-icons">
              {/* <img className="svg-icon w-20" src="React-Native.png" alt="React Native" /> */}
              <Image src="/react-native-dark.png" alt='React Native' width={70} height={0} className='svg-icon' />
              <span className="tooltip1 left-9">React Native</span>
            </div>          
          </div>
          <p className='description-show'>Application for organizing expenses by setting an initial budget, which will be monitored through the expenses that are added.</p>
          <div className=' webGithub mt-5 max-lg:justify-center max-lg:-ml-5 flex'>
            <Link href="https://github.com/ERehbani/Planificador-Gastos" target="_blank" id='github-link'>
              <div className="button-visit">
              <Image src="/Github.svg" alt='Github' width={36} height={0} className='links-projects w-9 justify-center mr-2' /><p className='mt-1'>View code</p></div></Link>
            
          </div>
          </div>
          <div className='phone-container'>
            {/* <img
            className="phone-show"
            src="Planificator1.webp"
            alt="Weather App"
          /> */}
          <Image src="/Planificator1.webp" alt='Planificator' className='phone-show' width={163} height={0} />
          {/* <img
            className="phone-show"
            src="Planificator3.webp"
            alt="Weather App"
          /> */}
          <Image src="/Planificator3.webp" alt='Planificator' width={163} height={0} className='phone-show' />
          {/* <img
            className="phone-show"
            src="Planificator4.webp"
            alt="Weather App"
          /> */}
          <Image src="/Planificator4.webp" alt='Planificator' width={163} height={0} className='phone-show' />
          </div>
        </div>
        
        <div className="square-show-phone">
          <div className='info-show'>
            <h2 className="title-show">Administrator of appointments in React Native</h2>
          <div className="icons">
            <div className="div-icons">
              <Image src="/react-native-dark.png" alt='React Native' width={70} height={0} className='svg-icon' />
              <span className="tooltip1 left-9">React Native</span>
            </div>            
          </div>
          <p className='description-show mt-5'>With the functionalities of creating a new appointment with a form in Modal mode and Date Picker to set a registration date, viewing new appointments, viewing, editing and deleting them</p>
          <div className='webGithub mt-5 max-lg:justify-center max-lg:-ml-5 flex'>
            <Link href="https://github.com/ERehbani/GestorCitas-ReactNative" target="_blank" id='github-link'>
              <div className="button-visit">
              <Image src="/Github.svg" alt='Github' width={36} height={0} className='links-projects w-9 justify-center mr-2' /><p className='mt-1'>View code</p></div></Link>
          </div>
          </div>
          <div className='phone-container'>
            {/* <img
            className="phone-show"
            src="quotes2.webp"
            alt="Quotes App"
          /> */}
          <Image src="/quotes2.webp" alt='Quotes App' className='phone-show' width={163} height={0} />
          {/* <img
            className="phone-show"
            src="quotes3.webp"
            alt="Quotes App"
          /> */}
          <Image src="/quotes3.webp" alt='Quotes App' className='phone-show' width={163} height={0} />
          {/* <img
            className="phone-show"
            src="quotes4.webp"
            alt="Quotes App"
          /> */}
          <Image src="/quotes4.webp" alt='Quotes App' className='phone-show' width={163} height={0} />
          </div>
        </div>
<div className="square-show-phone">
          <div className='info-show'>
            <h2 className="title-show">Weather App in React Native</h2>
          <div className="icons">
            <div className="div-icons mt-3">
              <Image src="/react-native-dark.png" alt='React Native' width={70} height={0} className='svg-icon' />
              <span className="tooltip1 -mt-16 left-10">React Native</span>
            </div> 
            <div className="div-icons mt-3 max-lg:mt-3 max-lg:-ml-3">
              {/* <img className="svg-icon w-24" src="OpenWeather.svg" alt="Open weather" /> */}
              <Image src="/open-weather-dark.png" alt='Open Weather' width={70} height={0} className='svg-icon' />
              <span className="tooltip1 -mt-16 left-28">Open Weather API</span>
            </div>
            
          </div>
          <p className='description-show mt-10'>App in React Native using the Open Weather API to show the weather of each city applying its name and corresponding country</p>
          <div className='webGithub mt-10 max-lg:mt-5 max-lg:justify-center max-lg:-ml-5 flex'>
            <Link href="https://github.com/ERehbani/Weather-App" target="_blank" id='github-link'>
              <div className="button-visit">
              <Image src="/Github.svg" alt='Github' width={36} height={0} className='links-projects w-9 justify-center mr-2' /><p className='mt-1'>View code</p></div></Link>
          </div>
          </div>
          <div className='phone-container'>
            {/* <img
            className="phone-show"
            src="weatherApp1.webp"
            alt="Weather App"
          /> */}
          <Image src="/weatherApp1.webp" alt='Weather App' className='phone-show' width={163} height={0} />
          {/* <img
            className="phone-show"
            src="weatherApp2.webp"
            alt="Weather App"
          /> */}
          <Image src="/weatherApp2.webp" alt='Weather App' className='phone-show' width={163} height={0} />
          {/* <img
            className="phone-show"
            src="weatherApp3.webp"
            alt="Weather App"
          /> */}
          <Image src="/weatherApp3.webp" alt='Weather App' className='phone-show' width={163} height={0} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
