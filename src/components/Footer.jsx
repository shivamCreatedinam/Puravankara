import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex justify-center items-center p-4">
          <h1 className="font-bold text-3xl tracking-wide text-gray-800">
            <img
              src={'https://createdinam.in/Puravankara/img/images/main_logo.png'}
              alt={`Profile`}
              className="w-full h-full"
            />
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-12">
          <div className="inline-block">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p>Kanpur U.P. </p>
            <p>Phone: 9407986777</p>
            <p>Email: info@createdinam.in</p>
          </div>

          <div className="inline-block">
            <h4 className="text-lg font-bold mb-2">Unique Food Court Franchise Model</h4>
            <ul>
              <li>Punjabi</li>
              <li>Chinese</li>
              <li>Pasta</li>
              <li>Classic</li>
              <li>Chocolatey</li>
            </ul>
          </div>

          <div className="inline-block">
          <h4 className="text-lg font-bold mb-2">Unique Food Court Franchise Model</h4>
            <p>Just one set-up and common resources are required to offer a wide range of cuisine</p>
          </div>
        </div>
      </div>
      <div className="container text-center lg:text-center mx-auto mt-8 text-sm">
        <p> <b>Created by Createdinam ❤️ 2024</b></p>
        <p>
          <a href="#" className="mr-2">
            Terms and Conditions
          </a>
          <a href="#">Privacy</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
