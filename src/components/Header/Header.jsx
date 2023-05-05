import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
 
  return (
    <div className='header-container'>
     <Link to="/" className="home-btn"> <h2>Fake Store</h2></Link>
     <div className="shopping-cart">
     {/* {count > 0 && <p className="shopping-cart-counter">{count}</p>} */}

      <AiOutlineShoppingCart className="shopping-cart-icon"  />
<p className='cart-count'>1</p>
    </div>
    </div>
  )
}

export default Header

