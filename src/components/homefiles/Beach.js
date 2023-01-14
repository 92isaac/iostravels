import React from 'react'
import beach1 from '../asset/images/beach1.png'
import beach2 from '../asset/images/beach2.png'
import australia from '../asset/images/australia.png'
import '../asset/styles/beach.css'
import { useGlobalContext } from '../asset/Context'


const Beach = () => {

    const {data } = useGlobalContext()
    console.log(data)

  return (
    <div className='beach-image'>
        <div className="flex-image">
            <div className="flex-image1">
                <img src={beach1} alt="" loading='lazy'/>
            </div>
            <div className="flex-image1">
                <img src={beach2} alt="" loading='lazy'/>
            </div>
        </div>
        <div className="image-wide">
            <img src={australia} alt="" loading='lazy'/>
        </div>
    </div>
  )
}

export default Beach