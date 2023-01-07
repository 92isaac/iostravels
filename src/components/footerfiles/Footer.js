import React from 'react'
import '../asset/styles/footer.css'
import { Link } from 'react-router-dom'
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'


const Footer = () => {
    const currYear = new Date().getFullYear()
  return (
    <div className='footer'>
    <div className='footer-wrapper'>
        <div className="footer-items">
        <div className="hamburger">
        <Link to="/"><h3>
          <span>
            ios
          </span>
          travels
        </h3></Link>

        {/* <button onClick={()=>{setToggle(!toggle)}}>{!toggle ? <HiMenu />  :<FaTimes />}</button> */}
      </div>
        </div>
        <div className="footer-items">
            <h3>Trips</h3>
            <ul>
                <li>Group Trips</li>
                <li>Private trips</li>
                <li>Saved Trips</li>
            </ul>
        </div>
        <div className="footer-items">
            <h3>Company</h3>
            <ul>
                <li>About Us</li>
                <li>Contacts Us </li>
                <li>FAQS</li>
            </ul>
        </div>
        <div className="footer-items">
            <h3>Legals</h3>
            <ul>
                <li>Privacy Policies</li>
                <li>Terms and Conditions</li>
            </ul>
        </div>
        <div className="footer-items">
            <h3>Follow Us</h3>
            <div className="footer-icons">
            <FaTwitter />
            <FaLinkedin />
            <FaFacebook />
            <FaInstagram />
            </div>
        </div>
    </div>
        <div className="year">
            <h4>iostravels {currYear}</h4>
        </div>
    </div>
  )
}

export default Footer