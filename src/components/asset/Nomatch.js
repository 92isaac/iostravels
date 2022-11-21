import React from 'react'
import Error404 from './images/SeekPng.com_404-png_2123432.png'

const Nomatch = () => {
  return (
    <div className='w-screen'>
        <div className="flex justify-between mx-auto w-11/12">
            <div className='my-auto'>
                <h1 className='text-9xl mb-10 font-bold'>Oops!</h1>
                <h3>We can't seem to find the page you're looking for</h3>
                <h4>Error code: 404</h4>
                <div className="text-red-900">
                    <p>Home</p>
                    <p>Travels</p>
                </div>
            </div>
            <div>
                <img src={Error404} alt="" className='w-fit object-cover h-fit h-screen w-screen'/>
            </div>
        </div>
    </div>
  )
}

export default Nomatch