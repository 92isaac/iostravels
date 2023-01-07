import NGR from './images/icons8-nigeria-flag-16.png'
import paris from './images/paris.png'
import paris2 from './images/paris2.png'
import grotto from './images/grotto.png'
import hallway from './images/hallway.png'
import beach from './images/grottowater.png'
import { GiPalmTree, GiCommercialAirplane } from 'react-icons/gi'
import { FaBuilding } from 'react-icons/fa'
import { TbPlaneInflight } from 'react-icons/tb'


export const select = [
    {
        cunrency:"NGR",
        countFlag:NGR,
    }, 
    {
        cunrency:"USD",
        countFlag:NGR,
    }, 
    {
        cunrency:"EUR",
        countFlag:NGR,
    }, 
]


export const tripsData = [
    {
        slideImage:paris,
        location: "Tour to Paris",
        date:"20th Dec - Jan 3rd",
    },
    {
        slideImage:paris2,
        location: "Tour to Paris",
        date:"20th Dec - Jan 3rd",
    },
    {
        slideImage:grotto,
        location: "Tour to Paris",
        date:"20th Dec - Jan 3rd",
    },
    {
        slideImage:hallway,
        location: "Tour to Paris",
        date:"20th Dec - Jan 3rd",
    },
    {
        slideImage:beach,
        location: "Tour to Paris",
        date:"20th Dec - Jan 3rd",
    },
    {
        slideImage:beach,
        location: "Tour to Paris",
        date:"20th Dec - Jan 3rd",
    },

]


export const chooseUs = [
    {
        icon: <GiCommercialAirplane className='icons'/>,
        title:'The Best Travel Experience',
        story:'Sed at praesent ultricies nibh. Ullamcorper porttitor eu cum magna facilisis hac sem eget amet. Amet eleifend placerat non quis diam enim, lobortis.',
    },
    {
        icon: <TbPlaneInflight className='icons' style={{color:'grey'}}/>,
        title:'The Best Travel Experience',
        story:'Sed at praesent ultricies nibh. Ullamcorper porttitor eu cum magna facilisis hac sem eget amet. Amet eleifend placerat non quis diam enim, lobortis.',
    },
    {
        icon: <FaBuilding className='icons' style={{color:'#4EC8CF'}}/>,
        title:'The Best Travel Experience',
        story:'Sed at praesent ultricies nibh. Ullamcorper porttitor eu cum magna facilisis hac sem eget amet. Amet eleifend placerat non quis diam enim, lobortis.',
    },
    {
        icon: <GiPalmTree className='icons'/>,
        title:'The Best Travel Experience',
        story:'Sed at praesent ultricies nibh. Ullamcorper porttitor eu cum magna facilisis hac sem eget amet. Amet eleifend placerat non quis diam enim, lobortis.',
    },
]

