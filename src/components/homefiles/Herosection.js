import React from 'react'
import '../asset/styles/herowrapper.css'
import Navbar from '../navbarfiles/Navbar'

const Herosection = () => {
  return (
    <div className='hero-wrapper'>
        <Navbar />

        <div className="one-step">
            <h1>Your one-stop nonstop travel shop</h1>
            <p>Discover your next dream destination</p>
        </div>
    </div>
  )
}

export default Herosection