import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'



const DispNavbar = () => {
    const [navbar, setNavbar] = useState(null)
    useEffect(()=>{
        // const handScroll =(e)=>{
            if(window.scrollY){
                setNavbar(<Navbar2 />)
            }
        // }
    }, [navbar])

  return (
    <>{navbar}</>
  )
}

export default DispNavbar