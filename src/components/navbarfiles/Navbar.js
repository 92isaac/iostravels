import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { BsSearch } from 'react-icons/bs'
import { HiMenu } from "react-icons/hi"
import { FaTimes, FaChevronDown } from 'react-icons/fa'
import '../asset/styles/navbar.css'
import { select } from "../asset/database";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [seltoggle, setSeltoggle] = useState(false)
  const [selVal, setSelval] = useState(select[0])
  const ref = useRef()
  return (
    <nav className="navbar">
      <div className="hamburger">
        <Link to="/"><h3>
          <span>
            ios
          </span>
          travels
        </h3></Link>

        <button onClick={()=>{setToggle(!toggle)}}>{!toggle ? <HiMenu />  :<FaTimes />}</button>
      </div>
      <div className={!toggle ? "collaspe2" : 'collaspe1'}>
      <div className="search-input">
        <input
          type="text"
          placeholder="&#xF002; Search for trips..."
        />
      </div>
      <ul className="nav-item">
        <li><NavLink to="/group_trips" >Group Trips</NavLink></li>
        <li><NavLink to="/private_trips" >Private Trips</NavLink></li>
        <li><NavLink to="/faqs" >FAQs</NavLink></li>
        <li><NavLink to="/about" >About Us</NavLink></li>
        <li><NavLink to="/saved_trips" >Saved Trips</NavLink></li>
      </ul>
       <div name="" id="" className="select-countries">
        <p onClick={()=>{setSeltoggle(!seltoggle)}}><img src={selVal.countFlag} alt="nigeria flag"/>{selVal.cunrency}<FaChevronDown /></p>
            {select.map((itr)=>(<div onClick={()=>{setSelval(ref.current)}} ref={ref.current} className={!seltoggle ? "displayNone" : 'country_collaspe' } key={itr.cunrency}>
              <h4><img src={itr.countFlag} alt="nigeria flag"/>{itr.cunrency}</h4>
            </div>))}
       </div>
       <div className="membership-btn">
        <button >Login</button>
        <button >Sign Up</button>
       </div>
      </div>
    </nav>
  );
};

export default Navbar;
