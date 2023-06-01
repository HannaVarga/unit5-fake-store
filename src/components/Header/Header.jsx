import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import './Header.css'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';


function Header() {
  const {darkMode, setDarkMode} = useContext(ThemeContext)
  return (
    <div className={darkMode?"home-container home-dark" : home-container}>
    <div className='header-container'>
     <Link to="/" className="home-btn"> <h2>Fake Store</h2></Link>
     <div className="shopping-cart">
     {/* {count > 0 && <p className="shopping-cart-counter">{count}</p>} */}

      <AiOutlineShoppingCart className="shopping-cart-icon"  />
<p className='cart-count'>1</p>
    </div>
    <button onClick={() => setDarkMode(!darkMode)}
    className={darkMode ? "theme-button-dark" : "theme-button"}>
      {
        darkMode ? "Light Mode" : "Dark Mode"
      }
    </button>
    </div>
    </div>
  )
}

export default Header

// comment out the anywhere else where it has a function the dark  mode  and see if the toggle button works in the header and then work on the functionality :)
