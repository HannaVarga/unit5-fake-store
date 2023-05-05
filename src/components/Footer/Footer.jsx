import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <h4>Made with ❤️ by mimo </h4>
      <Link  to="/contactus" className="contact-btn"><button>Contact us</button></Link>
    </div>
  )
}

export default Footer
