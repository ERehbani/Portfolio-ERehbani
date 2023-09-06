import React from 'react'
import './globals.css'
import Image from 'next/image'

function Certifications() {
  return (
    <div>
        <div className='mt-32'>
            <h1 className='main-title text-7xl text-center font-medium mt-20 justify-center'>Certifications</h1>
        </div>

        <div>
            <div className='image-certificate-container'>
                {/* <img src="HenryCertificate.png" alt="Henry Certificate" className='image-certificate-henry'/> */}
                <Image src="/HenryCertificate.png" alt='Henry Certificate' className='image-certificate-henry' width={666} height={0}/>
            </div>
            <div className="description-container">
                <b className='description-certificate'>Full Stack Developer <p className='font-light'>by</p> Henry</b>
            </div>
        </div>


        <div>
            <div className='image-certificate-container'>
                {/* <img src="EnglishCertificate.png" alt="English Certificate" className='image-certificate-english'/> */}
                <Image src="/EnglishCertificate.png" alt='English Certificate' className='image-certificate-english' width={370} height={0} />
            </div>
            <div className='description-container'>
                <b className='description-certificate'>English B1 <p className='font-light'>by</p> EFSET</b>
            </div>
        </div>
    </div>
  )
}

export default Certifications
