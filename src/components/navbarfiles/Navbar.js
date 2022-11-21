import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { BsSearch } from 'react-icons/bs'
import { HiMenu } from "react-icons/hi"
import { FaTimes } from 'react-icons/fa'
import '../asset/styles/navbar.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
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
        {/* <i className="fas fa-search" aria-hidden='true' ></i> */}
      </div>
      <ul className="nav-item">
        <li><NavLink to="/group_trips" >Group Trips</NavLink></li>
        <li><NavLink to="/private_trips" >Private Trips</NavLink></li>
        <li><NavLink to="/faqs" >FAQs</NavLink></li>
        <li><NavLink to="/about" >About Us</NavLink></li>
        <li><NavLink to="/saved_trips" >Saved Trips</NavLink></li>
      </ul>
       <select name="" id="" className="select-countries">
        <option value="">NGR</option>
        <option value="">USA</option>
        <option value="">GHN</option>
       </select>
       <div className="membership-btn">
        <button >Login</button>
        <button >Sign Up</button>
       </div>
      </div>
    </nav>
  );
};

export default Navbar;
