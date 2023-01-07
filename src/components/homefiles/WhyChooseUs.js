import React from 'react'
import '../asset/styles/whychooseus.css'
import { chooseUs } from '../asset/database'


const WcuCard =({icon,  title, story})=>{
    return ( <div className="cards">
        <span>{icon}</span>
    <div className="cards-text">
        <h5>{title}</h5>
        <p>{story}</p>
    </div>
</div>)
}

const WhyChooseUs = () => {
  return (
    <div className='why-choose-us'>
        <div className="why">
            <h6>Expolre</h6>
            <h4>Why Choose Us</h4>
        </div>
        <div className="wcu-card">
           {chooseUs.map((itr, index)=>(
            <WcuCard 
            key={index}
            icon={itr.icon}
            title={itr.title}
            story={itr.story}
            />
           ))}
        </div>
    </div>
  )
}

export default WhyChooseUs