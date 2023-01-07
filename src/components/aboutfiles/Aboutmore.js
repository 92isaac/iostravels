import React from 'react'
import '../asset/styles/aboutmore.css'
import rectangle0 from '../asset/images/Rectangle 30.png'
import rectangle1 from '../asset/images/Rectangle 31.png'
import rectangle2 from '../asset/images/Rectangle 32.png'

const Aboutmore = () => {
  return (
    <div className='aboutmore'>
        <div className="moreimage">
            <img src={rectangle0} alt="" />
            <img src={rectangle1} alt="" />
            <img src={rectangle2} alt="" />
        </div>
        <div className="moretext">
            <p>A Little More</p>
            <h1>See the world in a new way</h1>
            <p>Faucibus ultrices malesuada id a, ultricies. Diam arcu amet, orci arcu. Erat enim malesuada posuere fringilla malesuada vitae. Nam vitae elementum in malesuada enim.</p>
        </div>
    </div>
  )
}

export default Aboutmore