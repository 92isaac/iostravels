import React from 'react'
import '../asset/styles/herowrapper.css'
import DispNavbar from '../navbarfiles/DispNavbar'
import Navbar from '../navbarfiles/Navbar'
import Flight from './Flight'
import HomeNav from './HomeNav'

const Herosection = () => {
  return (
    <div className='hero-wrapper'>
        <Navbar />
        {/* <DispNavbar /> */}

        <div className="one-step">
            <h1>Your one-stop <br/> nonstop travel shop</h1>
            <p>Discover your next dream destination</p>
        </div>

        <HomeNav />
        <Flight />
    </div>
  )
}

export default Herosection