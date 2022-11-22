import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdFlight } from 'react-icons/md'
import { RiHotelFill } from 'react-icons/ri'
import '../asset/styles/homenav.css'

const HomeNav = () => {
  return (
    <div className='homenav'>
        <ul>
            <li><NavLink to="flight"> <MdFlight /> Flight</NavLink></li>
            <li><NavLink to="hotel"> <RiHotelFill/> Hotel</NavLink></li>
            <li><NavLink to="Visa">Visa</NavLink></li>
        </ul>

    </div>
  )
}

export default HomeNav