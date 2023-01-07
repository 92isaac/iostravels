import React from 'react'
import '../asset/styles/newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter-wrapper'>
        <div className="newsletter-text">
            <h1>Subscribe to Our Newsletter</h1>
            <p>Join over 1.5k Travellers</p>
            <form action="" className='newsletter-form'>
                <label htmlFor="" className='newsletter-label'>Enter Email Address</label>
                <input type="text" />
                <input type="button" value={'Subsrcibe'}/>
            </form>
        </div>
    </div>
  )
}

export default Newsletter