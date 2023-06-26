import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className='footer'>
      <p>Made with  ❤️ by  Varga Hanna</p>
      <Link to='/contact'>Contact us</Link>
    </footer>
  )
}

export default Footer
