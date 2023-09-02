import React from 'react'
import './globals.css'

function Projects() {
  return (
    <div>
      <div className="">
        <h2 className="main-title h-28 flex text-8xl text-center font-medium mt-20 justify-center">My Projects</h2>
      </div>
      <div className="mt-10">
        <div className="square-show">
          <div className='info-show'>
            <h2 className="title-show">Talent Forge, a course platform</h2>
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
            <h2 className="title-show">Web with API Countries</h2>
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
          </div>
          <img
            className="image-show"
            src="Web_with_api_countries.png"
            alt="Countries API"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
