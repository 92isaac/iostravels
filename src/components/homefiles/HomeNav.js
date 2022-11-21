import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdFlight } from 'react-icons/md'
import { RiHotelFill } from 'react-icons/ri'

const HomeNav = () => {
  return (
    <div>
        <ul>
            <li><NavLink to="flight"> <MdFlight /> Flight</NavLink></li>
            <li><NavLink to="flight"> <RiHotelFill/> Hotel</NavLink></li>
            <li><NavLink to="flight">Visa</NavLink></li>
        </ul>

    </div>
  )
}

export default HomeNav