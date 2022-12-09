import React from 'react'
import { Link } from 'react-router-dom'
import Error404 from './images/SeekPng.com_404-png_2123432.png'

const Nomatch = () => {
  return (
    <div className='w-screen'>
        <div className="block m-0 md:flex justify-between mx-auto w-11/12">
            <div className='my-auto'>
                <h1 className='text-9xl mb-10 font-bold'>Oops!</h1>
                <h3>We can't seem to find the page you're looking for</h3>
                <h4>Error code: 404</h4>
                <div className="text-red-900">
                   <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Travels</Link></li>
                   </ul>
                </div>
            </div>
            <div className=''>
                <img src={Error404} alt="" className='w-fit object-cover h-fit h-screen w-screen'/>
            </div>
        </div>
    </div>
  )
}

export default Nomatch