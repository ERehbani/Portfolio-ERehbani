import React from 'react'
import './globals.css'

function Projects() {
  return (
    <div>
      <div className="">
        <h2 className="main-title h-28 flex text-7xl text-center font-medium mt-20 justify-center" id="projects">My Projects</h2>
      </div>
      <div className="mt-10">
        <div className="square-show">
          <div className='info-show'>
            <h2 className="title-show flex">Talent Forge, a course platform <img className='ml-3 w-5' src="arrowRedirection.svg" alt="" /></h2>
          <div className="icons">
            <img className="svg-icon" src="React.svg" alt="React" />
            <img className="svg-icon" src="tailwind.svg" alt="Tailwind" />
            <img className="svg-icon" src="firebase.svg" alt="Firebase" />
            <img
              className="svg-icon"
              src="mercadopago.svg"
              alt="Mercado Pago"
            />
            <img className="svg-icon" src="mongodb.svg" alt="Mongo DB" />
            <img className="svg-icon" src="Git.svg" alt="Git" />
            <img className="svg-icon" src="Nodejs.svg" alt="NodeJS" />
          </div>
          <p className='description-show'> I participated in the creation of a web platform based on the purchase and sale of courses in which I gained knowledge in Figma, Git Flow and managed to implement the Mercado Pago payment gateway to make purchases on the web. I was part of the Frontend section directing its web design, declaring the color palette of the platform and distribution of the components and its responsive design. Using for the creation of the same Javascript, MongoDB, ExpressJS, React JS, CSS and Tailwind</p>

          <div className='mt-10 flex'>
            <a target='_blank' href="https://deploy-front-end-git-main-shakkus.vercel.app/home"><img className='links-projects w-10 justify-center mr-5' src="web.svg" alt="Web" /></a>
            <a href="https://github.com/Shakkus/TalentForgeFrontEnd" target="_blank"><img className='links-projects w-9 justify-center' src="Github.svg" alt="Github" /></a>
          </div>
          </div>
          <div className='image-container'>
            <img
            className="image-show"
            src="Talent_forge.png"
            alt="Talent Forge"
          />
          </div>

          
        </div>
        <div className="square-show">
          <div className='info-show'>
            <h2 className="title-show flex">Web with API Countries {" "}<img className='ml-3 w-5' src="arrowRedirection.svg" alt="" /></h2>
          <div className="icons">
            <img className="svg-icon" src="React.svg" alt="React" />
            <img className="svg-icon" src="Redux.svg" alt="Redux" />
            <img className="svg-icon" src="PostgreSQL.svg" alt="PostgreSQL" />
            <img className="svg-icon" src="Nodejs.svg" alt="NodeJS" />
            <img className="svg-icon" src="Nodemon.svg" alt="Nodemon" />
            <img className="svg-icon" src="CSS.svg" alt="CSS" />
            <img className="svg-icon" src="axios.svg" alt="Axios" />
            <img className="svg-icon" src="express-color.svg" alt="ExpressJS" />
            <img className="svg-icon" src="Git.svg" alt="Git" />
          </div>
          <p className='description-show mt-20'>I made a landing on countries where the main points were to create a creation form in the database, search by name, detail of each country, combined filters and pagination with a clear, minimalist and visually pleasing design using Javascript, React , Redux, CSS and SQL</p>
          <div className='mt-10 flex'>
            <a href="/" target="_blank"><img className='links-projects w-10 justify-center mr-5' src="web.svg" alt="Web" /></a>
            <a href="https://github.com/ERehbani/PI-COUNTRIES" target="_blank"><img className='links-projects w-9 justify-center' src="Github.svg" alt="Github" /></a>
          </div>
          </div>
          <img
            className="image-show"
            src="Web_with_api_countries.png"
            alt="Countries API"
          />
        </div>
        <div className="square-show-phone">
          <div className='info-show'>
            <h2 className="title-show flex">Expense Planner in React Native  <img className='ml-3 w-5' src="arrowRedirection.svg" alt="" /></h2>
          <div className="icons">
            <img className="svg-icon w-20" src="React-Native.png" alt="React Native" />            
          </div>
          <p className='description-show mt-8'>Application for organizing expenses by setting an initial budget, which will be monitored through the expenses that are added.</p>
          <div className='mt-8 flex'>
            <a href="https://github.com/ERehbani/Planificador-Gastos" target="_blank"><img className='links-projects w-9 justify-center' src="Github.svg" alt="Github" /></a>
          </div>
          </div>
          <div className='phone-container'>
            <img
            className="phone-show"
            src="Planificator1.webp"
            alt="Weather App"
          />
          <img
            className="phone-show"
            src="Planificator3.webp"
            alt="Weather App"
          />
          <img
            className="phone-show"
            src="Planificator4.webp"
            alt="Weather App"
          />
          </div>
        </div>
        <div className="square-show-phone">
          <div className='info-show'>
            <h2 className="title-show">Administrator of appointments in React Native</h2>
          <div className="icons">
            <img className="svg-icon w-20" src="React-Native.png" alt="React Native" />            
          </div>
          <p className='description-show mt-5'>With the functionalities of creating a new appointment with a form in Modal mode and Date Picker to set a registration date, viewing new appointments, viewing, editing and deleting them</p>
          <div className='mt-5 flex'>
            <a href="https://github.com/ERehbani/GestorCitas-ReactNative" target="_blank"><img className='links-projects w-9 justify-center' src="Github.svg" alt="Github" /></a>
          </div>
          </div>
          <div className='phone-container'>
            <img
            className="phone-show"
            src="quotes2.webp"
            alt="Quotes App"
          />
          <img
            className="phone-show"
            src="quotes3.webp"
            alt="Quotes App"
          />
          <img
            className="phone-show"
            src="quotes4.webp"
            alt="Quotes App"
          />
          </div>
        </div>
<div className="square-show-phone">
          <div className='info-show'>
            <h2 className="title-show">Weather App in React Native</h2>
          <div className="icons">
            <img className="svg-icon w-20" src="React-Native.png" alt="React Native" />
            <img className="svg-icon w-24" src="OpenWeather.svg" alt="Open weather" />
            
          </div>
          <p className='description-show mt-10'>App in React Native using the Open Weather API to show the weather of each city applying its name and corresponding country</p>
          <div className='mt-10 flex'>
            <a href="https://github.com/ERehbani/Weather-App" target="_blank"><img className='links-projects w-9 justify-center' src="Github.svg" alt="Github" /></a>
          </div>
          </div>
          <div className='phone-container'>
            <img
            className="phone-show"
            src="weatherApp1.webp"
            alt="Weather App"
          />
          <img
            className="phone-show"
            src="weatherApp2.webp"
            alt="Weather App"
          />
          <img
            className="phone-show"
            src="weatherApp3.webp"
            alt="Weather App"
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
