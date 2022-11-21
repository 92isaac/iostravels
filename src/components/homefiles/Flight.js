import React from 'react'
import '../asset/styles/flight.css'

const Flight = () => {
  return (
    <div className='flight'>
        <ul>
            <li>Economy</li>
            <li>1 Passenger</li>
        </ul>
        <div className="where-to">
            <div className="where-to-input">
                <label htmlFor="where-to">Where from</label>
                <input type="text" placeholder='Search Location' />
            </div>
            <div className="where-to-input">
                <label htmlFor="where-to">Where to</label>
                <input type="text" placeholder='Search Location' />
            </div>
            <div className="where-to-input">
                <label htmlFor="departure">Departure</label>
                <input type="date"  />
            </div>
            <div className="where-to-input">
                <label htmlFor="return">Return</label>
                <input type="date"  />
            </div>
        </div>
            <button>Search</button>
    </div>
  )
}

export default Flight